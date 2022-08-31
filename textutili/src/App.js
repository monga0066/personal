
import './App.css';
import {About} from './mycomp/About';
import Header from"./mycomp/header"
import {Todos} from"./mycomp/todos"
import {
  
  Routes,
  Route
  
} from "react-router-dom";
import { useState } from 'react';







function App() {
  const[mode,setmode]=useState('light')
  const toggleMode=()=>{
    if(mode==="light"){
      setmode("dark")
      document.body.style.backgroundColor="#042743"

    } else{
      setmode("light")
      document.body.style.backgroundColor="white"

    }
  }
  return (
    
    <>
    <Header title="Text Server" mode={mode} toggleMode={toggleMode}/>
    <div className=' container my-3'>
     <Routes>
          
          <Route path={"/"} element={  <Todos  mode={mode}/>}></Route>
          <Route path={"/about"} element={  <About/>}></Route>
        </Routes>
    </div>
    
        
          
        
          
          
          
    
</>
   
     
  
    
  );
}

export default App;
