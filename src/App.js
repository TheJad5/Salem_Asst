import Navbar from "./Navbar"
import Registration from "./pages/Registration"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import {Route, Routes} from "react-router-dom"
import React, {useState} from "react";

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  return (
<>     
<Navbar />
<div className='container'>
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/Registration" element={<Registration />}/>
    <Route path="/dashboard" element={<Dashboard />}/>
  </Routes>
</div>
</>
  )
}
export default App
