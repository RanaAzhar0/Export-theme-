import React from "react";

import {Latest} from "../data";


export default function Hero() {
  return (
    <>
         { 
        Latest.map((e)=>{
            //console.log("helooo");
          return(
            
           <>
           <div className="flex justify-center items-center h-[100%] w-[100%] ">
            <div className="w-[80%] h-[100%]">
              {/*<h1 className="text-4xl text-red-500 font-bold hover:underline cursor-pointer mt-10">{e.name}</h1>
              <img className="h-[60vh] w-[70%] mt-10 cursor-pointer" src={e.hero} />*/}
              <div className=" h-[100%] w-[70%] ">
                <button className="px-4 py-2 text-white text-sm bg-red-600 mt-7 font-semibold">{e.btn}</button>
                <h1 className="text-4xl font-bold cursor-pointer mt-5">{e.para1}</h1>
                <h1 className="para text-silver-400 cursor-pointer mt-5">{e.para}</h1>
              </div>
              <div className="h-[60vh] w-[70%] flex flex-wrap">
                  <div className="h-[50%] w-[50%] cursor-pointer">
                    <button className="px-3 py-1 text-white text-sm bg-red-600 mt-4 font-semibold">{e.btn1}</button>
                    <div className="h-[70%] w-[100%] flex justify-between mt-5">
                      <img className="h-[75%] w-[49%]" src={e.hero1} /> 
                      <div className="h-[100%] w-[49%] flex flex-col">
                        <h1 className="font-semibold tracking-wide">{e.para2}</h1>
                        <h1 className="text-sm">{e.para3}</h1>
                      </div>
                    </div>
                  </div>
                  <div className="h-[50%] w-[50%] cursor-pointer">
                    <button className="px-3 py-1 text-white text-sm bg-red-600 mt-4 font-semibold">{e.btn}</button>
                    <div className="h-[70%] w-[100%] flex justify-between mt-5">
                      <img className="h-[75%] w-[49%]" src={e.hero2} /> 
                      <div className="h-[100%] w-[49%] flex flex-col">
                        <h1 className="font-semibold tracking-wide">{e.para4}</h1>
                        <h1 className="text-sm">{e.para5}</h1>
                      </div>
                    </div>
                  </div>
                  <div className="h-[50%] w-[50%] cursor-pointer">
                    <div className="flex justify-between w-[65%]">
                      <button className="px-3 py-1 text-white text-sm font-semibold bg-red-600 mt-4">{e.btn3}</button>
                      <button className="px-3 py-1 text-white text-sm font-semibold bg-red-600 mt-4">{e.btn4}</button>
                      <button className="px-3 py-1 text-white text-sm font-semibold bg-red-600 mt-4">{e.btn}</button>
                    </div>
                    <div className="h-[70%] w-[100%] flex justify-between mt-5">
                      <img className="h-[75%] w-[49%]" src={e.hero3} /> 
                      <div className="h-[100%] w-[49%] flex flex-col">
                        <h1 className="font-semibold tracking-wide">{e.para2}</h1>
                        <h1 className="text-sm">{e.para3}</h1>
                      </div>
                    </div>
                  </div>
                  <div className="h-[50%] w-[50%] cursor-pointer">
                    <button className="px-3 py-1 text-white text-sm bg-red-600 mt-4 font-semibold">{e.btn5}</button>
                    <div className="h-[70%] w-[100%] flex justify-between mt-5">
                      <img className="h-[75%] w-[49%]" src={e.hero4} /> 
                      <div className="h-[100%] w-[49%] flex flex-col">
                        <h1 className="font-semibold tracking-wide">{e.para2}</h1>
                        <h1 className="text-sm">{e.para3}</h1>
                      </div>
                    </div>
                  </div>
              </div>
              <div className="last mt-[100px] mb-[50px] w-[100%] h-[2px] bg-gray-600"></div>   
            </div>
            </div>
            </>
                )
        })
      }
    </>

  );
}