import { useState, useEffect } from "react";

function useDeleteDataHook() {
    const [isDeletedState, setIsDeletedState] = useState(false);
    const [deleteResponseMessage, setDeleteResponseMessage] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [timeoutExpired, setTimeoutExpired] = useState(false);

    const DeleteData = async (fetchUrl,imageUrl) => {
        console.log(fetchUrl);
        
        const requestBody = {
            url: imageUrl
        };

        setIsDeleting(true);
        setTimeoutExpired(false);
        try {
            const timeout = setTimeout(() => {
                setTimeoutExpired(true);
                setIsDeleting(false);  
            }, 5000); // Set a timeout of 5 seconds

           const resp = await fetch(fetchUrl, {
            method: "DELETE",
            credentials: "include",
            redirect: "follow",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestBody) // Include the request body
        });

            clearTimeout(timeout);
            const respJSON = await resp.json();
            setDeleteResponseMessage(respJSON.message);

            if (respJSON.success === true) {
                setIsDeletedState(true);
            } else {
                setIsDeletedState(false);
            }
            setIsDeleting(false);

        } catch (error) {
            setDeleteResponseMessage("Error: " + error.message);
            setIsDeleting(false);
        }
    }

    return [isDeletedState, deleteResponseMessage, DeleteData, isDeleting, timeoutExpired];
}

export default useDeleteDataHook;
