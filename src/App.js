import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  // Link,
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light'); //wheather dark mode is enabled or not 
  const [alert, setalert] = useState(null)

  const showAlert = (message, type) =>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setalert(null);
    }, 1500);

  }

  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#042743'
      showAlert("Dark mode has been enabled", "success")
      // document.title = 'TextUtils - Dark Mode'
      // setInterval(() => {
      //   document.title = 'TextUtils is amazing'
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'TextUtils is utility platform'
      // }, 1500);
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled", "success")
      // document.title = 'TextUtils - Light Mode'
    }
  }
  return (
    <>

      <BrowserRouter>
        <Navbar title="textUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        <div className="container my-3">

        <Routes>
        <Route exact path="/about" element={<About mode={mode} />} />
        <Route exact path="/" element={<TextForm showAlert = {showAlert} heading="Try TextUtils - Word Counter character counter, remove extra spaces" mode={mode}  />} />
      </Routes>
        
        </div>

      </BrowserRouter>

    </>
  );
}

export default App;
