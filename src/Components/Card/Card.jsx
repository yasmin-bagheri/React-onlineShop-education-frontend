import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'


const Card = ({src,status,title,price,linkSrc}) => {
  const darkMode = useSelector((state)=>state.theme.darkMode)
  return (
    <div className={`flex flex-col overflow-hidden border rounded-lg lg:w-[30%] w-[80%] min-h-[400px] font-[myfont2] ${darkMode?"bg-black":""} `} dir='rtl'>
      <img src={src} alt="" className="h-[50%] object-cover" />
      <div  className="status text-right p-3 text-blue-600 text-[14px]">{status}</div>
      <div className="title h-[25%] text-[20px] p-3 hover:text-blue-800"><Link to={linkSrc}>{title}</Link></div>
      <div className="flex flex-row-reverse justify-between items-center px-3">
        <Link to={linkSrc} className='text-blue-600'>{`مشاهده دوره `}<FontAwesomeIcon icon={faArrowLeftLong} /></Link>
        <span className="bg-[#EBF7FC] text-blue-600 rounded px-2 p-1">{`${price} تومان`}</span>
      </div>
    </div>
  )
}

export default Card