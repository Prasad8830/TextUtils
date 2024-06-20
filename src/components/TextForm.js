import React, {useState} from 'react'




export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }
    const handleLoClick=()=>{
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase","success");
  }
  const handleClearClick=()=>{
    let newText="";
    setText(newText);
    props.showAlert("Text cleard","success")
  }
    const handleOnChange=(event)=>{
        setText(event.target.value);

    }
    const[text,setText]=useState("");
    
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
    <h3>{props.heading}</h3>
    <div className="my-3">
      
      <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick} >Convert to Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick} >Clear the Text</button>
    </div>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h3>Your Text summary</h3>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <h4>Preview</h4>
      <p>{text}</p>
    </div>
    </>
  )
}

