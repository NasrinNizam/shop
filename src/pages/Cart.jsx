import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import counterSlice from '../counterSlice'
import { singleCard } from '../counterSlice'


export const Cart = () => {

  const data = useSelector((state)=>state.counter.value )
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleAdd = ()=>{
    navigate('/Order')
  }
  const handelShow = ()=>{
    navigate('/Home')
  }

  return (
    <>
    <div className="container flex flex-col items-center pt-20">
    <div className="w-[700px] h-[150px] bg-sky-100 flex gap-5">
        <div className="w-[200px] h-[150px]">
            <img className="w-full h-full" src={data.image} alt="photo" />
        </div>
        <div className="text mt-5">
            <h4 className=" text-blue-950 text-[16px] font-bold mb-3">Model : {data.model}</h4>
            <h4 className="text-blue-950 text-[16px] font-bold mb-3">Processor : {data.processor}</h4>
            <h4 className="text-blue-950 text-[16px] font-bold">Total price : {data.price}</h4>
        </div>
    </div>
    <div className="flex gap-5">
    <button onClick={handelShow()} className="p-5 bg-sky-200 mt-5 text-orange-600 font-extrabold hover:bg-orange-400 hover:text-white transition-all">Continue Shopping</button>
    <button onClick={handleAdd()} className="p-5 bg-sky-200 mt-5 text-orange-600 font-extrabold hover:bg-orange-400 hover:text-white transition-all">Confirm Order</button>
    </div>
    </div>
    </>
  )
}
