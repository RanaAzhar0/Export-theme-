import React from "react";
import { Link } from "react-router-dom";

export default function PreNav() {
  return (
    <>
        <div className="w-[100%] h-[10vh] bg-gray-700 flex justify-center ">
            <div className='h-[100%] w-[50%] flex items-center '>
                <ul className='flex w-[100%] text-white justify-between'>
                  <Link to="league">
                    <li className='hover:text-red-600 font-bold cursor-pointer'>league of legends</li>
                  </Link>
                  <Link to="cs">
                    <li className='hover:text-red-600 font-bold cursor-pointer'>CS:GO</li>
                  </Link>
                  <Link to="dota">
                    <li className='hover:text-red-600 font-bold cursor-pointer'>Dota 2</li>
                  </Link>
                  <Link to="duty">
                    <li className='hover:text-red-600 font-bold cursor-pointer'>Call OF Duty</li>
                  </Link>
                  {/*<Link to="duty"><Link/>*/}
                  <Link to="pokemon">
                    <li className='hover:text-red-600 font-bold cursor-pointer'>Pokemon</li>
                  </Link>
                </ul>
            </div>
        </div>
    </>

  );
}