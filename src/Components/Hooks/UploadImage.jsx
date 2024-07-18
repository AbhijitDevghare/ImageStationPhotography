import { useState } from "react"

function useUploadImages()
{
        const [uploaded,setUploaded] = useState(false);
        
        async function uploadImage()
        {
            try{
                const resp = await fetch("http://localhost:8081/upload", {
                    method: "POST",
                    credentials: "include",
                    redirect: "follow",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload)
                  });
    
            }catch(err)
            {
    
            }
        }
}


export default useUploadImages