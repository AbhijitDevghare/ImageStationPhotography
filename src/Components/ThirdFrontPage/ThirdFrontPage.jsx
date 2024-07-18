import useFetchData from "../Hooks/useFetchImagesHook";
import ImageComp from "../ImageComponent/ImageComp";

function ThirdFrontPage(props) {
    const [
        respData,
        respMessageState,
        respState,
        firstColImages,
        secColImages,
        thirdColImages
    ] = useFetchData(props.fetchUrl);

    return (
        <>
            {
                respState ?(
            <div className="flexClass Gallery">
                <div className="GalleryColumn">
                    {firstColImages && firstColImages.map((ele) => (
                        <ImageComp url={ele.imageUrl} key={ele._id} id={ele._id} imageType={ele.imageType}/>
                    ))}
                </div>
                <div className="GalleryColumn">
                    {secColImages && secColImages.map((ele) => (
                        <ImageComp url={ele.imageUrl} key={ele._id} id={ele._id} imageType={ele.imageType}/>
                    ))}
                </div>
                <div className="GalleryColumn">
                    {thirdColImages && thirdColImages.map((ele) => (
                        <ImageComp url={ele.imageUrl} key={ele._id} id={ele._id} imageType={ele.imageType} />
                    ))}
                </div>
            </div>
                ) : (
                        <>
                            <h2>Downloading...</h2>
                        </>
            )

            }
        </>
    );
}

export default ThirdFrontPage;
