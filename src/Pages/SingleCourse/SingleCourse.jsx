import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import { getSingleProduct } from '../../Services/products'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faChevronDown, faClock, faGraduationCap, faLock, faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from '../../redux/slices/cartSlice'
import ShoppingCart from '../../Components/ShoppingCart/ShoppingCart'

const SingleCourse = () => {
  const darkMode = useSelector((state)=>state.theme.darkMode)
  const items = useSelector(state => state.cart.items);
  const params=useParams()
  const dispatch=useDispatch()
  const [singleProduct,setSingleProduct]=useState({})
  const [show,setShow]=useState(false)
  const isLogin=useSelector((state)=>state.auth.token)
  const productQuantity = items.filter((item,index)=>(item.title===singleProduct.title)).length
  
  
  const getProductDetail=async()=>{
    try {
      const response= await getSingleProduct(params.id)
      console.log("response: ",response);
        setSingleProduct(response)
        
    } catch (error) {
        
    }
}
const toggleDescription=()=>{
  setShow(!show)
}
useEffect(()=>{
    const controller = new AbortController()
    getProductDetail()
    return(()=>{controller.abort()
      console.log("aborted");
     })
      // eslint-disable-next-line
},[])
const description=singleProduct?.sesions?.map((item)=>(item.description))

console.log('description:',description)
  return (
    <Layout>
      <div className={`w-[90%] mx-auto my-5  flex justify-evenly p-5 font-[myfont2] rounded-xl ${darkMode?"bg-slate-900":"bg-slate-100"}`}>
        <div className="lg:w-[40%] w-0 rounded-xl overflow-hidden relative">
          {isLogin?"":<div className='absolute w-full h-full bg-[#a4a3a3dd] flex flex-col items-center justify-center z-50 '><FontAwesomeIcon className='text-[30px]' icon={faLock} />{"برای مشاهده وارد سایت شوید"}</div>}
          <video className='' src={`http://localhost:5000${singleProduct?.url}`} controls ></video></div>
        <div className="flex flex-col lg:items-end items-center lg:justify-evenly justify-center lg:gap-0 gap-5 lg:w-[50%] w-[90%]">
          <div className="title md:text-[30px] text-[20px] text-center">{singleProduct?.title}</div>
          <div className="flex justify-between text-nowrap items-center w-[80%]  ">
          <div className="studensCount flex items-center justify-center gap-3">{singleProduct?.studentsCount}<FontAwesomeIcon className='text-[25px]' icon={faGraduationCap} /></div>
          <div className="status flex items-center justify-center gap-3">{singleProduct?.status}<FontAwesomeIcon className='text-[25px]' icon={faMoneyBill} /></div>
          </div>
          <div className="time flex items-center justify-center gap-3">{singleProduct?.timeCourse}<FontAwesomeIcon className='text-[25px]' icon={faClock} /></div>
          {productQuantity < 1 ?( <button onClick={() => dispatch(addItemToCart(singleProduct))} className='bg-blue-500 hover:bg-blue-700 text-white px-3 py-1 rounded-md'>{"ثبت نام در دوره"}</button>):(<ShoppingCart title={singleProduct.title}/>)}
         
          <Link className='text-blue-800 text-[16px] flex items-center justify-center gap-3'>{"مشاهده ی دوره در کانال یوتیوب"}<FontAwesomeIcon className='text-[25px]' icon={faYoutube} /></Link>
        </div>
      </div>
      <div dir='rtl' className={`w-[90%] mx-auto p-10 rounded-xl  font-[irankey] text-[16px] ${darkMode?"bg-slate-900":"bg-slate-100"}`}>
        <p className="">{singleProduct?.description}</p>
        <div className={`flex flex-col items-start justify-evenly lg:w-[50%]  my-5 gap-2 p-4 ${darkMode?"bg-slate-900 ":"bg-slate-100"} `}>
          <div className="text-[25px]">{"سرفصل ها"}</div>
          {singleProduct?.sesions?.map((item)=>(<div className={`w-full`}> 
            <div key={item.id} onClick={toggleDescription} className={`flex justify-between items-center p-3 bg-slate-200 w-[90%] ${darkMode?"bg-slate-700":"bg-slate-100"} `}>{item.title}  <FontAwesomeIcon icon={faChevronDown}/></div>
            {show?<div className="flex flex-col gap-3 p-3 ">{item.description?.map((i)=>(<div className='' >{i}</div>))}</div>:""}
          </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default SingleCourse