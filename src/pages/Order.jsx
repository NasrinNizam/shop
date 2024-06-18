import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Order = () => {
  const navigate = useNavigate()

  const handleAdd = ()=>{
    navigate('/')
  }
  return (
    <>
    <section className="w-full h-screen bg-delivery bg-no-repeat bg-cover bg-center">
    <div className="container flex justify-center items-center flex-col pt-20">
    <div className="done w-[700px] h-[100px] flex gap-5">
        <img className="h-[100px] w-[120px] rounded-[100%]" src="https://cdn.dribbble.com/users/251873/screenshots/9289747/13540-sign-for-success-alert.gif" alt="o" />
        <h1 className="text-[34px] text-blue-800">Your order succesfully placed. <br/>
        Stay connected. Thank You.</h1>
    </div>
    <button onClick={()=>handleAdd()} className="mt-5 p-5 text-white rounded-md hover:bg-green-600 bg-sky-600 text-[22px] font-bold">Go Home</button>
    </div>
    </section>
    
    
    </>
  )
}
