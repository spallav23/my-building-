import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MaintenanceOverview from './MaintenanceOverview';

const Home = () => {
  const [email, setemail] = useState()
  // const [blocksData, setblocksData] = useState()
  const navigate = useNavigate();
  axios.get('http://localhost:3000/').then((e)=>{
     if(!e.data.valid){
      
        alert("please login first ");
        navigate('/')
    }
    else{
      setemail(e.data.email)
    }
  })
    useEffect(() => {
     axios.post('http://localhost:3000/getmaintenance',{email:email}).then((e)=>{
      // setblocksData(e.data);
     })
      
    }, [])
    
      const blocksData =[
      {
        block: 'A',
        flatDetails: [
          { flatNumber: '101', lastPayment: 'May 2024', paid: true },
          { flatNumber: '102', lastPayment: 'April 2024', paid: false },
          { flatNumber: '103', lastPayment: 'June 2024', paid: true },
          { flatNumber: '104', lastPayment: 'May 2024', paid: false },
        ],
      },
      {
        block: 'B',
        flatDetails: [
          { flatNumber: '201', lastPayment: 'June 2024', paid: true },
          { flatNumber: '202', lastPayment: 'March 2024', paid: false },
          { flatNumber: '203', lastPayment: 'April 2024', paid: true },
          { flatNumber: '204', lastPayment: 'May 2024', paid: false },
        ],
      },
      {
        block: 'C',
        flatDetails: [
          { flatNumber: '301', lastPayment: 'February 2024', paid: false },
          { flatNumber: '302', lastPayment: 'March 2024', paid: true },
          { flatNumber: '303', lastPayment: 'April 2024', paid: true },
          { flatNumber: '304', lastPayment: 'May 2024', paid: false },
        ],
      },
      {
        block: 'D',
        flatDetails: [
          { flatNumber: '401', lastPayment: 'May 2024', paid: true },
          { flatNumber: '402', lastPayment: 'April 2024', paid: false },
          { flatNumber: '403', lastPayment: 'June 2024', paid: true },
          { flatNumber: '404', lastPayment: 'May 2024', paid: false },
        ],
      },
    ];
  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center mb-6"
      >
        <h1 className="text-4xl font-bold mb-4">Welcome to My Building</h1>
        <p className="text-lg text-gray-700">Manage your society efficiently with our tools</p>
      </motion.div>

      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid gap-4 sm:grid-cols-2 mb-8"
      >
        {blocksData.map((blockData, index) => (
          <MaintenanceOverview key={index} block={blockData.block} flatDetails={blockData.flatDetails} />
        ))}
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex space-x-4"
      >
       
      </motion.div>
    </div>
    </>
  );
};

export default Home;
