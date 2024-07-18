import React from 'react';
import logo from "../../Images/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import useRegister from "../Hooks/useRegisterHook";
import LogoComp from '../LogoComp/LogoComp';

function Register() {
    const [handleName, handleUserName, handleUserEmail, handlePhoneNumber, handleUserPassword, handleConfirmPassword, register, message, setMessage] = useRegister();
    const navigate = useNavigate();

    const handleregister = () => {
        console.log("HANDLEREGISTER");
        register(navigate);
    };

    return (
        <>
        <div className='centerFlex'>
            
                    <div className="reg-loginFlex">
                        <div>
                            <h2>Register</h2>
                        </div>
                        <div>
                            <label>Name:</label>
                            <input type="text" placeholder="Enter your name" onChange={handleName} />
                        </div>
                        <div>
                            <label>Username:</label>
                            <input type="text" placeholder="Enter your username" onChange={handleUserName} />
                        </div>
                        <div>
                            <label>Email:</label>
                            <input type="text" placeholder="Enter your email" onChange={handleUserEmail} />
                        </div>
                        <div>
                            <label>Phone number:</label>
                            <input type="text" placeholder="Enter your phone number" onChange={handlePhoneNumber} />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input type="password" placeholder="Enter your Password" onChange={handleUserPassword} />
                        </div>
                        <div>
                            <label>Confirm password:</label>
                            <input type="password" placeholder="Confirm your password" onChange={handleConfirmPassword} />
                        </div>
                        
                        {message && <label className="error-message">{message}</label>}
                        <div>
                            <button type="submit" onClick={handleregister}>Submit</button>
                        </div>
                        <div>
                            <NavLink to={"/login"}>
                            login
                            </NavLink>
                        </div>
            </div>

       </div>
        </>
    );
}

export default Register;
