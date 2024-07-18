import usegetAlbumVideoHook from "../Hooks/getAlbumVideoHook"
import Video from "../VideoComp/VideoComp"
import serverUrl from "../../serverUrl.js"


function GalleryVideos()
{
    const [respData,respMessageState,respState] = usegetAlbumVideoHook(`${serverUrl}/getGalleryVideos`)
    return(
        <>
                <div className="AlbumVideoFlexDiv">
                    {
                        (respState)  ? (
                            <>
                                {
                                respData.map((ele)=><Video url={ele.videoUrl} key={ele._id} id={ele._id} videoType={ele.videoType}/>)
                                }
                            </>
                        ) : (
                            <>
                                
                                <h2>Downloading...</h2>
                            </>
                    )
                    }

                 </div>
        </> 
    )
}

export default GalleryVideos