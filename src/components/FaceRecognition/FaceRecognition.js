import React from "react";

const FaceRecognition =(prop)=>{
    const {imgUrl} = prop
    return(
        <div className="center ma">
            <div className="absolute mt2">
            <img alt="image" src={imgUrl} width='500px' height='auto'/>
            </div>
        </div>
    )
}

export default FaceRecognition