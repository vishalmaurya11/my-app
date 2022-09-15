import "./App.css";
// import About from "./components/About";
import NavBar from "./components/NavBar";
 import TextForm from "./components/TextForm";
 import React ,{useState} from 'react';
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   //Link
// } from "react-router-dom";

function App() {

  const[mode,setMode]=useState('light');
  const [alert,setAlert] = useState(null);
  
  const showAlert=(message,type)=>{
    setAlert(
      {msg:message,
      type:type}
    )
    setTimeout(()=>{
      setAlert(null)
    },1500);
      }
  const toggleMode=()=>{
  if(mode ==='light')
  {
    setMode('dark');
   
    document.body.style.backgroundColor='#092440';
    showAlert("Dark mode in enabled ","success");

  }
  else{
    setMode('light');
   
    document.body.style.backgroundColor='white';
    showAlert("Light mode in enabled ","danger");
  }}
  
  const toggleModegreen=()=>{
    if(mode==='dark')
    {

      document.body.style.backgroundColor='#02140b';
    }
  }
  const toggleModegrey=()=>{
    if(mode==='dark')
    {
      document.body.style.backgroundColor='#141616';
    }

  }
  
  
  return (
    // eslint-disable-next-line
    
    <>
    
         {/* importing navbar from navbar.js   */}
         
          <NavBar title="TextUtils" mode={mode} toggleMode={toggleMode} toggleModegreen={toggleModegreen} toggleModegrey={toggleModegrey} />
          {/* <NavBar /> */}
          <Alert alert={alert} />
          {/* <Routes>
          <Route exact path="/about" element={<About myStyle={myStyle}/>}>
            
          </Route>
         
          <Route exact path="/" element={<TextForm  label ="email" heading="Enter the text" mode={mode}  showAlert={showAlert}  />}>
          
          </Route>
        </Routes>
          
          </Router> */}
          <TextForm  label ="email" heading="Enter the text" mode={mode}  showAlert={showAlert}  />
          {/* Word counter in textform */}
          {/* <div className="container"  >
          
          </div>
          
          <div className="container">
            <About/>
          </div> */}
            
          
        
          
          
          
          {/* <div className="card" style={{width: '18rem'}}>
            <img src="https://www.tutorialspoint.com/avro/images/apache-avro-mini-logo.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
          </div> */}

    </>
  );
}

export default App;
