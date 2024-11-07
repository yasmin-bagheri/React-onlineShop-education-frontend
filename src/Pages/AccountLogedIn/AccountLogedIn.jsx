import React from 'react'
import Layout from '../../Components/Layout/Layout'
import { faRightFromBracket, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/slices/authSlice'
import AuthProvider from '../../Components/AuthProvider/AuthProvider'

const AccountLogedIn = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const logOutHandler=()=>{
        dispatch(logout())
        navigate("/Account")
      }
    const firstName=localStorage.getItem("firstName")
  return (
    <AuthProvider>
    <Layout>
        <div className="w-[90%] mx-auto bg-slate-200 flex flex-col lg:flex-row justify-center lg:items-start items-center gap-1 font-[myfont2] p-4 rounded-xl">
            <div className="lg:w-[70%] w-full  bg-white p-5 rounded-xl">
                <div className="flex flex-col justify-start items-end gap-3 text-blue-900">
                   <div className="flex gap-3">
                   <span>{firstName}</span>
                   <span>{"سلام"}</span>
                   </div>
                   <div className="text-right">{"فایل‌های دوره‌هایی که ثبت نام کرده‌اید در قسمت دانلودها قرار دارد"}</div>
                </div>
            </div>
            <div className="lg:w-[20%] w-full flex lg:flex-col items-end justify-center gap-2">
                <button className="border bg-white py-5 px-2 w-[90%] rounded-xl flex justify-center items-center gap-3 lg:text-[20px] text-blue-700"><span>{"دانلودها"}</span><FontAwesomeIcon icon={faVideo} /></button>
                <button className="border bg-white py-5 px-2 w-[90%] rounded-xl flex justify-center items-center gap-3 lg:text-[20px] text-blue-700"><span>{"جزيیات حساب"}</span><FontAwesomeIcon icon={faCircleUser} /></button>
                <button onClick={logOutHandler} className="border bg-white py-5 px-2 w-[90%] rounded-xl flex justify-center items-center gap-3 lg:text-[20px] text-blue-700"><span>{"بیرون رفتن"}</span><FontAwesomeIcon icon={faRightFromBracket} /></button>
            </div>
        </div>
    </Layout>
    </AuthProvider>
  )
}

export default AccountLogedIn