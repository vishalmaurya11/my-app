import React,{useState} from 'react'
export default function TextForm(props) {

    const handleUpClick=()=>{
        console.log("you have clicked "+ text);
       let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase ","success");
    }
    const handleLoClick=()=>{
      console.log("you have clicked "+ text);
     let newText=text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to lowercase ","success");
  }
    const handleOnChange=(event)=>{
      
        setText(event.target.value);
       
    }

       
const[text,setText]=useState("")



  return (
    <>
    <div className="container" style={ {color : props.mode==='dark'?'white':'black'}}>
            <div className="mb-3">
            <label forhtml="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
            <textarea className="form-control" value={text}  onChange={handleOnChange} style={ { backgroundColor: props.mode==='dark'?'grey':'white', color : props.mode==='dark'?'white':'black'}}id="exampleFormControlTextarea1" rows="5"></textarea>
            </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To Lowercase</button>
    </div>
    <div className='container my-2' style={ {color : props.mode==='dark'?'white':'black'}}>
      <h1> This is the summary of the text</h1>
      <p>{text.split(" ").length} words , {text.length} characters,   {text.split("\n").length} line count</p>
      <p>{0.08*text.split(" ").length} Minutes used</p>
      
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
}
