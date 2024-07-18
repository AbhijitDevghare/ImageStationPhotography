import './Gallery.css';
import React, { useState } from 'react';
import LogoComp from "../LogoComp/LogoComp";
import ThirdFrontPage from "../ThirdFrontPage/ThirdFrontPage";
import Album from '../Album/Album';
import GalleryVideos from '../GalleryVideos/GalleryVideos'; 
import Footer from '../Footer/Footer';
import serverUrl from "../../serverUrl.js"


function Gallery() {
    const [activeTab, setActiveTab] = useState('Photos');
    const [photosState,setPhotoState] = useState(true);
    const [albumState,setAlbumState] = useState(false);  
    const [videoState,setVideoState] = useState(false);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName); 
    };

    return (
        <>
            <LogoComp />
            <div id='galleryPageHeader'>
                <div onClick={
                    () =>{
                        handleTabClick('Photos')
                        setPhotoState(!photosState)
                        setAlbumState(false)
                        setVideoState(false)
                    } 

                    }>
                    <p className={activeTab === 'Photos' ? 'selectedTab' : ''}>Photos</p>
                </div>

                <div onClick={() =>{
                     handleTabClick('Albums')
                     setPhotoState(false)
                     setAlbumState(!albumState)
                     setVideoState(false)
                }}>
                    <p className={activeTab === 'Albums' ? 'selectedTab' : ''}>Albums</p>
                </div>

                <div onClick={() => {
                    handleTabClick('Videos')
                    setPhotoState(false)
                    setAlbumState(false)
                    setVideoState(!videoState)
                }}>
                    <p className={activeTab === 'Videos' ? 'selectedTab' : ''}>Videos</p>
                </div>
            </div>
            <br />
            <div className="thirdPageFlex">

             
                {
                    photosState && (
                        <ThirdFrontPage fetchUrl={`${serverUrl}/getGalleryImages`} />
                    )
                }
            </div>  


                {
                    albumState &&  <Album/>

                }

                {
                    videoState && <GalleryVideos/>
                }
                
              <Footer/>
        </>
    );
}

export default Gallery;
