import React from "react";
import { Game } from "../data";

function Games() {
    return (
      <>
        {
            Game.map((e)=>{
               return(
                <>
                    <div className="h-[62vh] w-[100%] flex justify-center ">
                      <div className="h-[100%] w-[85%] ">
                        <h1 className="text-4xl font-bold cursor-pointer mt-5">{e.para6}</h1>
                        <div className="h-[45vh] w-[100%] flex justify-between mt-7 ">
                            <div className="h-[100%] w-[13%] hover:underline hover:text-red-600 flex flex-col justify-evenly cursor-pointer ">
                                <img className="h-[70%] w-[100%]  " src={e.img6} />
                                <h1 className="text-md font-bold ">{e.para7}</h1>
                            </div>  
                            <div className="h-[100%] w-[13%] hover:underline hover:text-red-600 flex flex-col justify-evenly cursor-pointer ">
                                <img className="h-[70%] w-[100%]  " src={e.img7} />
                                <h1 className="text-lg font-bold ">{e.para8}</h1>
                            </div>
                            <div className="h-[100%] w-[13%] hover:underline hover:text-red-600 flex flex-col justify-evenly cursor-pointer ">
                                <img className="h-[70%] w-[100%]  " src={e.img9} />
                                <h1 className="text-lg font-bold ">{e.para9}</h1>
                            </div>
                            <div className="h-[100%] w-[13%] hover:underline hover:text-red-600 flex flex-col justify-evenly cursor-pointer ">
                                <img className="h-[70%] w-[100%]  " src={e.img10} />
                                <h1 className="text-lg font-bold ">{e.para10}</h1>
                            </div>
                            <div className="h-[100%] w-[13%] hover:underline hover:text-red-600 flex flex-col justify-evenly cursor-pointer ">
                                <img className="h-[70%] w-[100%]  " src={e.img11} />
                                <h1 className="text-lg font-bold ">{e.para11}</h1>
                            </div>
                            <div className="h-[100%] w-[13%] hover:underline hover:text-red-600 flex flex-col justify-evenly cursor-pointer ">
                                <img className="h-[70%] w-[100%]  " src={e.img12} />
                                <h1 className="text-lg font-bold ">{e.para12}</h1>
                            </div>
                            <div className="h-[100%] w-[13%] hover:underline flex flex-col justify-evenly cursor-pointer ">
                                <img className="h-[70%] w-[100%]  " src={e.img13} />
                                <h1 className="text-sm text-gray-500 hover:text-red-600  font-bold">{e.para13}</h1>
                            </div>
                            
                        </div>
                      </div>
                    </div>
                
                
                
                
                </>
               )
            })
        }

      </>
    );
  }
  
  export default Games;