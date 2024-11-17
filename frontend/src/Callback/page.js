import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { isUserEmployee } from "../services/user"; // Adjust the import path accordingly

export default function Callback() {


    console.log("CALLING BACKL")

    const { user, getAccessTokenSilently } = useAuth0();
    const navigate = useNavigate();

    // Update isEmployee to use the async isUserEmployee function
    async function isEmployee(user) {
        console.log("Checking if user is an employee...");
        const email = user.email;
        try {
            const result = await isUserEmployee(email);
            console.log("Is user an employee?", result);
            return result;
        } catch (error) {
            console.error(error);
            return false; // Default to false in case of error
        }
    }

    useEffect(() => {
        const handleAuth = async () => {
            if (user) {
                try {
                    const accessToken = await getAccessTokenSilently({
                        refreshToken: true,
                    });

                    // Optionally set the access token in your API client if needed
                    // apiClient.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

                    const employeeStatus = await isEmployee(user);
                    if (employeeStatus) {
                        navigate("/employee");
                    } else {
                        navigate("/customer");
                    }
                } catch (error) {
                    console.error(error);
                }
            } else {
                console.log("No user!");
            }
        };

        handleAuth();
    }, [user, getAccessTokenSilently, navigate]);

    return (
        <div>
            <h1>Logging in...</h1>
        </div>
    );
}
