import React, { useState } from "react";
import ViewTop from "./ViewTop";
import { FaSlidersH } from "react-icons/fa";

const ManageOrders = () => {
  const [allTime, setAllTime] = useState(true);
  const [today, setToday] = useState(false);
  const [yesterday, setYesterday] = useState(false);



  return (
    <div className="w-[30%] px-8 pt-8 pb-4 bg-white rounded-t-[50px]">
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
          <div className="flex justify-between">
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
        <div className="flex flex-row justify-between">
          <h6>Order 4G82T0 </h6>
          <p>Today 11:11 PM</p>
        </div>
        <div className="flex flex-col gap-y-3 p-5">
          {/* {datas.map((data, index) => (
          <CustomerList key={index + 1} data={data} />
        ))} */}
        </div>
      </div>
    </div>
  );
};

export default ManageOrders;
