import React, { useEffect, useState } from 'react'
import { IoNewspaper } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { singleCard } from '../counterSlice';

export const Home = () => {
  const [productData, setProductData] = useState([])
  const navigate = useNavigate()
  const dispatch = useDispatch()


 useEffect(()=>{
  axios.get('https://api.jsonbin.io/v3/b/666e6e58acd3cb34a8581fa6')
  .then((res)=> setProductData(res.data.record))
  .catch((err)=> console.log(err))

 } , [])

 const handelAdd = (pera)=>{
  navigate('/Data')
  dispatch(singleCard(pera))
 }

 const handleshow =(pera2)=>{
  navigate('/Cart')
  dispatch(singleCard(pera2))
 }



  return (
    <>
    <div className="container p-5">
        <div className="main-row flex flex-wrap gap-5 justify-center">
          {
            productData.map((item , i)=>(
            <div key={i} className="single-card w-[250px] h-[700px] bg-sky-200 p-5 ">
                <div className="photo w-full h-[150px] overflow-hidden">
                  <img className="w-full h-full" src={item.image} alt="photo" />
                </div>
               <div className=" mt-5">
                 <h2 className="h-[40px] text-[20px] font-semibold pt-5 pb-5">{item.model}</h2>
                 <ul className="list-disc p-5 mt-5 h-[270px]">
                   <li>Brand : {item.brand}</li>
                   <li>Color : {item.color}</li>
                   <li>Ram : {item.ram} </li>
                   <li>Processor : {item.processor}</li>
                   <li>Display : {item.display}</li>
                   <li>Warranty : {item.warranty}</li>
                 </ul>
                 <hr/>
                 <h1 className="text-[22px] font-bold text-red-500 text-center mb-4">Price :{item.price} </h1>
             </div>
             <button onClick={()=>handelAdd(item)} className="w-full h-[40px] bg-orange-400 p-3 flex justify-center items-center gap-2"> <IoNewspaper />Show More</button>
             <button onClick={()=>handleshow(item)} className="w-full he[40px] bg-slate-200 p-3 flex justify-center items-center gap-2 mt-4"><FaCartShopping />Add to cart</button>
            </div>
            ))
          }
        </div>
      </div>
    
    
    
    </>
  )
}
