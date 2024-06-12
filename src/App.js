
import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';


function App() {
  const[alert,setAlert]=useState(null);
  const [mode, setMode]=useState('light');

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
       document.body.style.backgroundColor='white';
       showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
      
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        {/* <Navbar/> */}
        <Alert alert={alert}/>
        <div className="container my-3">
          <TextForm showAlert={showAlert} mode={mode} heading="Enter the Text to analyze below"/>
          {/* <About mode={mode}></About> */}
        </div>
        
        
    </>
  );
}

export default App;
