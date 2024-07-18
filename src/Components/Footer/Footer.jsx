import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram ,faFacebook,faYoutube} from '@fortawesome/free-brands-svg-icons';
// import { faStar } from '@fortawesome/free-solid-svg-icons';


function Footer()
{
    return (
        <>
            <footer>
                Follow us on -
                <div className="footerClass">
                    
                   <a href="https://www.instagram.com/image_station_photography/">
                      <FontAwesomeIcon icon={faInstagram} className="logo" style={{ color: "#ff007b" }}  />
                   </a>
                    <p></p>
                    <FontAwesomeIcon icon={faFacebook} className="logo" style={{ color: "rgb(46, 157, 248)"}} /> 
                    <p></p>
                    <FontAwesomeIcon icon={faYoutube} className="logo" style={{ color: "red" }} /> 
                    {/* <FontAwesomeIcon icon={faStar} style={{ color: 'gold', fontSize: '24px' }} /> */}
                 </div>

                 
                <p id="allRightsReservedparaline"></p>
                 <div>
                 &nbsp;&nbsp;&nbsp;  &nbsp;All rights reserved ,<br />Image Station Photography
                 </div>
         </footer>
        </>
    )
}

export default Footer