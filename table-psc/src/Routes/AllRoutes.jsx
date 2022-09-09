
import {Route,Routes} from "react-router-dom"
import Homepage from "./Homepage"
export default function AllRoutes() {
  return (
    <>
    <Routes>
     <Route path="/" element={<h1><Homepage/></h1>} />
     <Route path="/login" element={<h1>Login Page</h1>} />
     <Route path="/task/:id" element={<h1>Task page</h1>} />
    </Routes>
    </>
    
  )
}
