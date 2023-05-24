import React from "react";

import {Latest} from "../data";


export default function Page4() {
  return (
    <>
         { 
        Latest.map((e)=>{
          return(   
           <>
           <div className="flex justify-center items-center h-[100%] w-[100%] ">
            <div className="w-[80%] h-[100%]">
              <h1 className="text-4xl text-red-500 font-bold hover:underline cursor-pointer mt-10">{e.name3}</h1>
              <img className="h-[60vh] w-[70%] mt-10 cursor-pointer" src={e.deal} />
             </div>
            </div>
            </>
                )
        })
      }
    </>

  );
}