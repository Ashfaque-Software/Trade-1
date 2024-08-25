import React from 'react';
import { PiArrowLineDownLeft } from 'react-icons/pi';
import { MdOutlineArrowOutward, MdHistory } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';
import { FaUserCheck, FaRegStar } from 'react-icons/fa';
import { IoTrendingUpSharp } from 'react-icons/io5';
import { BiTransfer } from 'react-icons/bi';
import { RiExchange2Line } from 'react-icons/ri';
import { TbBrandGoogleAnalytics } from 'react-icons/tb';

function DashboardStatsGrid() {
  return (
    <div className="flex flex-col gap-4">
      {/* First line with 5 items */}
      <div className="grid grid-cols-5 gap-4">
        <BoxWrapper>
          <div className="flex flex-col items-center hover:text-blue-500 hover:scale-110 transition-transform duration-300 ease-in-out">
            <PiArrowLineDownLeft className="text-2xl text-black transition-transform duration-300 ease-in-out" />
            <span className="text-xs text-gray-500 font-light mt-1 hover:text-blue-500 transition-colors duration-300 ease-in-out">Deposit</span>
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div className="flex flex-col items-center hover:text-blue-500 hover:scale-110 transition-transform duration-300 ease-in-out">
            <MdOutlineArrowOutward className="text-2xl text-black transition-transform duration-300 ease-in-out" />
            <span className="text-xs text-gray-500 font-light mt-1 hover:text-blue-500 transition-colors duration-300 ease-in-out">Withdraw</span>
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div className="flex flex-col items-center hover:text-blue-500 hover:scale-110 transition-transform duration-300 ease-in-out">
            <FiSettings className="text-2xl text-black transition-transform duration-300 ease-in-out" />
            <span className="text-xs text-gray-500 font-light mt-1 hover:text-blue-500 transition-colors duration-300 ease-in-out">Settings</span>
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div className="flex flex-col items-center hover:text-blue-500 hover:scale-110 transition-transform duration-300 ease-in-out">
            <FaUserCheck className="text-2xl text-black transition-transform duration-300 ease-in-out" />
            <span className="text-xs text-gray-500 font-light mt-1 hover:text-blue-500 transition-colors duration-300 ease-in-out">Verification</span>
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div className="flex flex-col items-center hover:text-blue-500 hover:scale-110 transition-transform duration-300 ease-in-out">
            <FaRegStar className="text-2xl text-black transition-transform duration-300 ease-in-out" />
            <span className="text-xs text-gray-500 font-light mt-1 hover:text-blue-500 transition-colors duration-300 ease-in-out">Bonuses</span>
          </div>
        </BoxWrapper>
      </div>

      {/* Second line with 4 items */}
      <div className="grid grid-cols-4 gap-4">
        <BoxWrapper>
          <div className="flex flex-col items-center hover:text-blue-500 hover:scale-110 transition-transform duration-300 ease-in-out">
            <IoTrendingUpSharp className="text-2xl text-black transition-transform duration-300 ease-in-out" />
            <span className="text-xs text-gray-500 font-light mt-1 hover:text-blue-500 transition-colors duration-300 ease-in-out">MT5</span>
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div className="flex flex-col items-center hover:text-blue-500 hover:scale-110 transition-transform duration-300 ease-in-out">
            <BiTransfer className="text-2xl text-black transition-transform duration-300 ease-in-out" />
            <span className="text-xs text-gray-500 font-light mt-1 hover:text-blue-500 transition-colors duration-300 ease-in-out">Transfer</span>
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div className="flex flex-col items-center hover:text-blue-500 hover:scale-110 transition-transform duration-300 ease-in-out">
            <MdHistory className="text-2xl text-black transition-transform duration-300 ease-in-out" />
            <span className="text-xs text-gray-500 font-light mt-1 hover:text-blue-500 transition-colors duration-300 ease-in-out">History</span>
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div className="flex flex-col items-center hover:text-blue-500 hover:scale-110 transition-transform duration-300 ease-in-out">
            <RiExchange2Line className="text-2xl text-black transition-transform duration-300 ease-in-out" />
            <span className="text-xs text-gray-500 font-light mt-1 hover:text-blue-500 transition-colors duration-300 ease-in-out">Exchange</span>
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div className="flex flex-col items-center hover:text-blue-500 hover:scale-110 transition-transform duration-300 ease-in-out">
            <TbBrandGoogleAnalytics className="text-2xl text-black transition-transform duration-300 ease-in-out" />
            <span className="text-xs text-gray-500 font-light mt-1 hover:text-blue-500 transition-colors duration-300 ease-in-out">Analytics</span>
          </div>
        </BoxWrapper>
      </div>
    </div>
  );
}

function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-sm p-3 border border-gray-200 flex flex-col items-center text-center transition-transform duration-300 ease-in-out hover:bg-gray-100 hover:shadow-md">
      {children}
    </div>
  );
}

export default DashboardStatsGrid;
