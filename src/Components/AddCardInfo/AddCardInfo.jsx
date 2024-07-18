import React from "react";
import "./AddCardInfo.css";
import useaddCardInfo from "../Hooks/addCardInfoHook";

function AddCardInfo() {
    const [handleServicename, handleFileChange, handleDescription, handleStartingPrice, handleDuration, handleInclusions, submit,message] = useaddCardInfo();

    const handleSubmit = (e) => {
        e.preventDefault();
        submit();
    };

    return (
        <>
                <div className="centerFlex">
                        <form onSubmit={handleSubmit} className="reg-loginFlex">
                        <div>
                            <h2>Add Services</h2>
                        </div>
                        <div>
                            <label htmlFor="serviceName">Service Name: </label>
                            <input
                                type="text"
                                name="serviceName"
                                id="serviceName"
                                onChange={handleServicename}
                            />
                        </div>
                        <div>
                            <label>Thumbnail Image: </label>
                            <input
                                type="file"
                                name="thumbnail"
                                onChange={handleFileChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="description">Description: (required)</label>
                            <textarea
                                id="description"
                                name="description"
                                rows="2"
                                cols="35"
                                onChange={handleDescription}
                            />
                        </div>
                        <div>
                            <label htmlFor="startingPrice">Starting Price: </label>
                            <input
                                type="text"
                                name="startingPrice"
                                id="startingPrice"
                                onChange={handleStartingPrice}
                            />
                        </div>
                        <div>
                            <label htmlFor="duration">Duration: </label>
                            <input
                                type="text"
                                name="duration"
                                id="duration"
                                onChange={handleDuration}
                            />
                        </div>
                        <div>
                            <label htmlFor="inclusions">Inclusions: </label>
                            <input
                                type="text"
                                name="inclusions"
                                id="inclusions"
                                onChange={handleInclusions}
                            />
                        </div>
                        <label htmlFor="">{message}</label>
                        <div className="SubmitButtonDiv">
                            <button type="submit">Add Service</button>
                        </div>
                    </form>
                </div>
        </>
    );
}

export default AddCardInfo;
