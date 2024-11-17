import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function Callback(){
    const {user, getAccessTokenSilently} = useAuth0();

    const navigate = useNavigate();

    function isEmployee(user){
        console.log(user);
        return false;
    }

    useEffect(() => {
        const handleAuth = async () => {
            if (user) {
                try{
                    const accessToken = await getAccessTokenSilently({
                        refreshToken: true
                    });


                    if (isEmployee(user)) {
                        navigate('/employee');
                    } else {
                        navigate('/customer');
                    }
                } catch (error) {
                    console.error(error);
                }
            }else{
                console.log("no user!")
            }
        }

        handleAuth();
    }, [user, getAccessTokenSilently, navigate]);

    return (
        <div>
            <h1>Logging in...</h1>
        </div>
    );
}