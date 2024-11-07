import React from "react";
import Layout from "../../Components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  clearCart,
  removeItemFromCart,
  selectTotalPrice,
} from "../../redux/slices/cartSlice";
import { useNavigate } from "react-router";
import AddRemoveButton from "../../Components/AddRemoveButton/AddRemoveButton";
import axios from "axios";

const Basket = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const auth = useSelector((state) => state.auth.token);
  const items = useSelector((state) => state.cart.items);
  const totalPrice = useSelector(selectTotalPrice);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginPage = () => {
    navigate("/Account");
  };
  const PaymentSuccesfull = async () => {
    const products = items.map((item) => ({
      productId: item.id,
      quantity: item.quantity,
    }));
    try {
      const response = await axios.post(
        "http://localhost:5000/api/orders",

        { products: products },

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth}`, // Authorization token included in the headers
          },
        }
      );
      dispatch(clearCart());
      console.log(response.data);

      navigate("/PaymentSuccesfull");
    } catch (error) {
      alert("پرداخت ناموفق");
    }
  };

  return (
    <Layout>
      <div
        className={`p-4 w-[90%] mx-auto font-[myfont2]  rounded-lg mb-5 ${
          darkMode ? "bg-black" : "bg-slate-100"
        }`}
        dir="rtl"
      >
        <h1 className="md:text-[30px] ps-4 text-right mb-4">{"سبد خرید"}</h1>
        {items.length === 0 ? (
          ""
        ) : (
          <ul className="space-y-4">
            {items.map((item) => (
              <li
                key={item.id}
                className={`flex sm:flex-row flex-col sm:justify-between justify-center items-center border p-4  md:text-[25px] ${
                  darkMode ? "bg-slate-700" : "bg-slate-50"
                } `}
              >
                <h2 className=" font-semibold">{item.title}</h2>
                <div>
                  <p>${item.price}</p>
                </div>
                <AddRemoveButton
                  classes={"sm:w-[20%] md:w-[17%] w-[50%] flex-row-reverse "}
                  remove={() => dispatch(removeItemFromCart(item.id))}
                  add={() => dispatch(addItemToCart(item))}
                  quantity={item.quantity}
                />
              </li>
            ))}
          </ul>
        )}
        <div className="w-full p-3 flex flex-col justify-center items-start gap-3 mt-5">
          <div className="text-right text-[30px]">{"مجموع کل سبد خرید"}</div>
          <div className="w-full p-5 bg-blue-100 rounded-lg text-right">
            <div className="md:w-[55%] flex justify-between items-center text-blue-800 text-[18px]">
              <span>{"جمع کل"}</span>
              <span>{`${totalPrice}  تومان `}</span>
            </div>
          </div>
          <button
            onClick={auth ? PaymentSuccesfull : loginPage}
            className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-500 self-center "
          >
            {auth ? "اقدام به پرداخت" : "ورود به سایت"}
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Basket;
