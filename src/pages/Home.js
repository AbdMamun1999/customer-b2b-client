import React from "react";
import CustomerLists from "../components/CustomerLists";
import ManageOrders from "../components/ManageOrders";
import ManageOrder from "../components/ManageOrders";
import OnlinePayment from "../components/OnlinePayment";

const Home = () => {
  return (
    <div className="flex justify-around bg-sky-800 p-5">
      <CustomerLists />
      <ManageOrders />
      <OnlinePayment />
    </div>
  );
};

export default Home;
