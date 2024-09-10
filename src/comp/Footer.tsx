import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0d1f] text-white py-10 px-9">
      <div className="container mx-auto px-4 flex justify-between flex-col md:flex-row items-start">
        {/* Left Section */}
        <div className='w-full flex flex-col md:flex-row pb-5 md:pb-0'>
          <div className="flex items-center mb-4">
            <div className="mr-2">
              <div className="w-4 h-4 inline-block bg-red-600"></div>
              <div className="w-4 h-4 inline-block bg-blue-600"></div>
              <div className="w-4 h-4 inline-block bg-green-600"></div>
            </div>
            <h2 className="text-3xl font-bold">Zeeheight</h2>
          </div>
         <div className="">
         <p className="text-gray-400">
            We are dedicated to delivering quality information and insights for elevating human consciousness.
            <br />
            Enabling fulfillment of dreams and attainment of purpose through sharing helpful guides for curbing cyber crime.
          </p>
         </div>
        </div>

        <div className='w-full flex  md:justify-center pt-4 md:pt-0 pb-6 md:pb-0' >
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Home</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">About</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Ebook</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>

          <div className='w-full flex md:justify-center pt-4 md:pt-0 pb-6 md:pb-0'>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Instagram</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Facebook</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Reddits</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Email</a></li>
            </ul>
          </div>
        {/* Right Section */}
        <div className="flex space-x-12">
       
         
          <div className='w-full flex justify-center'>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Privacy policies</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">FAQs</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Terms and conditions</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-500">
        @2024 ScamDoctor. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
