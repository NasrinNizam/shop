import React from 'react'
import { useSelector } from 'react-redux'
export const Data = () => {
    const data = useSelector((state)=>state.counter.value)



  return (
    <>
    <section className="bg-slate-300">
        <div className="container flex justify-around bg-slate-100">
            <div className="image w-[300px] h-[400px] pt-10">
                <img className="w-full" src={data.image} alt="photo" />
            </div>
            <div className=" w-[600px] mt-5">
            <h2 className=" text-[20px] font-semibold pt-5 pb-5">{data.model}</h2>
              <ul className="list-none p-5">
                <li>Brand : {data.brand}</li>
                <li>Color : {data.color}</li>
                <li>Ram : {data.ram} </li>
                <li>Processor : {data.processor}</li>
                <li>Display : {data.display}</li>
                <li>Warranty : {data.warranty}</li>
              </ul>
              <h1 className="text-[22px] font-bold text-red-500">Price : {data.price} </h1>
            </div>
        </div>
    </section>
    <section className="bg-slate-300">
        <div className="container border-[1px] border-black mb-10">
            <h2 className="text-white bg-gray-700 text-[24px] text-center font-semibold">Specifications</h2>
            <div className="flex gap-5 p-3 border-black border-[1px] bg-white ">
                <div className=" text-[18px] text-orange-400 font-bold">Description:</div>
                <div className="description">{data.description}</div>
            </div>
            <div className="flex gap-5 p-3 border-black border-[1px] bg-white ">
                <div className=" text-[18px] text-orange-400 font-bold">Size :</div>
                <div className="size">{data.size}</div>
            </div>
            <div className="flex gap-5 p-3 border-black border-[1px] bg-white ">
                <div className=" text-[18px] text-orange-400 font-bold">Weight :</div>
                <div className="connectivity">{data.weight}</div>
            </div>
            <div className="flex gap-5 p-3 border-black border-[1px] bg-white ">
                <div className=" text-[18px] text-orange-400 font-bold">Display :</div>
                <div className="features">{data.display}</div>
            </div>
            <div className="flex gap-5 p-3 border-black border-[1px] bg-white ">
                <div className=" text-[18px] text-orange-400 font-bold">Battary :</div>
                <div className="battary">{data.battery}</div>
            </div>    
            <div className="flex gap-5 p-3 border-black border-[1px] bg-white ">
                <div className=" text-[18px] text-orange-400 font-bold">Memory :</div>
                <div>
                    <h4 className="text-orange-400">Ram -{data.ram} </h4>
                    <hr/>
                    <h4 className="text-orange-400">Rom -{data.rom} </h4>
                </div>
            </div>    
        </div>
    </section>
    </>
  )
}
