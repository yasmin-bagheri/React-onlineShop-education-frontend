import { faClock, faCommentDots, faListCheck, faPenToSquare, faVideo, faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import manPic from "../../Assets/images/masood.jpg";

const UpperIntroduction = () => {
  return (
    <div className="flex lg:justify-evenly justify-center items-center min-h-[400px]">
      <div className="pic w-0 lg:w-[35%] overflow-hidden rounded-[30px]">
        <img src={manPic} className="rounded-[30px]" alt="masood" />
      </div>
      <div dir="rtl" className="lg:w-[50%] w-[95%]  flex flex-col items-start  gap-[30px]  ">
        <h3 className="text-[30px] font-[irankey] font-semibold">{"برنامه نویسی به زبان ساده"}</h3>
        <p className="lg:w-[75%] w-[98%]">
          در فرانت کست می‌توانید مهارت‌های برنامه نویسی خود را تقویت کنید و به
          یک توسعه‌دهنده حرفه‌ای تبدیل شوید.
        </p>
        <Link to={"/Courses"} className="bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold p-2">{"شروع یادگیری"}</Link>
        <div className="w-[95%] flex flex-wrap items-center justify-between font-[myfont2]">
            <div className="md:w-[30%] w-[47%]  flex flex-row-reverse gap-2  justify-end items-center my-3">
                <span>{"یادگیری با انجام تمرین"}</span>
                <FontAwesomeIcon className="text-[20px]" icon={faPenToSquare} />
            </div>
            <div className="md:w-[30%] w-[47%] flex flex-row-reverse gap-2  justify-end items-center my-3 ">
                <span>{"ویدیوهای کوتاه و با کیفیت"}</span>
                <FontAwesomeIcon className="text-[20px]" icon={faClock} />
            </div>
            <div className="md:w-[30%] w-[47%]  flex flex-row-reverse gap-2  justify-end items-center my-3 ">
                <span>{"ضمانت بازگشت وجه"}</span>
                <FontAwesomeIcon className="text-[20px]" icon={faWallet} />
            </div>
            <div className="md:w-[30%] w-[47%]  flex flex-row-reverse gap-2  justify-end items-center my-3 ">
                <span>{"به روز رسانی رایگان"}</span>
                <FontAwesomeIcon className="text-[20px]" icon={faVideo} />
            </div>
            <div className="md:w-[30%] w-[47%]  flex flex-row-reverse gap-2  justify-end items-center my-3 ">
                <span>{"سرفصل‌های جامع و دقیق"}</span>
                <FontAwesomeIcon className="text-[20px]" icon={faListCheck} />
            </div>
            <div className="md:w-[30%] w-[47%]  flex flex-row-reverse gap-2  justify-end items-center my-3 ">
                <span>{"پشتیبانی دوره‌ها"}</span>
                <FontAwesomeIcon className="text-[20px]" icon={faCommentDots} />
            </div>
            
            
        </div>
      </div>
    </div>
  );
};

export default UpperIntroduction;
