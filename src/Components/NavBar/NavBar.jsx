import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../Assets/images/frontcast-logo-top.png";
import { faBars, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../../redux/slices/themeSlice';
import { logout} from '../../redux/slices/authSlice';
import { selectTotalQuantity } from '../../redux/slices/cartSlice';

const NavBar = () => {
  const totalQuantity = useSelector(selectTotalQuantity);
  const auth=useSelector((state)=>state.auth.token)
  const name=useSelector((state)=>state.auth.firstName)
  const [firstName,setFirstName]=useState("")
  const navigate=useNavigate()
  const darkMode = useSelector((state)=>state.theme.darkMode)
  const dispatch = useDispatch()
  const [menuToggle,setMenuToggle]=useState(false)
  const toggleHandler=()=>{
    dispatch(toggleDarkMode())
  }
  const logOutHandler=()=>{
    dispatch(logout())
    navigate("/Account")
    
  }
  useEffect(()=>{
       setFirstName(name)||setFirstName(localStorage.getItem("firstName"))
  },[name])
  return (
    <nav className='w-full  flex flex-row justify-between items-center flex-wrap'>
      <div className="logo lg:w-[20%] w-[50%]"><Link to={'/'}> <img className='w-full' src={logo} alt="logo" /> </Link></div>
      <ul className="w-[75%] hidden lg:flex items-center justify-start gap-[20px] flex-row-reverse font-[myfont2] font-semibold">
        <li className="rounded-[10px] bg-blue-600 text-white p-2 hover:bg-blue-700"><Link to="/Account" >{auth?`${firstName} سلام `:"حساب کاربری"}</Link></li>
        <li className="hover:text-blue-700"><Link to="/" >{"صفحه ی اصلی"}</Link></li>
        <li className="hover:text-blue-700"><Link to="/Courses" >{"دوره های آموزشی"}</Link></li>
        <li className="hover:text-blue-700 flex gap-1 border items-center justify-center p-2">{totalQuantity>0?<div className="p-1 border bg-red-400 rounded-2xl">{totalQuantity}</div>:""}<Link to="/Basket" >{"سبد خرید"}</Link></li>
        <button onClick={toggleHandler} >{darkMode? <FontAwesomeIcon className='text-yellow-400 border border-yellow-400 rounded p-2 text-[20px]' icon={faSun} />:<FontAwesomeIcon className='text-gray-800 border text-[20px] rounded p-2' icon={faMoon} />}</button>
        {auth?<button className="border p-2 rounded" onClick={logOutHandler}>{"خروج"}</button>:""}
      </ul>
      <div className="self-end border border-black text-[20px] rounded px-3 py-1 lg:hidden" onClick={()=>setMenuToggle(!menuToggle)}><FontAwesomeIcon icon={faBars} /></div>
      {menuToggle? <ul className={`w-[100%] lg:hidden flex items-end justify-center gap-[20px] flex-col font-[myfont2] font-semibold bg-[#EEEEEE] p-2 ${darkMode?"bg-black":""}`}>
        <li className="rounded-[10px] bg-blue-600 text-white p-2 hover:bg-blue-700"><Link to="/Account" >{"حساب کاربری"}</Link></li>
        <li className="hover:text-blue-700"><Link to="/" >{"صفحه ی اصلی"}</Link></li>
        <li className="hover:text-blue-700"><Link to="/Courses" >{"دوره های آموزشی"}</Link></li>
        <li className="hover:text-blue-700"><Link to="/Basket" >{"سبد خرید"}</Link></li>
        <button onClick={toggleHandler} >{darkMode? <FontAwesomeIcon className='text-yellow-400 border border-yellow-400 rounded p-2' icon={faSun} />:<FontAwesomeIcon className='text-gray-800 border rounded p-2' icon={faMoon} />}</button>
        {auth?<button className="border p-2 rounded" onClick={logOutHandler}>{"خروج"}</button>:""}
      </ul>:""}
     

     
    </nav>
  )
}

export default NavBar