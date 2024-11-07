import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { getProducts } from '../../Services/products';
import { Link } from 'react-router-dom';

const Slider = () => {
  const [products,setProducts]=useState([])

// get----------------------------------------------------------------------------------------------------------------------
const getData = async()=>{
  try {
      const response= await getProducts()
      console.log("response: ",response);
      setProducts(response)
      console.log("products: ",products);
      
  } catch (error) {
      
 
  }
}
// get ends-----------------------------------------------------------------------------------------------------------------


// useEffect to get data 
useEffect(()=>{
  const controller = new AbortController()
  getData()
 return(()=>{controller.abort()
  console.log("aborted");
 })
// eslint-disable-next-line
},[])

  return (
    <div className='w-[90%] my-[50px] overflow-hidden mx-auto border border-blue-600 rounded font-[irankey] p-2'>
      <p className="text-center font-[myfont2] my-3">{"دوره ها"}</p>
      <Swiper
      className='h-full w-full  '
      spaceBetween={10}
      slidesPerView={2.5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {products?.map((item)=>( <SwiperSlide key={item.id} className='w-[25%] border'><img src={`http://localhost:5000${item.thumbnail}`} alt="" className='w-full h-[100%] object-contain' />
      <Link to={`/Courses/SingleCourse/${item.id}`} className="p-3 flex w-full justify-center ">{item.title}</Link>
      </SwiperSlide>))}
    </Swiper>
    </div>
  )
}

export default Slider