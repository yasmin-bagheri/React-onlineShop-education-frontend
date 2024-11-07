import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import Card from '../../Components/Card/Card'
import { getProducts } from '../../Services/products'
const Courses = () => {
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
    <Layout>
      <div className="lg:w-[90%] w-[98%] mx-auto my-5 font-[myfont2] ">
        <p className="text-right text-[30px] ">{":دوره های آموزشی"}</p>
        <div className="w-full flex lg:flex-row lg:justify-start flex-col justify-center items-center flex-wrap my-10 lg:gap-4 gap-10">
          {products?.map((item)=>(<Card src={`http://localhost:5000${item.thumbnail}`} price={item.price} status={item.status} title={item.title} linkSrc={`/Courses/SingleCourse/${item.id}`} />))}
        </div>
      </div>
    </Layout>
  )
}

export default Courses