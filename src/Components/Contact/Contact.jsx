import LogoComp from "../LogoComp/LogoComp"
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp} from '@fortawesome/free-brands-svg-icons';

function Contact()
{
    return( 
        <>
            <LogoComp/>
            <div className="about-page">
                <div className="content">

                <div className="details">
                    <p>
                        <strong>
                        Address :
                        </strong> <br />
                        Image Station Photo Studio ,Shyam Nagar Amravati-444606,Maharashtra.
                    </p>
                    <p><strong>Email:</strong> <a href="mailto:swapnilwaghmare@gmail.com"><FaEnvelope /> swapnilwaghmare@gmail.com</a></p>
                    <p><strong>Phone:</strong> <a href="tel:+919371687850"><FaPhone /> +91 9371687850</a></p>
                    <p><strong>Instagram:</strong> <a href="https://www.instagram.com/image_station_photography/" target="_blank" rel="noopener noreferrer">Image Station Photography</a></p>
                    
                  <p>
                    <strong>Whatsapp:</strong> <br />
                    <FontAwesomeIcon icon={faWhatsapp} className="logo whatsapp" style={{ color: "black" }} /> &nbsp;9371687850
                  </p>
                   
                <p>
                        <strong>FaceBook: </strong>
                        
                        <a href="https://m.facebook.com/swapnil.waghmare.14289210/" target="_blank" rel="noopener noreferrer">
                        Image Station Photography</a>
                </p>
                
                </div>

            </div>

         </div>
        </>
    )
}

export default Contact