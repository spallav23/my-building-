import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const MaintenanceDetails = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState()
  const [block, setBlock] = useState('');
  const [flatNumber, setFlatNumber] = useState('');
  const [maintenanceMonth, setMaintenanceMonth] = useState('');
  const [maintenanceAmount, setMaintenanceAmount] = useState('');
  const [paymentMode, setPaymentMode] = useState('');
  axios.get('http://localhost:3000/').then((e)=>{
    if(!e.data.valid){
     
       alert("please login first ");
       navigate('/')
   }
   else{
    setemail(e.data.email);
   }
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/maintenance',{block,flatNumber,maintenanceMonth,maintenanceAmount,paymentMode,email}).then((e)=>{
      console.log(e);
      if(e.status == 202){
          navigate('/home')
      }
    })
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Add Maintenance Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Block</label>
            <input
              type="text"
              value={block}
              onChange={(e) => setBlock(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Flat Number</label>
            <input
              type="text"
              value={flatNumber}
              onChange={(e) => setFlatNumber(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Maintenance Month</label>
            <input
              type="month"
              value={maintenanceMonth}
              onChange={(e) => setMaintenanceMonth(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Maintenance Amount</label>
            <input
              type="number"
              value={maintenanceAmount}
              onChange={(e) => setMaintenanceAmount(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Payment Mode</label>
            <select
              value={paymentMode}
              onChange={(e) => setPaymentMode(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            >
              <option value="">Select Payment Mode</option>
              <option value="cash">Cash</option>
              <option value="online">Online</option>
              <option value="check">Check</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
            Add Details
          </button>
        </form>
      </div>
    </div>
  );
};

export default MaintenanceDetails;
