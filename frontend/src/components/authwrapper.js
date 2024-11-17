import { useAuth0 } from '@auth0/auth0-react';

export default function AuthWrapper({ children }) {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  const urlParams = new URLSearchParams(window.location.search);
  const error = urlParams.get('error');
  const errorDescription = urlParams.get('error_description');

  let content = null;

  if (error) {
    // TODO: show some other error message here
    content = console.log(errorDescription);
  } else if (isLoading) {
    content = <div>Loading...</div>;
  } else if (!isAuthenticated) {
    // Do login with Auth0
    loginWithRedirect();
  } else {
    content = children;
  }
  return <>{content}</>;
}


