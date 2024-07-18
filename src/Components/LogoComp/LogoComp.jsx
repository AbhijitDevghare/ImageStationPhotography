import "./LogoComp.css"
import blackLogo from "../../Images/logo.png"

function LogoComp()
{
    return(
        <>
        
            <div className="blackLogo flexClass">
                <img src={blackLogo} alt="" />
            </div>
        
        </>
    )
}

export default LogoComp