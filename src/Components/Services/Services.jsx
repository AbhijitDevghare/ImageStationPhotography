import Service from "../ServiceComp/Service"
import "./Services.css"
import LogoComp from "../LogoComp/LogoComp"
import usegetAlbumVideoHook from "../Hooks/getAlbumVideoHook"
import serverUrl from "../../serverUrl.js"

function Services()
{
    const [respData] = usegetAlbumVideoHook(`${serverUrl}/getServices`)
    return (
    <>
        <LogoComp/>
        
                    <h1 className="h1Center">Our Services</h1>
                    <div className="flexClass">
                                
                            <div className="cards">
                                {
                                    respData.map((ele)=>{
                                        return (
                                        <Service 
                                        serviceName={ele.serviceName} 
                                        thumbnailImageUrl={ele.thumbnailImageUrl}
                                        description={ele.description}
                                        startingPrice={ele.startingPrice}
                                        duration={ele.duration}
                                        inclusions={ele.inclusions}
                                        key={ele._id}
                                        mediaType={ele.mediaType}
                                        id={ele._id}
                                        />
                                         )
                                        
                                    })
                                }
                            </div>
                    </div>
    </>
    )
}

export default Services