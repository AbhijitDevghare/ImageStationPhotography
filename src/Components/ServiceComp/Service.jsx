import React, { useContext, useState, useEffect } from 'react';
import "./Service.css"
import { NavLink } from "react-router-dom"
import { GlobalStateContext } from "../../Context/GlobalContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import useDeleteDataHook from '../Hooks/deleteDataHook';
import serverUrl from "../../serverUrl.js"



function Service(props)
{
    const { user, isLoggedIn } = useContext(GlobalStateContext);

    // Service Delete Hook
    const [isDeletedState, deleteResponseMessage, DeleteData, isDeleting, timeoutExpired] = useDeleteDataHook();

    const [isDeleteOptionClicked, setIsDeleteOptionClicked] = useState(false);
    const [deleteBoxState, setDeleteBoxState] = useState(false);
    const [localDeleteResponseMessage, setLocalDeleteResponseMessage] = useState("");

    // Handle the delete option
    const handleDeleteButton = async () => {
        console.log("HANDLE DELETE BUTTON CLICKED");
        setDeleteBoxState(true);
        try {
            await DeleteData(`${serverUrl}/deleteMedia/${props.mediaType}/${props.id}`,props.thumbnailImageUrl); // Adjust endpoint accordingly
            if (deleteResponseMessage) {
                setLocalDeleteResponseMessage(deleteResponseMessage);
            } else {
                setLocalDeleteResponseMessage("Successfully deleted the Service.");
            }
        } catch (error) {
            setLocalDeleteResponseMessage("Failed to delete the Service. Please try again.");
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

    
    return(
        <>
            <div className="cards "> 
                <div className="card">
                    <div className="card-image">
                        <img src={props.thumbnailImageUrl} alt="" /> 
                    </div>
                    <br />
                    <div>
                        <h3>{props.serviceName}</h3>
                
                    </div>
                    <div className="card-description">
                        <p>{props.description}</p>
                    </div>  
                    <div className="startingPrice">
                        <p>{props.startingPrice}</p>
                    </div> 

                    <div>
                        { props.duration}
                    </div>
                    <div>
                        {props.inclusions}
                    </div>
                    <div>
                        <NavLink to={"/contact"}>
                             <button>Book a Photoshoot</button>
                        </NavLink>
                    </div>               
                </div>


            </div>

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
    )
}

export default Service