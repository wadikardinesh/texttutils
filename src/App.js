import "./App.css";
import About from "./componants/About";
import Navbar from "./componants/Navbar";
import TextForm from "./componants/TextForm";
import Alert from "./componants/Alert";
import React,{useState } from 'react';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App(props) {
  const [mode , setMode] = useState('light');
 const [alert, setAlert]= useState( null);

 const showAlert = (message ,type)=>{
  setAlert({
    msssage : message,
    type : type
  })

  setTimeout(()=>{
      setAlert(null);
  },2000)
 }

  const toggleMode =()=>{
      if (mode === 'light') {
        setMode('dark')
        document.body.style.backgroundColor = '#042743';
       showAlert("Dark mode has been enbled","success-Dark mode");
       document.title = 'TextUtils - DarkMode';
       
      //  setInterval(()=>{
      //   document.title = 'Laldu';
      //  },2000);

      //  setInterval(()=>{
      //   document.title = 'Bhujbal';
      //  },1500);

       
      }else{
        setMode('light')
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enbled","success:Light mode");
        document.title = 'TextUtils - LightMode';
      }
  }
  return (
    <>
    
      <Navbar title="textUtils" About="About US" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container"  style={{color:props.mode ==='dark'?'white':'black'}}>
   
         <TextForm  showAlert={showAlert} mode={mode}/>
       {/* <About></About> */}
      </div>
      
      
    </>
  );
}

export default App;
