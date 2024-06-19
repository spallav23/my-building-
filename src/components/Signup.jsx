import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Signup = () => {
  const [societyName, setSocietyName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [blocks, setBlocks] = useState('');
  const [floors, setFloors] = useState('');
  const [flats, setFlats] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    axios.post('http://localhost:3000/signup',{name:societyName,email:email,password:password,blocks:blocks,floors:floors,flats:flats}).then((e)=>{
      console.log(e);
      if(e.status == 202){
          navigate('/home')
      }
    })
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Society Name</label>
            <input
              type="text"
              value={societyName}
              onChange={(e) => setSocietyName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Number of Blocks</label>
            <input
              type="number"
              value={blocks}
              onChange={(e) => setBlocks(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Floors per Block</label>
            <input
              type="number"
              value={floors}
              onChange={(e) => setFloors(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Flats per Floor</label>
            <input
              type="number"
              value={flats}
              onChange={(e) => setFlats(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
            Register
          </button>
        </form>
        <p>Not a member ?<NavLink to='/login'>Login here</NavLink></p>
      </div>
    </div>
  );
};

export default Signup;
