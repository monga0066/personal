
import './App.css';
import {About} from './mycomp/About';
import Header from"./mycomp/header"
import {Todos} from"./mycomp/todos"
import {
  
  Routes,
  Route
  
} from "react-router-dom";
import { useState } from 'react';
import Alert from './mycomp/Alert';







function App() {
  const[mode,setmode]=useState('light')
  const[alert,setalert]=useState(null)

  const showalert=(message,type)=>{
    setalert({msg:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null)
    },1500)
  }
  const toggleMode=()=>{
    if(mode==="light"){
      setmode("dark")
      document.body.style.backgroundColor="#042743"
      showalert("Dark Mode is Enable","success")

    } else{
      setmode("light")
      document.body.style.backgroundColor="white"
      showalert("Light Mode is Enable","success")


    }
  }
  return (
    
    <>
    <Header title="Text Server" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className=' container my-3'>
     <Routes>
          
          <Route path={"/"} element={  <Todos showalert={showalert}  mode={mode}/>}></Route>
          <Route path={"/about"} element={  <About mode={mode}/>}></Route>
        </Routes>
    </div>
    
        
          
        
          
          
          
    
</>
   
     
  
    
  );
}

export default App;
