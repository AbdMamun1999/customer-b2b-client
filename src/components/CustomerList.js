import React from "react";

const CustomerList = ({ data }) => {
  return (
    <div className="flex flex-row gap-x-3 bg-[#ffff] px-3 py-2 rounded-md">
      <div className="w-[60px] h-[60px] bg-[#eeeeee] flex justify-center items-center">
        <p className="font-bold text-2xl">CS</p>
      </div>
      <div>
        <h5 className="font-bold text-xl">{data.name}</h5>
        <p className="text-[16px]">{data.order}</p>
      </div>
    </div>
  );
};

export default CustomerList;
