// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { useNavigate, useSearchParams } from 'react-router-dom'
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import MaintenanceOverview from './MaintenanceOverview';


// const groupByBlock = (flats) => {
//   return flats.reduce((acc, flat) => {
//     const { block } = flat;
//     if (!acc[block]) {
//       acc[block] = [];
//     }
//     acc[block].push(flat);
//     return acc;
//   }, {});
// };

// const Home = () => {
//   const navigate = useNavigate();
//   const [flatDetails, setFlatDetails] = useState([]);
//   const [groupedData, setGroupedData] = useState({});

//   useEffect(() => {
//     axios.get('http://localhost:3000/').then((e)=>{
//                           if(!e.data.valid){

//                               alert("please login first ");
//                               navigate('/')
//                           }
//                           else{
//                             console.log(e.data.email);
//                             axios.post('http://localhost:3000/getflat', { email:e.data.email})
//                               .then((response) => {
//                                 const data = response.data;
//                                 setFlatDetails(data);
//                                 const grouped = groupByBlock(data);
//                                 setGroupedData(grouped);
//                               })
//                               .catch((error) => {
//                                 console.error('Error fetching data:', error);
//                               });

//                           }});



//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="text-center mb-6"
//       >
//         <h1 className="text-4xl font-bold mb-4">Welcome to My Building</h1>
//         <p className="text-lg text-gray-700">Manage your society efficiently with our tools</p>
//       </motion.div>

//       <motion.div
//         initial={{ y: -50 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="grid gap-4 sm:grid-cols-2 mb-8"
//       >
//         {Object.keys(groupedData).map((block) => (
//           <MaintenanceOverview key={block} block={block} flatDetails={groupedData[block]} />
//         ))}
//       </motion.div>

//       <motion.div
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 0.5 }}
//         className="flex space-x-4"
//       >
//         <Link to="/login">
//           <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-150 ease-in-out">
//             Login
//           </button>
//         </Link>
//         <Link to="/register">
//           <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition duration-150 ease-in-out">
//             Sign Up
//           </button>
//         </Link>
//       </motion.div>
//     </div>
//   );
// };

// export default Home;





import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import MaintenanceOverview from './MaintenanceOverview';
import Modal from './Model';

const groupByBlock = (flats) => {
  return flats.reduce((acc, flat) => {
    const { block } = flat;
    if (!acc[block]) {
      acc[block] = [];
    }
    acc[block].push(flat);
    return acc;
  }, {});
};

const Home = () => {
  const [flatDetails, setFlatDetails] = useState([]);
  const [groupedData, setGroupedData] = useState({});
  const [selectedFlat, setSelectedFlat] = useState(null);
  const [maintenanceHistory, setMaintenanceHistory] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // useEffect(() => {
  //   axios.post('http://localhost:3000/getflat', { email: 'your_email@example.com' })
  //     .then((response) => {
  //       const data = response.data;
  //       setFlatDetails(data);
  //       const grouped = groupByBlock(data);
  //       setGroupedData(grouped);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);

  useEffect(() => {
    axios.get('http://localhost:3000/').then((e) => {
      if (!e.data.valid) {

        alert("please login first ");
        navigate('/')
      }
      else {
        console.log(e.data.email);
        axios.post('http://localhost:3000/getflat', { email: e.data.email })
          .then((response) => {
            const data = response.data;
            setFlatDetails(data);
            const grouped = groupByBlock(data);
            setGroupedData(grouped);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });

      }
    });



  }, []);

  const handleFlatClick = (flat) => {
    console.log(flat);
    setSelectedFlat(flat);
    axios.post('http://localhost:3000/getmaintenance', {email:flat.email,flat:flat.flatNumber,block:flat.block}).then((response) => {
        console.log(response.data);
        setMaintenanceHistory(response.data);
        setIsModalOpen(true);
      }).catch((error) => {
        console.error('Error fetching maintenance history:', error);
      });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFlat(null);
    setMaintenanceHistory([]);
  };

  return (
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
        {Object.keys(groupedData).map((block) => (
          <MaintenanceOverview
            key={block}
            block={block}
            flatDetails={groupedData[block]}
            onFlatClick={handleFlatClick}
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex space-x-4"
      >
        <Link to="/login">
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-150 ease-in-out">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition duration-150 ease-in-out">
            Sign Up
          </button>
        </Link>
      </motion.div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-2xl font-bold mb-4">Maintenance History for Flat {selectedFlat?.flatNumber}</h2>
        <div className="space-y-2">
          {maintenanceHistory.map((record, index) => (
            <div key={index} className="p-2 bg-gray-200 rounded">
              <p>Month: {record.maintenanceMonth}</p>
              <p>Amount: {record.maintenanceAmount}</p>
              <p>Payment Mode: {record.paymentMode}</p>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default Home;
