import AlbumImage from "../AlbumImage/AlbumImage"
import usegetAlbumVideoHook from "../Hooks/getAlbumVideoHook"
import "./Album.css"
import serverUrl from "../../serverUrl.js"

function Album()
{
    const [respData,respMessageState,respState] = usegetAlbumVideoHook(`${serverUrl}/getGalleryAlbums`)
    return(
        <>
        <div className="AlbumVideoFlexDiv">
            {
                (respState) ? (
                    <>
                         {respData.map((ele)=><AlbumImage url={ele.imageUrl} key={ele._id} imageType={ele.imageType} id={ele._id}/>)}
                    </>
                ):(<h2>Downloading... </h2>
                    
                )

            }
        </div>

        </>
    )
}

export default Album