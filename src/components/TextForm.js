import React, { useState } from 'react';


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "Success");
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", "Success");
    }
    
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "Success");

    }

    const [text, setText] = useState('');
    
    return (
    <>
    <div className='container' style={{color: props.mode === 'dark'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert To Uppercase</button> 
        <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert To Lowercase</button>
        <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark'?'black':'white'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length}Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"_ _ _"}</p>
    </div>
    </>
    )
}
