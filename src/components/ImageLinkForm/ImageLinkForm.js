import React from "react";
import './ImageLinkForm.css'

const ImageLinkForm =(prop)=>{
    const {onInputChange, onButtonSubmit} = prop
    return(
        <div>
            <p className="f3">
                {'This Magic Brain Will detect Faces in your picture. Try it!'}
            </p>
            <div className="center">
                <div className="form center pa4 br3 shadow-5">
                    <input onChange={onInputChange} className="f4 pa2 w-70 center" type='text' />
                    <button onClick={onButtonSubmit} className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple">Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm