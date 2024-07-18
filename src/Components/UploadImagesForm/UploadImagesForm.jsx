import React, { useRef } from 'react';

function UploadImagesForm({ title, url, isLoading, setIsLoading, uploadStatus, setUploadStatus }) {
    const formRef = useRef(null);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        const formData = new FormData(event.target);
        try {
            const response = await fetch(url, {
                method: "POST",
                body: formData,
                credentials: "include"
            });
            const jsonResp = await response.json();
            console.log(jsonResp);
            if (response.ok) {
                setUploadStatus("Upload successful! Upload new file");
                formRef.current.reset();
            } else {
                setUploadStatus("Upload failed.");
            }
        } catch (error) {
            setUploadStatus("An error occurred.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="adminOptionsDivActive">
            <form
                ref={formRef}
                onSubmit={handleFormSubmit}
                encType="multipart/form-data"
            >
                <h2>{title}</h2>
                <br />
                <input type="file" name="file" />
                <br /><br />
                <button
                    type="submit"
                    className={isLoading ? "loadingButton" : "uploadingButton"}
                    disabled={isLoading}
                >
                    {isLoading ? "Uploading..." : "Upload"}
                </button>
            </form>
            {uploadStatus && <p>{uploadStatus}</p>}
        </div>
    );
}

export default UploadImagesForm;
