import React from "react";
import { FaBluetoothB, FaSignal } from "react-icons/fa";
import { MdVibration, MdSignalWifi4Bar, MdBatteryFull } from "react-icons/md";

const ViewTop = () => {
  return (
    <div className="flex justify-between gap-x-3 bg-[#0065a7] rounded-t-md px-3 text-white">
      <div>
        <p className="text-[20px]">3:19</p>
      </div>
      <div className="flex gap-x-1">
        <span>
          <FaBluetoothB size={20}/>
        </span>
        <span>
          <MdVibration size={20}/>
        </span>
        <span>
          <MdSignalWifi4Bar size={20}/>
        </span>
        <span>
          <FaSignal size={20}/>
        </span>
        <span>
          <MdBatteryFull size={20}/>
        </span>
      </div>
    </div>
  );
};

export default ViewTop;
