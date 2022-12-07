import React from "react";
import ViewTop from "./ViewTop";
import { MdWest } from "react-icons/md";
import CustomerList from "./CustomerList";

const CustomerLists = () => {
  const datas = [
    { name: "CNtra Support", order: "22 orders" },
    { name: "Alstwarya Mana", order: "7 orders" },
    { name: "Sail Tiwari", order: "7 orders" },
    { name: "Jayas Dari", order: "3 orders" },
    { name: "Kanti Ahuwadio", order: "7 orders" },
    { name: "Dorka Nagar", order: "2 orders" },
    { name: "Ram Ashak", order: "1 orders" },
  ];
  return (
    <div className="w-[30%] px-8 pt-8 pb-4 bg-white rounded-t-[50px]">
      <div>
        <ViewTop />
        <div className="bg-[#0170ba] px-3 py-3">
          <div className="relative py-1">
            <span className="flex justify-center items-center absolute left-0 top-0  bottom-0 ">
              <MdWest size={26} color={"white"} />
            </span>
            <p className="text-center text-white font-semibold text-xl">
              My Customers
            </p>
          </div>
          <div className="flex justify-around">
            <input
              className="px-4 outline-none border-none rounded w-[80%] py-2"
              type="text"
              placeholder="Search By Customer name"
              name="searchCustomer"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-3 p-5 bg-[#eeeeee]">
        {datas.map((data, index) => (
          <CustomerList key={index + 1} data={data} />
        ))}
      </div>
    </div>
  );
};

export default CustomerLists;
