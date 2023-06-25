import React from 'react'
import Sidebar from '../Component/Sidebar'
import { Outlet } from "react-router-dom"


export default function Layout() {
  return (
    <div className='w-[100%] h-[100vh] flex justify-between items-center'>  
        <Sidebar/>
        <div className='w-[1110px] h-[100vh] flex justify-center items-center'>
          <Outlet/>
        </div>
    </div>
  )
}