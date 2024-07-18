import "./SecondFrontPage.css"
import couple from "../../Images/couple.webp"

function SecondFrontPage()
{
        return (
            <>
                <div id="secondFrontPageWrapper">
                    <div id="secondfrontPageImageWrapper">
                    <img src={couple} alt="" />
                    </div>
                    <div>
                        <h2>Your love story, Our lens: Unveiling the Documentary Wedding Experience</h2>
                        <h3>Step into a world where every frame narrates a love story, meticulously captured by the skilled photographers at Image Station Photography. With an unwavering dedication to artistry and technical finesse, we specialize in crafting visual narratives that immortalize the essence of your special day. Each photograph is a testament to the emotional depth and beauty of your journey, preserving cherished moments in timeless elegance. Discover the magic of storytelling through our lens, where your love unfolds in every captured detail.</h3>
                    </div>
                </div>
            </>
        )
}

export default SecondFrontPage