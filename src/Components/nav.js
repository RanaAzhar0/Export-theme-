import React from 'react'
import { Link } from 'react-router-dom';
import Img from '../images/nav.log.png'
//import Hero from '../Components/hero'

const Nav = () => {
  const myFunction= () => {
    var element = document.body;
    element.classList.toggle("dark-mode");

  }
  return (
    <>

      <nav class="h-20 w-[100%] flex items-center justify-around">
        <div>
            <img src={Img} className="h-[78px] ml-12"/>
        </div>
        <div className='h-16 w-[30%] flex ml-80 items-center '>
            <ul className='flex '>
              <Link to="/">
                <li className='ml-6 text-red-600 font-bold cursor-pointer'>Home</li>
              </Link>
              <Link to="/Page2">
                <li className='ml-6 hover:text-red-600 font-bold cursor-pointer'>News</li>
              </Link>
              <Link to="/Page3">
                <li className='ml-6 hover:text-red-600 font-bold cursor-pointer'>Videos</li>
              </Link>
              <Link to="/Page4">
                <li className='ml-6 hover:text-red-600 font-bold cursor-pointer'>Special Deals</li>
              </Link>
              <Link to="/Page5">
                <li className='ml-6 hover:text-red-600 font-bold cursor-pointer'> Shop</li>
              </Link>
            </ul>
        </div>
        <div className='h-9 w-[6%] boder'>
            <label className=" cursor-pointer ml-4" >
            <input type="radio" value="" className="peer-only:sr-only mt-3" onClick={myFunction} />
            </label>
        </div>
   
      </nav>
    </>
  )
}

export default Nav