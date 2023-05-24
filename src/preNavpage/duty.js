import React from "react";
import {Latest} from "../data";


export default function Duty() {
  return (
    <>
         { 
        Latest.map((e)=>{
            //console.log("helooo");
          return(
            
           <>
           <div className="flex justify-center items-center h-[100%] w-[100%] ">
            <div className="w-[80%] h-[100%]">
              <h1 className="text-4xl text-red-500 font-bold hover:underline cursor-pointer mt-10">{e.duty}</h1>
              <img className="h-[60vh] w-[100%] mt-10 cursor-pointer" src={e.duty1} />     
            </div>
            </div>
            </>
                )
        })
      }
    </>

  );
}