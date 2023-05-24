import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { slider } from "../data";


export default function Slide() {
  return (

    <>
        <hr className="w-[85%] ml-[100px] mt-5 mb-10" />
        <h1 className="text-4xl font-bold cursor-pointer mt-5 mb-5 ml-[100px]">Special Deals</h1>
      <Swiper
        slidesPerView={4}
        spaceBetween={40}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >{
        slider.map((e)=>{
            return(

             <>
                <SwiperSlide>
                        <img className="h-[50%] w-[100%]  " src={e.img14} />
                        <h1 className="text-md font-bold mt-2">{e.para14}</h1>
                        <h1 className="text-sm font-semi-bold mt-2 ">{e.para15}</h1>
                        
                </SwiperSlide>
                <SwiperSlide>
                        <img className="h-[50%] w-[100%]  " src={e.img15} />
                        <h1 className="text-md font-bold ">{e.para14}</h1> 
                        <h1 className="text-sm font-semi-bold mt-2 ">{e.para15}</h1>

                </SwiperSlide>
                <SwiperSlide>
                        <img className="h-[50%] w-[100%]  " src={e.img16} />
                        <h1 className="text-md font-bold mt-2">{e.para17}</h1> 
                        <h1 className="text-sm font-semi-bold mt-2 ">{e.para16}</h1>
                </SwiperSlide>
                <SwiperSlide>
                        <img className="h-[50%] w-[100%]  " src={e.img17} />
                        <h1 className="text-md font-bold mt-2">{e.para18}</h1> 
                        <h1 className="text-sm font-semi-bold mt-2 ">{e.para19  }</h1>
                </SwiperSlide>
                <SwiperSlide>
                        <img className="h-[50%] w-[100%]  " src={e.img18} />
                        <h1 className="text-md font-bold mt-2">{e.para20}</h1> 
                        <h1 className="text-sm font-semi-bold mt-2 ">{e.para21}</h1>
                </SwiperSlide>
                <SwiperSlide>
                        <img className="h-[50%] w-[100%]  " src={e.img18} />
                        <h1 className="text-md font-bold mt-2">{e.para22}</h1> 
                        <h1 className="text-sm font-semi-bold mt-2 ">{e.para23}</h1>
                </SwiperSlide>
                
             </>
             
               )
            })
      
      }
        
      </Swiper>
    </>
  );
}
