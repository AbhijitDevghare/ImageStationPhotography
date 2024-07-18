import React, { useContext, useEffect } from "react";
import "./Login.css";
import useLoggedIn from "../Hooks/useLoggedInHook";
import { NavLink, useNavigate } from "react-router-dom";
import { GlobalStateContext } from "../../Context/GlobalContext";

function Login() {
  const [handleUserIdentity, handleUserPassword, login, message] = useLoggedIn();
  const { isLoggedIn ,setMenuBarClicked} = useContext(GlobalStateContext);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     navigate("/");
  //   }
  // }, [isLoggedIn, navigate]);

  const handleLogin = (event) => {
    event.preventDefault();
    login(navigate);
  };

  return (
<>
        
      <div className="centerFlex">
      <div className="reg-loginFlex">
                    <div>
                      <h2>Login</h2>
                    </div>
                    <form onSubmit={handleLogin}>
                      <div>
                        <label>Username:</label>
                        <input
                          type="text"
                          placeholder="Enter your username, email, or number"
                          onChange={handleUserIdentity}
                        />
                      </div>
                      <div>
                        <label>Password:</label>
                        <input
                          type="password"
                          placeholder="Enter your Password"
                          onChange={handleUserPassword}
                        />
                      </div>
                      {message && <label className="error-message">{message}</label>}
                      <div>
                        <button type="submit">Submit</button>
                      </div>
                    </form>
                    <div>
                      <NavLink to={"/register"}>
                        <p onClick={()=>{setMenuBarClicked(false)}}>Sign up</p>
                      </NavLink>
                      &nbsp;
                      <NavLink to={"/forgotPassword"}>
                        Forgot password
                      </NavLink>
                    </div>
              </div>

      </div>
</>
  );
}

export default Login;
