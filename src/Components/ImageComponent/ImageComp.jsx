import React, { useContext, useState, useEffect } from 'react';
import "./ImageComp.css";
import { GlobalStateContext } from "../../Context/GlobalContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faDownload } from '@fortawesome/free-solid-svg-icons';
import useDownloadImage from '../Hooks/downloadImageHook';
import useDeleteDataHook from '../Hooks/deleteDataHook';
import serverUrl from "../../serverUrl.js"


function ImageComp(props) {
    const { user, isLoggedIn } = useContext(GlobalStateContext);

    // Image Delete Hook
    const [isDeletedState, deleteResponseMessage, DeleteData, isDeleting, timeoutExpired] = useDeleteDataHook();

    // Download Image Hook
    const [downloadImage] = useDownloadImage();

    const [isDeleteOptionClicked, setIsDeleteOptionClicked] = useState(false);
    const [deleteBoxState, setDeleteBoxState] = useState(false);
    const [localDeleteResponseMessage, setLocalDeleteResponseMessage] = useState("");

    // Handle the delete option inside of download option
    const handleDeleteButton = async () => {
        console.log("HANDLE DELETE BUTTON CLICKED");
        setDeleteBoxState(true);
        try {
            await DeleteData(`${serverUrl}/deleteMedia/${props.imageType}/${props.id}`,props.url);
            // Check if deleteResponseMessage is updated with success message
            if (deleteResponseMessage) {
                setLocalDeleteResponseMessage(deleteResponseMessage);
            } else {
                setLocalDeleteResponseMessage("Successfully deleted the image."); // Default success message
            }
        } catch (error) {
            setLocalDeleteResponseMessage("Failed to delete the image. Please try again.");
        }
    }

    const handleCancelButton = () => {
        setIsDeleteOptionClicked(false);
        setDeleteBoxState(false);
        setLocalDeleteResponseMessage(""); // Clear any previous messages
    }

    const handleOkButton = () => {
        setIsDeleteOptionClicked(false);
        setDeleteBoxState(false);
        setLocalDeleteResponseMessage(""); // Clear any previous messages
    }

    useEffect(() => {
        if (!isDeleting && !isDeletedState) {
            setLocalDeleteResponseMessage(deleteResponseMessage || ""); // Update local message with deleteResponseMessage
        }
    }, [isDeleting, isDeletedState, deleteResponseMessage]);

    return (
        <>
            <img src={props.url} alt={props.imageType}/>

            {isLoggedIn && user.role === "admin" && (
                <div className='deleteOption'>
                    <button onClick={() => { setIsDeleteOptionClicked(true); }}>
                        <FontAwesomeIcon icon={faTrash} className="logo" style={{ color: "#000000ea" }} />
                    </button>
                    <button id="downloadBtn" onClick={() => downloadImage(props.url)}>
                        <FontAwesomeIcon icon={faDownload} className="logo" style={{ color: "#000000ea" }} />
                    </button>
                </div>
            )}

            {isDeleteOptionClicked && (
                <div className="deleteBoxMain">
                    <div className="deleteBox">
                        {!deleteBoxState && (
                            <>
                                <button onClick={handleDeleteButton}>Confirm <br /> Delete</button>
                                <button onClick={handleCancelButton}>Cancel</button>
                            </>
                        )}
                        {isDeleting && !isDeletedState ? (
                            timeoutExpired ? (
                                <>
                                    <p>Taking longer than expected. Please try again later.</p>
                                    <button onClick={handleOkButton}>Ok</button>
                                </>
                            ) : (
                                <p>&nbsp;&nbsp; Deleting...<br />Please Wait</p>
                            )
                        ) : (
                            localDeleteResponseMessage && (
                                <>
                                    <p>{localDeleteResponseMessage}</p>
                                    <button onClick={handleOkButton}>Ok</button>
                                </>
                            )
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default ImageComp;
