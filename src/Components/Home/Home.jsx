import "./Home.css";
import Footer from "../Footer/Footer";
import FrontHomePage from "../FrontHomePage/FrontHomePage";
import SecondFrontPage from "../SecondFrontPage/SecondFrontPage";
import ThirdFrontPage from "../ThirdFrontPage/ThirdFrontPage";
import thumbNailone from "../../Images/thumbnailone.png"
import thumbNailtwo from "../../Images/thumbnailtwo.png"
import useGetUser from "../Hooks/getUserHook";
import serverUrl from "../../serverUrl.js"
import { useContext } from "react";
import { GlobalStateContext } from "../../Context/GlobalContext.jsx";


function Home() {
    const {getUser,isLoggedIn} = useContext(GlobalStateContext);
    isLoggedIn && !getUser && useGetUser();

    return (
        <>
        <div className="frontPageDiv">
             <FrontHomePage/>
        </div>

        

        <div className="secfrontPageDiv">
            <h1>We Welcome you in the world of <br />
             Image Station Photography</h1>
            <SecondFrontPage/>
        </div>

        <div className="para">
                <h3>Why Choose Us?</h3> 
                <br />
                <p>We believe that every moment is a precious memory waiting to be captured. Our team of professional photographers and designers is dedicated to providing you with stunning visuals that tell your unique story. We use the latest high-end equipment and techniques to ensure that every shot is perfect. From candid moments to posed portraits, our attention to detail and commitment to quality guarantee breathtaking results.</p>
        </div>  


        <div className="thirdPageFlex">

            <div className="thumbNailone">
              <img src={thumbNailone} alt="thumbnailone"  />
            </div>
            <h1>Our Work...</h1>
            <img src={thumbNailtwo} alt="" className="thumbnailtwo" />
            <ThirdFrontPage fetchUrl={`${serverUrl}/getHomeImages`}/>
        </div>


           <div>
           <Footer/>
           </div>

        </>
    );
}

export default Home;
