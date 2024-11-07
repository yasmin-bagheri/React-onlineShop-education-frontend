import { Route, Routes } from "react-router";
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Courses from "./Pages/Courses/Courses";
import Account from "./Pages/Account/Account";
import Basket from "./Pages/Basket/Basket";
import Blog from "./Pages/Blog/Blog";
import ContactUs from "./Pages/ContactUs/ContactUs";
import SingleCourse from "./Pages/SingleCourse/SingleCourse";
import Terms from "./Pages/Terms/Terms";
import ForgotPass from "./Pages/ForgotPass/ForgotPass";
import { useSelector } from "react-redux";
import AccountLogedIn from "./Pages/AccountLogedIn/AccountLogedIn";
import PaymentSuccesfull from "./Pages/PaymentSuccesfull/PaymentSuccesfull";



function App() {
  const darkMode = useSelector((state)=>state.theme.darkMode)
  return (
    <div className={`App ${darkMode?"bg-slate-800 text-white":""}`}>
      <Routes>
        <Route>
          <Route>
          <Route path='/' element={<Home/>} />
          <Route path='/AboutUs' element={<AboutUs/>} />
          <Route path='/Courses' element={<Courses/>} />
          <Route path='/Account' element={<Account/>} />
          <Route path='/AccountLogedIn' element={<AccountLogedIn/>} />
          <Route path='/Basket' element={<Basket/>} />
          <Route path='/Blog' element={<Blog/>} />
          <Route path='/ContactUs' element={<ContactUs/>} />
          <Route path='/SingleCourse' element={<SingleCourse/>} />
          <Route path='/Terms' element={<Terms/>} />
          <Route path='/ForgotPass' element={<ForgotPass/>} />
          <Route path='/PaymentSuccesfull' element={<PaymentSuccesfull/>} />
          <Route path='/Courses/SingleCourse/:id' element={<SingleCourse/>} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
