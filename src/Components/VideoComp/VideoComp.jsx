import React, { useContext, useState, useEffect } from 'react';
import { GlobalStateContext } from "../../Context/GlobalContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import useDeleteDataHook from '../Hooks/deleteDataHook';
import serverUrl from "../../serverUrl.js"

function Video(props) {
    const { user, isLoggedIn } = useContext(GlobalStateContext);

    // Video Delete Hook
    const [isDeletedState, deleteResponseMessage, DeleteData, isDeleting, timeoutExpired] = useDeleteDataHook();

    const [isDeleteOptionClicked, setIsDeleteOptionClicked] = useState(false);
    const [deleteBoxState, setDeleteBoxState] = useState(false);
    const [localDeleteResponseMessage, setLocalDeleteResponseMessage] = useState("");

    // Handle the delete option
    const handleDeleteButton = async () => {
        console.log("HANDLE DELETE BUTTON CLICKED");
        setDeleteBoxState(true);
        try {
            await DeleteData(`${serverUrl}/deleteMedia/${props.videoType}/${props.id}`,props.url); // Adjust endpoint accordingly
            if (deleteResponseMessage) {
                setLocalDeleteResponseMessage(deleteResponseMessage);
            } else {
                setLocalDeleteResponseMessage("Successfully deleted the video.");
            }
        } catch (error) {
            setLocalDeleteResponseMessage("Failed to delete the video. Please try again.");
        }
    }

    const handleCancelButton = () => {
        setIsDeleteOptionClicked(false);
        setDeleteBoxState(false);
        setLocalDeleteResponseMessage("");
    }

    const handleOkButton = () => {
        setIsDeleteOptionClicked(false);
        setDeleteBoxState(false);
        setLocalDeleteResponseMessage("");
    }

    useEffect(() => {
        if (!isDeleting && !isDeletedState) {
            setLocalDeleteResponseMessage(deleteResponseMessage || "");
        }
    }, [isDeleting, isDeletedState, deleteResponseMessage]);

    return (
        <>
            <video
                src={props.url}
                controls
                autoPlay={false}
                loop={true}
                muted={true}
                width={320} // Set initial width for mobile view
                style={{ maxWidth: '100%', height: 'auto' }} // Ensure responsive behavior
            ></video>

            {isLoggedIn && user.role === "admin" && (
                <div className='deleteOption'>
                    <button onClick={() => { setIsDeleteOptionClicked(true); }}>
                        <FontAwesomeIcon icon={faTrash} className="logo" style={{ color: "#000000ea" }} />
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

export default Video;
