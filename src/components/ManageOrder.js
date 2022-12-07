import React from "react";
import { FaChevronRight, FaCircle } from "react-icons/fa";

const ManageOrder = ({ data }) => {
  return (
    <div className="bg-[#ffff] rounded-md p-3 pt-0 ">
      <div className="flex flex-row justify-between my-2">
        <h6>Order 4G82T0 </h6>
        <p>Today 11:11 PM</p>
      </div>
      <div className="flex flex-row justify-between items-center ">
        <div className="flex flex-row items-center gap-x-3">
          <div className="w-[60px] h-[60px]  flex justify-center items-center">
            <img src={data.img} alt="" />
          </div>
          <div>
            <h5 className="font-bold text-xl">{data.name}</h5>
            <p className="text-[16px]"> ${data.price}</p>
          </div>
        </div>
        <div>
          <div
            className={`border-2 px-2 py-0 rounded-md ${
              data.status === "Paid"
                ? "bg-[#ffdbde] border-[#ffdbde]"
                : "bg-[#ffe9db] border-[#ffe9db]"
            }`}
          >
            <p
              className={`${
                data.status === "Paid" ? "text-[#ec292e]" : "text-[#f5924b]"
              } font-bold`}
            >
              {data.status}
            </p>
          </div>
        </div>
      </div>
      <hr className="my-2 h-[5px] bg-[#f8f8f8]" />
      <div className="flex flex-row justify-between">
        <div>
          <p className="flex flex-row items-center gap-x-1">
            <span>
              <FaCircle size={7} color={data.color} />
            </span>
            <span>Pending</span>
          </p>
        </div>
        <div>
          <button
            type="button"
            className="flex flex-row items-center border-2 rounded-md px-2"
          >
            <span>Details</span>
            <span>
              <FaChevronRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageOrder;
