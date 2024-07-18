import { useState } from "react";
import Option from "../AdminOption/Option";
import LogoComp from "../LogoComp/LogoComp";
import "./AdminOptions.css";
import AddCardInfo from "../AddCardInfo/AddCardInfo";
import UploadImagesForm from "../UploadImagesForm/UploadImagesForm";
import serverUrl from "../../serverUrl.js"

function AdminOptions() {
    const [addHomeImageState, setAddHomeImageState] = useState(false);
    const [addGalleryImageState, setAddGalleryImageState] = useState(false);
    const [addServicesState, setAddServicesState] = useState(false);
    const [addAlbumState, setAddAlbumState] = useState(false);
    const [addVideoState, setAddVideoState] = useState(false);

    // Separate states for each form
    const [homeImageUploadStatus, setHomeImageUploadStatus] = useState("");
    const [homeImageIsLoading, setHomeImageIsLoading] = useState(false);
    
    const [galleryImageUploadStatus, setGalleryImageUploadStatus] = useState("");
    const [galleryImageIsLoading, setGalleryImageIsLoading] = useState(false);

    const [albumUploadStatus, setAlbumUploadStatus] = useState("");
    const [albumIsLoading, setAlbumIsLoading] = useState(false);

    const [videoUploadStatus, setVideoUploadStatus] = useState("");
    const [videoIsLoading, setVideoIsLoading] = useState(false);

    return (
        <>
            <LogoComp  />
            <div className="adminOptionsFirstFlexDiv">
            <div className="adminOptionsClass">
                <div onClick={() => { setAddHomeImageState(!addHomeImageState) }}>
                    <Option optionName={"Add Home Images"} />
                </div>
                <div onClick={() => { setAddGalleryImageState(!addGalleryImageState) }}>
                    <Option optionName={"Add Gallery Images"} />
                </div>
                <div onClick={() => { setAddAlbumState(!addAlbumState) }}>
                    <Option optionName={"Add Albums"} />
                </div>
                <div onClick={() => { setAddVideoState(!addVideoState) }}>
                    <Option optionName={"Add Videos"} />
                </div>
                <div onClick={() => { setAddServicesState(!addServicesState) }}>
                    <Option optionName={"Add Services"} />
                </div>
            </div>

            
            {addHomeImageState && (
                <UploadImagesForm
                    title="Upload Home Image"
                    url={`${serverUrl}/uploadHomeImages`}
                    isLoading={homeImageIsLoading}
                    setIsLoading={setHomeImageIsLoading}
                    uploadStatus={homeImageUploadStatus}
                    setUploadStatus={setHomeImageUploadStatus}
                />
            )}

            {addGalleryImageState && (
                <UploadImagesForm
                    title="Upload Gallery Image"
                    url={`${serverUrl}/uploadGalleryImages`}

                    isLoading={galleryImageIsLoading}
                    setIsLoading={setGalleryImageIsLoading}
                    uploadStatus={galleryImageUploadStatus}
                    setUploadStatus={setGalleryImageUploadStatus}
                />
            )}

            {addAlbumState && (
                <UploadImagesForm
                    title="Upload Album"
                    url={`${serverUrl}/uploadAlbumImages`}

                    isLoading={albumIsLoading}
                    setIsLoading={setAlbumIsLoading}
                    uploadStatus={albumUploadStatus}
                    setUploadStatus={setAlbumUploadStatus}
                />
            )}

            {addVideoState && (
                <UploadImagesForm
                    title="Upload Video"
                    url={`${serverUrl}/uploadGalleryMedia`}

                    isLoading={videoIsLoading}
                    setIsLoading={setVideoIsLoading}
                    uploadStatus={videoUploadStatus}
                    setUploadStatus={setVideoUploadStatus}
                />
            )}

        </div>
        {addServicesState && <AddCardInfo />}

        </>
    );
}

export default AdminOptions;
