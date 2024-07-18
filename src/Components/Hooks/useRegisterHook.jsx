import { useState } from "react";
import serverUrl from "../../serverUrl.js"


function useRegister() {
    // const serverUrl = "https://imagestationphotography.onrender.com";

    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [passWord, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const [message, setMessage] = useState("");

    const handleName = (event) => {
        setName(event.target.value);
    };

    const handleUserName = (event) => {
        setUserName(event.target.value);
    };

    const handlePhoneNumber = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleUserEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleUserPassword = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
    };

    async function register(navigate) {
        console.log("REGISTER FUNCTION");
        const payload = {
            name: name,
            username: userName,
            email: email,
            phoneNumber: phoneNumber,
            password: passWord,
            confirmPassword: confirmPassword,
        };

        try {
            const resp = await fetch(`${serverUrl}/register`, {
                method: "POST",
                credentials: "include",
                redirect: "follow",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            console.log("REQUEST SENT");

            const respMessage = await resp.json();
            console.log(respMessage.message);
            setMessage(respMessage.message);

            if (resp.ok) {
                navigate('/login')  ;
            } else {
                // Handle registration error
                console.error("Registration failed:", resp.statusText);
            }
        } catch (error) {
            console.error("Error during registration:", error);
        }
    }

    return [handleName, handleUserName, handleUserEmail, handlePhoneNumber, handleUserPassword, handleConfirmPassword, register, message, setMessage];
}

export default useRegister;
