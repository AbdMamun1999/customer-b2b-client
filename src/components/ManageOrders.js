import React, { useState } from "react";
import ViewTop from "./ViewTop";
import { FaSlidersH, FaUser } from "react-icons/fa";
import { BiHome } from "react-icons/bi";
import { FcContacts } from "react-icons/fc";
import { RxDashboard } from "react-icons/rx";
import { GrStackOverflow } from "react-icons/gr";
import imgOne from "../images/Screenshot_61.png";
import ManageOrder from "./ManageOrder";

const ManageOrders = () => {
  const [allTime, setAllTime] = useState(true);
  const [today, setToday] = useState(false);
  const [yesterday, setYesterday] = useState(false);

  const datas = [
    {
      name: "Sitem",
      img: imgOne,
      status: "Paid",
      price: 10012,
      color: "#ffb100",
    },
    {
      name: "Sitem",
      img: imgOne,
      status: "DDD",
      price: 10012,
      color: "#ff6a00",
    },
    {
      name: "Sitem",
      img: imgOne,
      status: "DDD",
      price: 10012,
      color: "#00b600",
    },
  ];

  return (
    <div className="w-[30%] px-8 pt-8 pb-0 bg-white rounded-t-[50px]">
      <div>
        <ViewTop />
        <div className="bg-[#0170ba] px-3 py-3">
          <div className="relative py-1">
            <p className="text-center text-white font-semibold text-xl">
              My Customers
            </p>
            <span className="flex justify-center items-center absolute right-0 top-0  bottom-0 ">
              <FaSlidersH size={26} color={"white"} />
            </span>
          </div>
          <div className="flex justify-center">
            <input
              className="px-4 outline-none border-none rounded w-[80%] py-2"
              type="text"
              placeholder="Search By Customer name"
              name="searchCustomer"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-around py-3 bg-[#eeeeee]">
        <div>
          <button
            onClick={() => setAllTime(!allTime)}
            className={`rounded-[60px] border-2 px-4 py-2 ${
              allTime ? "bg-[#0170ba]" : null
            }`}
          >
            All Time(22)
          </button>
        </div>
        <div>
          <button
            onClick={() => setToday(!today)}
            className={`rounded-[60px] border-2 px-4 py-2 ${
              today ? "bg-[#0170ba]" : null
            }`}
          >
            Today(12)
          </button>
        </div>
        <div>
          <button
            onClick={() => setYesterday(!yesterday)}
            className={`rounded-[60px] border-2 px-4 py-2 ${
              yesterday ? "bg-[#0170ba]" : null
            }`}
          >
            Yesterday(10)
          </button>
        </div>
      </div>
      <div className=" bg-[#eeeeee]">
        <div className="flex flex-col gap-y-3 p-5  pt-0">
          {datas.map((data, index) => (
            <ManageOrder key={index + 1} data={data} />
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center py-2">
        <div className="flex items-center flex-col">
          <span>
            <BiHome size={36} />
          </span>
          <h6 className="font-bold">Home</h6>
        </div>
        <div className="flex items-center flex-col">
          <span>
            <FcContacts size={36} />
          </span>
          <h6 className="font-bold">Orders</h6>
        </div>
        <div className="flex items-center flex-col">
          <span>
            <RxDashboard size={36} />
          </span>
          <h6 className="font-bold">Products</h6>
        </div>
        <div className="flex items-center flex-col">
          <span>
            <GrStackOverflow size={36} />
          </span>
          <h6 className="font-bold">Message</h6>
        </div>
        <div className="flex items-center flex-col">
          <span>
            <FaUser size={36} />
          </span>
          <h6 className="font-bold">Account</h6>
        </div>
      </div>
    </div>
  );
};

export default ManageOrders;
