import { faInstagram, faLinkedin, faTelegram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-full p-6 border-t flex flex-col gap-7 md:items-end items-center ' >
      <ul className="w-full flex items-center justify-start gap-[20px] md:flex-row-reverse flex-col font-[myfont2] font-semibold ">
      <li className="text-gray-500 hover:text-blue-700"><Link to="/AboutUs" >{"درباره ی ما"}</Link></li>
      <li className="text-gray-500 hover:text-blue-700"><Link to="/ContactUs" >{"تماس با ما"}</Link></li>
      <li className="text-gray-500 hover:text-blue-700"><Link to="/Terms" >{"شرایط استفاده"}</Link></li>
      <li className="text-gray-500 hover:text-blue-700"><Link to="/Blog" >{"وبلاگ"}</Link></li>
      <li className="text-gray-500 hover:text-blue-700"><Link to="#" >{"کانال تلگرام"}</Link></li>
      </ul>
      <div className="font-[myfont2] font-semibold text-gray-500 flex flex-row-reverse gap-5">
        <span className="">{":شبکه های اجتماعی"}</span>
        <div className="flex flex-row-reverse gap-4 flex-wrap">
          <a href="" className=""><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="" className=""><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="" className=""><FontAwesomeIcon icon={faTelegram} /></a>
          <a href="" className=""><FontAwesomeIcon icon={faYoutube} /></a>
          <a href="" className=""><FontAwesomeIcon icon={faLinkedin} /></a>

        </div>
      </div>
      <div className="font-[irankey]  text-gray-500 text-wrap text-center">{"تمامی حقوق برای فرانت‌کست محفوظ است"}</div>
    </div>
  )
}

export default Footer