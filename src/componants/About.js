import React, { useState } from "react";


export default function About() {
 const [MyStyle , setMyStyle] = useState({
  color:'black',
  backgroundColor:'Dark'
 })
 const [btntext , setBtnText] =useState('Unable Dark mode')

 const toggleStyle = ()=>{
   if(MyStyle.color === 'black'){
    setMyStyle({
      color:'white',
  backgroundColor:'black',
  border:'1px solid white'
    })
    setBtnText('Unable Light mode');
   } 
   else{
    setMyStyle({
      color:'black',
  backgroundColor:'white',
  border:'1px solid black'
    })
    setBtnText('Unable Dark mode');
   }
 }

  return (
    <div className="container " style={MyStyle}>
      <h1>About</h1>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"   style={MyStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse" style={MyStyle}
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={MyStyle}>
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              first item's accordion body.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button 
              className="accordion-button collapsed"  style={MyStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse" style={MyStyle}
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={MyStyle}>
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              second item's accordion body. Let's imagine this being filled with
              some actual content.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"  style={MyStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse" style={MyStyle}
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={MyStyle}>
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              third item's accordion body. Nothing more exciting happening here
              in terms of content, but just filling up the space to make it
              look, at least at first glance, a bit more representative of how
              this would look in a real-world application.
            </div>
          </div>
        </div>
      </div>
     
      <button className="btn btn-primary my-3"  onClick={toggleStyle}>{btntext}</button>
     
    </div>
    
  );
}
