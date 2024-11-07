import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import Slider from '../../Components/Slider/Slider'
import UpperIntroduction from '../../Components/UpperIntroduction/UpperIntroduction'
import { getProducts } from '../../Services/products'
import Card from '../../Components/Card/Card'
import { Link } from 'react-router-dom'
const Home = () => {
  const [products,setProducts]=useState([])
  // const darkMode = useSelector((state)=>state.theme.darkMode)
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
  return (<Layout>
    <div className="font-[irankey]">
      <UpperIntroduction/>
    </div>
    <Slider/>
    <div className="w-[90%] mx-auto my-5 font-[myfont2] flex flex-col justify-center items-center">
        <p className="w-full text-right text-[30px] ">{":دوره های آموزشی"}</p>
        <div className="w-full flex lg:flex-row flex-col justify-center items-center flex-wrap my-10 lg:gap-4 gap-10">
          {products?.filter((item, index) => index < 6).map((item)=>(<Card src={`http://localhost:5000${item.thumbnail}`} key={item.id} price={item.price} status={item.status} title={item.title} linkSrc={`/Courses/SingleCourse/${item.id}`} />))}
        </div>
        <Link to="/Courses" className="bg-blue-600 hover:bg-blue-900 text-white font-[myfont2] p-3 rounded-md">مشاهده ی همه ی دوره های آموزشی</Link>
      </div>
    </Layout>)
}

export default Home