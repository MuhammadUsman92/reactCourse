import React, {useState} from 'react' 

export default function TextForm(props) {
const [text, setText]=useState('');
const [fWord,setFindWord]=useState('');
const [rWord,setReplaceWord]=useState('');
const handleUpClick = () =>{
  let newText=text.toUpperCase();
  setText(newText);
  props.showAlert("Converted to uppercase", "success");
}
const handleOnChange=(event)=>{ 
  setText(event.target.value)
}
const handleLowerClick = () =>{
  let newText=text.toLowerCase();
  setText(newText);
  props.showAlert("Converted to lowercase", "success");
}
const handleFindWordChange=(event)=>{
  setFindWord(event.target.value);
}
const handleReplaceWordChange=(event)=>{
  setReplaceWord(event.target.value);
}
const handleReplaceOneOnClick=()=>{
  let newtext=text.replace(fWord,rWord);
  setText(newtext);
  props.showAlert(`First ${fWord} is replace by ${rWord}`, "success");
}
const handleReplaceAllOnClick=()=>{
  let newtext=text.replaceAll(fWord,rWord);
  setText(newtext);
  props.showAlert(`All ${fWord} are replace by ${rWord}`, "success");
  }
const handleClearClick = () => {
  setText('');
  props.showAlert("Text Box is clear", "success");
  }
const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Copied to Clipboard", "success");
  }
const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
  setText(newText.join(" "));  
  props.showAlert("All extra spaces are removed", "success");
  }
  return (
    <>
      <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <h2 className="form-label">{props.heading}</h2>
        <div className="mb-3">
          <textarea className={`form-control text-${props.mode==='light'?'dark':'light'}`} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'gray' }}  value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary m-1" onClick={handleUpClick}>
            Covert To Uppercase
        </button>
        <button className="btn btn-primary m-1" onClick={handleLowerClick}>
            Covert To Lowercase
        </button>
        <button className="btn btn-primary m-1" onClick={handleClearClick}>
            Clear
        </button>
        <button className="btn btn-primary m-1" onClick={handleCopy}>
            Copy
        </button>
        <button className="btn btn-primary m-1" onClick={handleExtraSpaces}>
            Remove Extra Spaces
        </button>
        <div className="input-group mb-3 m-1">
          <span className="input-group-text">Find Word</span>
          <input  className="form-control m-1" value={fWord} onChange={handleFindWordChange}/>
          <span className="input-group-text">Repalce Word</span>
          <input className="form-control m-1" value={rWord} onChange={handleReplaceWordChange}/>
          <button className="btn btn-primary m-1" onClick={handleReplaceOneOnClick}>Replace one by one</button>
          <button className="btn btn-primary m-1" onClick={handleReplaceAllOnClick}>Replace all</button>
        </div>
      </div>
      <div className="container my-1" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <h2>Your Text Summary</h2>
        <p>{text.trim().split(" ").length} words and {text.length} characters</p>
        <p>{.008*text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter Your text to preview'}</p>
      </div>
    </>
    
  )
}
