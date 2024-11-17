import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserByEmail } from "../services/user"; // Replace with the actual import path

export default function AuthWrapper({ children }) {
  const { isAuthenticated, isLoading, loginWithRedirect, user } = useAuth0();
  const [checkingUser, setCheckingUser] = useState(false);
  const [userExists, setUserExists] = useState(null); // null indicates unresolved state
  const navigate = useNavigate();

  const urlParams = new URLSearchParams(window.location.search);
  const error = urlParams.get('error');
  const errorDescription = urlParams.get('error_description');

  useEffect(() => {
    const checkUserExists = async () => {
      if (user && user.email) {
        setCheckingUser(true);
        try {
          const fetchedUser = await getUserByEmail(user.email);
          setUserExists(!!fetchedUser); // Set to true if the user exists, false otherwise
        } catch (error) {
          console.error('Error fetching user:', error);
          setUserExists(false);
        } finally {
          setCheckingUser(false);
        }
      }
    };

    if (isAuthenticated) {
      checkUserExists();
    }
  }, [isAuthenticated, user]);

  let content = null;

  if (error) {
    // Show an error message
    content = <div>Error: {errorDescription}</div>;
  } else if (isLoading || checkingUser) {
    content = <div>Loading...</div>;
  } else if (!isAuthenticated) {
    loginWithRedirect();
  } else if (userExists === true) {
    content = <>{children}</>;
  } else if (userExists === false) {
    navigate('/customer/signup');
  }

  return <>{content}</>;
}
