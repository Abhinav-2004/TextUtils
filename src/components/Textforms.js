import React , {useState} from 'react'
//useState is hook function check internet for more descriptions



export default function Textforms(props) {
    const[text, setText] = useState('');
    const handleLoClick = ()=>{
        console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Lowercase Converted", "success");
    }
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Uppercase Converted", "success");
    }
    const handleClear = ()=>{
        console.log("CLEARTEXT was clicked");
        setText('');
        props.showAlert("Text Cleared", "success");
    }
    const handleOnChange = (event)=>{
        console.log("Textbox text was modified");
        setText(event.target.value);
    }
    return (
        <>
        <div className="container" style = {{color:props.mode==='dark'?'white':'#525151'}}>
            <h1 >{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value = {text} style = {{backgroundColor:props.mode==='dark'?'#525151':'white', color:props.mode==='dark'?'white':'black'}} onChange = {handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClear}>Clear</button>
        </div>

        <div className="container my-5" style = {{color:props.mode==='dark'?'white':'black'}}>
            <h2>Your Text summary here</h2>
            <p>{text.split(" ").length} words, {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes were taken to read your Input</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
