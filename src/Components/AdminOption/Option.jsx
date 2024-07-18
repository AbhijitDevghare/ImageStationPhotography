import React, { useState } from "react";
import "./Option.css";

function Option(props) {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <div 
            className={`adminOptionDiv ${isActive ? "adminOptionActive" : ""}`} 
            onClick={handleClick}
        >
            <p>{props.optionName}</p>
        </div>
    );
}

export default Option;
