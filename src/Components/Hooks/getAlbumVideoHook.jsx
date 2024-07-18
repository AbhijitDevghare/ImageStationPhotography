import { useEffect, useState } from "react";

function usegetAlbumVideoHook(fetchUrl)
{
    const [respData, setRespData] = useState([]);
    const [respState, setRespState] = useState(false)
    const [respMessageState, setRespMessageState] = useState("");


    async function fetchData() {
        try {
            const response = await fetch(fetchUrl, {
                method: "GET"
            });

            const data = await response.json();
            console.log(data)

            if (data.success === true) {
                setRespState(true);
                const respMessage = data.message;
                setRespData(respMessage);
                console.log(respMessage);
            } else {
                setRespMessageState("ERROR IN FETCHING Data ... Please try again");
                console.log("ERROR IN FETCHING Data ... Please try again");
            }

        } catch (error) {
            console.log(error.message);
        }
    }


    useEffect(() => {
        fetchData();
    }, []);


    return [respData, respMessageState, respState];

}

export default usegetAlbumVideoHook