import React from "react";
import Layout from "../../Components/Layout/Layout";

const PaymentSuccesfull = () => {
  return (
    <Layout>
      <div className="h-[50vh] flex justify-center items-center">
        <p className="text-[30px] font-[myfont2]">
          {"پرداخت شما با موفقیت انجام شد"}
        </p>
      </div>
    </Layout>
  );
};

export default PaymentSuccesfull;
