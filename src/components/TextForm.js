import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () =>{
    // console.log("Uppercase was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case", "success");
  }
  const handleLowClick = () =>{
    // console.log("Lowercase was clicked" + text)
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower case", "success");
  }
  const handleClearClick = () =>{
    
    let newText = '';
    setText(newText);
    props.showAlert("Text cleared", "info");
  }
  const handleOnChange = (event) =>{
    // console.log("on Change")
    setText(event.target.value);
  }

  // const handleCopy = () => {
  //   console.log("i am copy")
  //   var text = document.getElementById("myBox");
  //   text.select();
  //   text.setSelectionRange(0,9999);
  //   navigator.clipboard.writeText(text.value);
  //   props.showAlert("copies to clipboard!", "primary")
  // }


  const [text, setText] = useState('')
  //text = "new text"; //wrong way to change the state
  //setText("new text") // correct way to change the state
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2 className='mb-2'>{props.heading}</h2> 
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange = {handleOnChange} style={{backgroundColor: props.mode==='dark'?'#14366e':'white', color: props.mode==='dark'?'white':'#042743'}}  id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to upper case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to Lower case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
        {/* <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button> */}
    </div>
    <div className="container my-3 " style={{color: props.mode==='dark'?'white':'#042743'}} >
      <h1>Your text summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} and {text.length} characters</p>
      <p>{0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes read</p>
      <h2>preview</h2>
      <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
