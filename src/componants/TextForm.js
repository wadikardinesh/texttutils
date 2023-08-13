import React,{useState} from 'react'

export default function TextForm(props) {
   
    const handlnUpick = () =>{
        // console.log("hadled to uppercase" + text);
       var newText = text.toUpperCase();
        setText(newText);
        
        
      
    }
    const handleLoClick = () =>{
        var newText = text.toLowerCase();
        setText(newText);

    }
   const handleClearClick = ()=>{
    var newText = '';
    setText(newText);
   }

    const handleOnChange = (event) =>{
        console.log("on Change");
        setText(event.target.value)
    }

    // Copy text
    const handleCopy =()=>{
      var text = document.getElementById('mybox');
      text.select();
      navigator.clipboard.writeText(text.value);
    }
 
  // extra spaces
  const handleExtraSpace = ()=>{
    var txt= text.split(/[ ]+/) ;
    setText(txt.join(" "))
  }

    const [text, setText] = useState('Enter here text');
   
  return (
    <>
    <div className='container my-4' style={{color:props.mode ==='dark'?'white':'black'}}>
    <h2 >Enter the message below</h2>
      <div className="mb-3" style={{color:props.mode ==='dark'?'white':'black'}}>
        <textarea className="form-control" id="mybox" onChange={handleOnChange} style={{backgroundColor:props.mode ==='dark'?'gray':'white',color:props.mode ==='dark'?'white':'black'}} value={text} rows="8"></textarea>
     </div>
        <button className='btn btn-primary' onClick={handlnUpick}>Convert to UpperCase</button>
        <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to LowerCase</button> 
        <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear Text</button>
        <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
        <button className='btn btn-primary mx-2' onClick={handleExtraSpace}>Remove Extra Spaces</button>
    
       <div className='container my-2'  style={{color:props.mode ==='dark'?'white':'black'}}>
        <h2>Your Text Summery</h2>
        <p>{text.split(" ").length} words and {text.length} character</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter message above"}</p>
       </div>

     </div>
    </>
  )
}
