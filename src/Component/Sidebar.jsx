import React from 'react'
import { Link} from "react-router-dom"
import { useState } from 'react'



export default function layout() {
    const [active, setactive] = useState(1)

    return ( 
        <div className='w-[270px] h-[100vh] bg-[#FFFFFF] overflow-y-auto'>
            
            <p className='text-gray-300 text-[16px] mt-[10px] ml-[15px] mb-[10px]'>GENERAL</p>
            <Link to="/current">
                <div 
                    className={
                        active === 1 ? 
                        'w-[100%] h-[50px] flex justify-start items-center bg-[#FFFFFF]' :
                        'w-[100%] h-[50px] flex justify-start  items-center  hover:cursor-pointer'
                    } 
                    onClick={() => setactive(1)}
                    // style={{color:'#2a4365'}}
                >
                   
                    <p className='ml-[10px] text-black text-[16px] ml-[15px] font-semibold'>Current request</p>
                </div>
                <hr  />
            </Link>
           
             {/* <p className='text-gray-300 text-[16px] mt-[10px] ml-[15px] mb-[10px]'>WORKSHOP</p> */}
            <Link to="/ongoing">
                <div 
                    className={
                        active === 2 ? 
                        'w-[100%] h-[50px] flex justify-start items-center bg-[#FFFFFF]' :
                        'w-[100%] h-[50px] flex justify-start items-center  hover:cursor-pointer'
                    } 
                    onClick={() => setactive(2)}
                >
                   
                    <p className='ml-[10px] text-black text-[16px] ml-[15px] font-semibold'>Ongoing stays</p>
                </div>
                <hr  />
            </Link> 
            <Link to="/previous">
                <div 
                    className={
                        active === 3 ? 
                        'w-[100%] h-[50px] flex justify-start items-center bg-[#FFFFFF]' :
                        'w-[100%] h-[50px] flex justify-start items-center  hover:cursor-pointer'
                    } 
                    onClick={() => setactive(3)}
                >
                   
                    <p className='ml-[10px] text-black text-[16px] ml-[15px] font-semibold'>Previous stays</p>
                </div>
                <hr  />
            </Link> 
            <Link to="/previous">
                <div 
                    className={
                        active === 4 ? 
                        'w-[100%] h-[50px] flex justify-start items-center bg-[#FFFFFF]' :
                        'w-[100%] h-[50px] flex justify-start items-center  hover:cursor-pointer'
                    } 
                    onClick={() => setactive(4)}
                >
                   
                    <p className='ml-[10px] text-black text-[16px] ml-[15px] font-semibold'>Reports </p>
                </div>
                <hr  />
            </Link> 
           
          
        </div>
    )
}
