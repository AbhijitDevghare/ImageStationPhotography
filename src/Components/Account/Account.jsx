import UserImg from "./user.png";
import "./Account.css"
import LogoComp from "../LogoComp/LogoComp";
import { useContext } from "react";
import { GlobalStateContext } from "../../Context/GlobalContext";

function Account()
{
      const { user, isLoggedIn } = useContext(GlobalStateContext);
    // replace above with this

    return(
        <>
        <LogoComp/>

        <div className="centerFlex">
        {
            (!isLoggedIn)?(
                <>                    
                        <h1 id="userDetailsh1">User Details  Not <br />  Available <br />Please Login...</h1>                    
                </>
            ):(<> 
        <div id="userAccountDiv">
                    <h4>User Details</h4>
                    <br />
                    <img src={UserImg} alt="Image not found" />
                    <div id="details">
                        <p>Name : {user.name}</p>
                        <p>username : {user.username}</p>
                        <p>Email : {user.email}</p>
                        <p>Role : {user.role}</p>
                 </div>           
        </div>
            </>)
          }
          <div>

          </div>

        </div>
    </>
    )
}

export default Account