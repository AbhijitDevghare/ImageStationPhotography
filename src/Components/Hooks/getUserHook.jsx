import { useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { GlobalStateContext } from "../../Context/GlobalContext";
import serverUrl from "../../serverUrl.js";

function useGetUser() {
    const { isLoggedIn, setIsLoggedIn, getUser, setGetUser, user, setUser } = useContext(GlobalStateContext);
    const navigate = useNavigate();
    
    const getUserData = async () => {
        try {
            const resp = await fetch(`${serverUrl}/getuser`, {
                method: "GET",
                credentials: "include", // Include credentials (cookies) with the request
                redirect: "follow",
                headers: { "Content-Type": "application/json" },
            });

            console.log("=========== GETUSER =============");

            const data = await resp.json();
            console.log(data);

            if (resp.status !== 200) {
                setIsLoggedIn(false); // Set state to logged out
                setGetUser(false); // Indicate getUser request failed
                return;
            }

            const userInfo = data.data;

            setIsLoggedIn(true); // Set state to logged in
            setUser(userInfo); // Store user information
            console.log(data);
            setGetUser(true); // Indicate getUser request succeeded
        } catch (error) {
            console.log(error.message); // Log error message
        }
    };

    useEffect(() => {
        getUserData(); // Fetch user data when component mounts or getUser changes
    }, []);

    return [user, isLoggedIn, getUser];
}

export default useGetUser;
