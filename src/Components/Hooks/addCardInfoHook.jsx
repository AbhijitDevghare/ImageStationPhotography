import { useState } from "react";
import serverUrl from "../../serverUrl.js"


function useaddCardInfo() {
    const [serviceName, setServiceName] = useState("");
    const [thumbnail, setThumbnail] = useState(null);
    const [description, setDescription] = useState("");
    const [startingPrice, setStartingPrice] = useState("");
    const [duration, setDuration] = useState("");
    const [inclusions, setInclusions] = useState("");
    const [message,setMessage] = useState("");

    const handleFileChange = (e) => {
        setThumbnail(e.target.files[0]);
    };

    const handleServicename = (e) => {
        setServiceName(e.target.value);
    };

    const handleDescription = (e) => {
        setDescription(e.target.value);
    };

    const handleDuration = (e) => {
        setDuration(e.target.value);
    };

    const handleStartingPrice = (e) => {
        setStartingPrice(e.target.value);
    };

    const handleInclusions = (e) => {
        setInclusions(e.target.value);
    };

    async function submit() {
        try {
            const formData = new FormData();
            formData.append('serviceName', serviceName);
            formData.append('thumbnail', thumbnail);
            formData.append('description', description);
            formData.append('startingPrice', startingPrice);
            formData.append('duration', duration);
            formData.append('inclusions', inclusions);

            const response = await fetch(`${serverUrl}/addService`, {
                method: 'POST',
                credentials: "include",
                body: formData
            });

            const responseJson =  await response.json();
            console.log(responseJson);
            setMessage(responseJson.message)
        } catch (error) {
            console.log(error.message);
        }
    }

    return [handleServicename, handleFileChange, handleDescription, handleStartingPrice, handleDuration, handleInclusions, submit,message];
}

export default useaddCardInfo;
