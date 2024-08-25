import React from 'react';
import { FaDollarSign, FaHistory } from 'react-icons/fa';
import { IoMdTrendingUp } from 'react-icons/io';
import { AiOutlineAppstore } from 'react-icons/ai';

export default function TradingAccountLayout() {
  return (
    <div className="w-full lg:w-[20rem] h-auto bg-white p-4 rounded-sm border border-gray-200 flex flex-col">
      <div className="flex flex-col gap-4">
        
        {/* Trading Account */}
        <div className="flex flex-col p-3 bg-white rounded-md hover:bg-blue-100 transition duration-300 border border-gray-200">
          <div className="flex items-center mb-2">
            <FaDollarSign className="text-xl text-gray-600 mr-2" />
            <strong className="text-gray-700 font-medium text-lg">Trading Account</strong>
          </div>
          <div className="flex flex-col text-sm text-gray-600">
            
            
           
          </div>
        </div>

        {/* Master Accounts */}
        <div className="flex flex-col p-3 bg-white rounded-md hover:bg-blue-100 transition duration-300 border border-gray-200">
          <div className="flex items-center mb-2">
            <AiOutlineAppstore className="text-xl text-gray-600 mr-2" />
            <strong className="text-gray-700 font-medium text-lg">Master Accounts</strong>
          </div>
          <div className="flex flex-col text-sm text-gray-600">
            <div className="flex justify-between py-1 border-b border-gray-300">
              <span className="text-gray-600">C-Traders:</span>
              <span className="text-gray-800 text-xl">$0.00</span>
            </div>
            <div className="flex justify-between py-1 border-b border-gray-300">
              <span className="text-gray-600">Master Account:</span>
              <span className="text-gray-800 text-xl">$0.00</span>
            </div>
          </div>
        </div>

        {/* Open Trades */}
        <div className="flex flex-col p-3 bg-white rounded-md hover:bg-blue-100 transition duration-300 border border-gray-200">
          <div className="flex items-center mb-2">
            <IoMdTrendingUp className="text-xl text-gray-600 mr-2" />
            <strong className="text-gray-700 font-medium text-lg">Open Trades</strong>
          </div>
          <div className="flex flex-col text-sm text-gray-600">
            <div className="flex justify-between py-1 border-b border-gray-300">
              <span className="text-gray-600">GBPUSD Long:</span>
              <span className="text-green-600 text-xl">+56.00 USD</span>
            </div>
            <div className="flex justify-between py-1 border-b border-gray-300">
              <span className="text-gray-600">USDJPY Long:</span>
              <span className="text-red-600 text-xl">-0.09 USD</span>
            </div>
            <div className="flex justify-between py-1 border-b border-gray-300">
              <span className="text-gray-600">EURUSD Short:</span>
              <span className="text-red-600 text-xl">-1.09 USD</span>
            </div>
          </div>
        </div>

    
       

      </div>
    </div>
  );
}
