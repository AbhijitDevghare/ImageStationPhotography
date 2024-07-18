import { useEffect, useState } from "react";

function useFetchData(fetchUrl) {
    const [respData, setRespData] = useState([]);
    const [respState, setRespState] = useState(false);
    const [respMessageState, setRespMessageState] = useState("");

    // Images Array
    const [firstColImages, setFirstColImages] = useState([]);
    const [secColImages, setSecColImages] = useState([]);
    const [thirdColImages, setThirdColImages] = useState([]);

    async function fetchData() {
        try {
            const response = await fetch(fetchUrl, {
                method: "GET"
            });

            const data = await response.json();

            if (data.success === true) {
                setRespState(true);
                const respMessage = data.message;
                setRespData(respMessage);
                console.log(respMessage);
            } else {
                setRespMessageState("ERROR IN FETCHING IMAGES ... Please try again");
                console.log("ERROR IN FETCHING IMAGES ... Please try again");
            }

        } catch (error) {
            console.log(error.message);
        }
    }

    function calculateArrayIndex() {
        if (respState) {
            const dataLength = respData.length;
            let firstLastCount;
            if ((dataLength % 2) === 0 && (dataLength>0)) {
                firstLastCount = (dataLength / 3);
            } else {
                firstLastCount = (dataLength / 3) + 1;
            }
            const secFirstCount = firstLastCount;
            const thirdFirstCount = secFirstCount + firstLastCount;
            const lastCount = dataLength;

            const arr1 = respData.slice(0, Math.floor(firstLastCount));
            const arr2 = respData.slice(Math.floor(secFirstCount),Math.floor(thirdFirstCount))
            const arr3 = respData.slice(Math.floor(thirdFirstCount), lastCount)
            setFirstColImages(arr1);
            setSecColImages(arr2);
            setThirdColImages(arr3);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        calculateArrayIndex();
    }, [respState, respData]);

    return [respData, respMessageState, respState, firstColImages, secColImages, thirdColImages];
}

export default useFetchData;
