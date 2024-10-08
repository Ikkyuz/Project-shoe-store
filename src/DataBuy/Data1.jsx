import React, { useState } from 'react';

const Data1 = () => {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };
  return (
    <div className="flex justify-center items-center py-12">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
        {/* รูปภาพสินค้า */}
        <div className="relative p-6 flex justify-center items-center w-full md:w-1/2">
          <img src="/image/Product-1.jpg" alt="Product" />
        </div>

        <div className="p-6 w-full md:w-1/2">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-bold">NIKE ZOOMX STREAKFLY</h2>
          </div>
          <p className="text-gray-500 text-sm">อะไรสักอย่างเพิ่มเติมของรองเท้า เช่น รองเท้าสำหรับผู้ชาย</p>
          <hr className='mt-4'/>

          <div className="mt-4">
            <h3 className="text-sm font-semibold">รายละเอียดสินค้า</h3>
            <p className="text-gray-500 text-sm">รายละเอียดพวกรองเท้านี้ทำมาจากอะไรดียังไงละมั้ง</p>
          </div>
          <hr className='mt-4'/>

          <div className="mt-4">
            <h4 className="text-sm font-semibold">SIZE</h4>
            <div className="flex space-x-2 mt-2">
              {["7", "8", "9", "10", "11"].map((size) => (
                <button key={size} onClick={() => handleSizeClick(size)} className={`py-2 px-4 border rounded-lg ${selectedSize === size ? "bg-blue-600 text-white" : "" }`} >{size}</button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between mt-6">
            <button
              className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
              disabled={!selectedSize}>ซื้อ</button>
            <span className="text-2xl font-bold mt-5">THB 3,155</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Data1;
