import React from 'react'
import { Link } from 'react-router-dom'
import AdminHeader from '../comp/AdminHeader'

function Dashboard() {
  return (
    <div>
          <AdminHeader/>
           <div className="bg-white mb-3 h-screen">
   
      <div className="text-center text-[2rem] p-5 font-extrabold text-black border-b-2  mb-10">
        Control Panel
      </div>

      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-2 gap-7">
        

          <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-2 flex justify-center items-center  flex-col bg-gray-300 rounded-lg">
            <h1 className="text-center font-extrabold text-[1.4rem]  p-2 text-[#58401d] ">PRODUCT</h1>
            <p className="text-sm text-center">
              The Product section facilitates the recording, monitoring, and
              analysis of financial or product records, providing a
              transparent and organized view of activities such as new product, or other relevant interactions within the system.
            </p>
             <Link to="/upload/product" className="bg-[#febc5a] hover:bg-[#58401d] text-white font-bold py-2 px-4 rounded m-3 w-full text-center">Open</Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Dashboard