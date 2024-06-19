import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const FlatDetails = () => {
  const navigate = useNavigate();
  const [ownerName, setOwnerName] = useState('');
  const [block, setBlock] = useState('');
  const [flatNumber, setFlatNumber] = useState('');
  const [flatType, setFlatType] = useState('');
  const [rented, setRented] = useState(false);
  const [rentedPersonName, setRentedPersonName] = useState('');
  axios.get('http://localhost:3000/').then((e)=>{
    if(!e.data.valid){
     
       alert("please login first ");
       navigate('/')
   }})
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/flat',{ownerName,block,flatNumber,flatType,rented,rentedPersonName}).then((e)=>{
      console.log(e);
      if(e.status == 202){
          navigate('/home')
      }
    })
    console.log('Flat details:', { ownerName, block, flatNumber, flatType, rented, rentedPersonName });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Add Flat Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Owner Name</label>
            <input
              type="text"
              value={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
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
            <label className="block text-gray-700">Flat Type</label>
            <input
              type="text"
              value={flatType}
              onChange={(e) => setFlatType(e.target.value)}
              placeholder="e.g., 2BHK, 3BHK"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Rented</label>
            <div className="flex items-center mt-1">
              <input
                type="checkbox"
                checked={rented}
                onChange={(e) => setRented(e.target.checked)}
                className="mr-2"
              />
              <span>{rented ? 'Yes' : 'No'}</span>
            </div>
          </div>
          {rented && (
            <div className="mb-4">
              <label className="block text-gray-700">Rented Person Name</label>
              <input
                type="text"
                value={rentedPersonName}
                onChange={(e) => setRentedPersonName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                required
              />
            </div>
          )}
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
            Add Details
          </button>
        </form>
      </div>
    </div>
  );
};

export default FlatDetails;
