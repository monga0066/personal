
import './App.css';
import {About} from './mycomp/About';
import Header from"./mycomp/header"

import {Todos} from"./mycomp/todos"
import {
  
  Routes,
  Route
  
} from "react-router-dom";







function App() {
  return (
    
    <>
    <Header title="Text Server" searchbar={false}/>
     <Routes>
          
          <Route path={"/"} element={  <Todos/>}></Route>
          <Route path={"/about"} element={  <About/>}></Route>
        </Routes>
    
    
    
        
          
        
          
          
          
    
</>
   
     
  
    
  );
}

export default App;
