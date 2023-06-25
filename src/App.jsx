 import { Route, Routes } from "react-router-dom"
 
import Current from "./Component/Current";
import Layout from "./Component/Layout";
import Ongoing from "./Component/Ongoing";
// import AdminLayout from './pages/adminLayout'
// import Dashboard from './components/dashboard'
// import RepOrder from './components/repairorder'

import './App.css'




function App() {

  return (
    <>
      {/* <h1 className='bg-red-800 text-4xl'>React Router</h1> */}
    
      {/* {navbarCheck()} */}
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<Layout />}>
          <Route path="current" element={<Current />} />
          <Route path="ongoing" element={<Ongoing />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
