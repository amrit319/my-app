import React, {useState} from "react";

// handle end & set state 
export default function TextForm(props) {
const handleUpClick = () =>{
   // console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase()
    setText(newText);
    props.showAlert(": converted to uppercase!" , "success ");
}

  const handleLoClick = () =>{
     // console.log("uppercase was clicked" + text);
      let newText = text.toLowerCase()
      setText(newText);
      props.showAlert(": converted to lowercase!" ,"success ");
  }
  
 

 const handleClearClick = () =>{
  // console.log("uppercase was clicked" + text);
   let newText = ''
   setText(newText)
}

const handleCopyClick =() =>{
var text = document.getElementById("my box");
text.select();
navigator.clipboard.writeText(text.value);
props.showAlert(": copied to clipboard!" ,"success ");
}

const handleExtraSpaces = () =>{
let newText = text.split(/[ ]+/);
setText(newText.join("  "))
}


  const handleOnChange = (event) =>{
    // console.log("on change");
    setText(event.target.value)
  }
  const [text, setText] = useState('');
  return (
    <>
    <div className="container"  style={{color:props.mode==='dark'?'white' :'#042743'}}>
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'gray' :'white',
    color:props.mode==='dark'?'white' :'#042743'}} id="my box" rows="8"></textarea>
    
</div>
<button className="btn btn-primary mx-2"onClick={handleUpClick}>convert uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>convert lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>clear</button>
<button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy</button>
<button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove extra space</button>
</div>

<div className="container " style={{color:props.mode==='dark'?'white' :'#042743'}}>
<h2>your text summary</h2>
<p>{text.split("").length}words and {text.length} charcter</p>
<p></p>

<p>{8.008* text.split(" ").length}minuts read</p>
<h3>Preview</h3>
<p>{text.length>0?text:"Enter somthing in the textbox above preview it here"}</p>
</div>
</>
  )
}