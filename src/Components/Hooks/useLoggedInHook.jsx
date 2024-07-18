import { useContext, useState } from "react";
import { GlobalStateContext } from "../../Context/GlobalContext";
import { useNavigate } from "react-router-dom";
import serverUrl from "../../serverUrl.js";

function useLoggedIn() {
  const { setIsLoggedIn, setUser, setMenuBarClicked } = useContext(GlobalStateContext);
  const [userIdentity, setUserIdentity] = useState("");
  const [passWord, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleUserIdentity = (event) => setUserIdentity(event.target.value);
  const handleUserPassword = (event) => setPassword(event.target.value);

  // Helper function to create a delay
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const login = async () => {
    const payload = { identifier: userIdentity, password: passWord };

    try {
      const resp = await fetch(`${serverUrl}/login`, {
        method: "POST",
        credentials: "include", // Include cookies in the request
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const textResponse = await resp.text();
      
      let respMessage;
      try {
        respMessage = JSON.parse(textResponse);
      } catch (jsonError) {
        console.error("Error parsing JSON. Response text:", textResponse);
        setMessage("Unexpected response format.");
        return;
      }

      setMessage(respMessage.message);

      if (resp.ok) {
        // Set the logged-in state and user details
        setIsLoggedIn(true);
        setUser(respMessage.user);
        setMenuBarClicked(false);

        // Wait for 1-2 seconds before navigating
        await delay(1000); // 2 seconds delay

        // Navigate to the home page after delay
        navigate('/');
      } else {
        setIsLoggedIn(false);
        console.error("Login failed:", respMessage.message);
      }
    } catch (error) {
      setMessage("Error during login. Please try again.");
      console.error("Error during login:", error);
    }
  };

  return [handleUserIdentity, handleUserPassword, login, message, setMessage];
}

export default useLoggedIn;
