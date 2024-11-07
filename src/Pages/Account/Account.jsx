
import Layout from '../../Components/Layout/Layout'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { userLogin, userSignUP } from '../../redux/slices/authSlice'



const Account = () => {
  const darkMode = useSelector((state)=>state.theme.darkMode)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const isLogin=useSelector((state)=>state.auth.token)
  const {register,formState:{errors,isSubmitting},handleSubmit} =useForm()
  const {
    register: registerForm2,
    handleSubmit: handleSubmitForm2,
    formState: { errors: errorsForm2,isSubmitting:isSubmittingForm2 }
  } = useForm({ mode: 'onChange' });
  const postData=async(data)=>{
    try {
      await dispatch(userLogin({
        username:data.username,
        password:data.password
      })).unwrap()
      navigate("/AccountLogedIn") 
    } catch (error) {
      alert("نام کاربری یا رمز عبور اشتباه است") 
    }
  }
  const postData2=async(data)=>{
    try {
      await dispatch(userSignUP({
        username:data.user,
        password:data.pass
      })).unwrap()
      alert(`با موفقیت عضو شدید`) 
    } catch (error) {
      alert("عضویت انجام نشد") 
    }
  }
  
  if (isLogin) {
    return <Navigate to={"/AccountLogedIn"} replace />
  }
    
  return (
    <Layout>
      <div className="md:w-[80%] w-[95%] mx-auto flex md:flex-row md:justify-between flex-col justify-center items-center my-[60px] font-[irankey]">
      <form onSubmit={handleSubmitForm2(postData2)}   className={`signup md:w-[48%] w-[90%] flex flex-col justify-center items-end p-5 gap-5`}>
      <div className="title text-[30px]">{"عضویت"}</div>
          <div className={`flex flex-col justify-center items-start p-5 gap-5 rounded-lg bg-slate-100 w-full ${darkMode?"bg-black":""}`} dir='rtl'>
          <label htmlFor="username">{"آدرس ایمیل"}<FontAwesomeIcon className='text-red-500 text-[10px] mx-1' icon={faStarOfLife} /></label>
          <input {...registerForm2('user',{required: "پر کردن این فیلد الزامی است"})}  className='w-full rounded p-2 outline-none' type="text" id="username" />
          {errorsForm2.user && <p className='text-red-400'>{errorsForm2.user.message}</p>}
          <label htmlFor="pass">{"گذرواژه"}<FontAwesomeIcon className='text-red-500 text-[10px] mx-1' icon={faStarOfLife} /></label>
          <input {...registerForm2('pass',{required:"پر کردن این فیلد الزامی است",minLength:{value:8,message:"حداقل ۸ کرکتر"}})}  className='w-full rounded p-2 outline-none' type="password" name="pass" id="pass" />
          {errorsForm2.pass && <p className='text-red-500'>{errorsForm2.pass.message}</p>}
          <button  className='w-full rounded p-2 bg-blue-500 hover:bg-blue-400'>{isSubmittingForm2 ? 'در حال بارگذاری...':"عضویت"}</button>
          </div>

      </form>
        <form onSubmit={handleSubmit(postData)} className={`login md:w-[48%] w-[90%]  rounded-md flex flex-col justify-center items-end p-5 gap-5`}> 
          <div className="title text-[30px]">{"ورود"}</div>
         <div className={`flex flex-col justify-center items-start p-5 gap-5 rounded-lg bg-slate-100 w-full ${darkMode?"bg-black":""}`} dir='rtl'>
         <label htmlFor="user">{"نام کاربری یا آدرس ایمیل"}<FontAwesomeIcon className='text-red-500 text-[10px] mx-1' icon={faStarOfLife} /></label>
          <input {...register('username',{required: "پر کردن این فیلد الزامی است"})} className='w-full rounded p-2 outline-none' type='text'  id="user" />
          {errors.username && <p className='text-red-400'>{errors.username.message}</p>}
          <label htmlFor="password">{"گذرواژه"}<FontAwesomeIcon className='text-red-500 text-[10px] mx-1' icon={faStarOfLife} /></label>
          <input {...register('password',{required:"پر کردن این فیلد الزامی است",minLength:{value:8,message:"حداقل ۸ کرکتر"}})}  className='w-full rounded p-2 outline-none' type="password" name="password" id="password" />
          {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
          <button type='submit' className='w-full rounded p-2 bg-blue-500 hover:bg-blue-400'  >{isSubmitting ? 'در حال بارگذاری...':"ورود"}</button>
          <Link className='text-blue-600' to="/ForgotPass">{"گذرواژه خود را فراموش کرده اید؟"}</Link>
         </div>
        </form>
        
      </div>


    </Layout>
  )
}

export default Account