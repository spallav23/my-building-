import React, { useEffect } from 'react';
import './App.css'
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
function App() {
  const navigate = useNavigate();
  useEffect(() => {

    axios.get('http://localhost:3000/').then((e) => {
      if (e.data.valid) {
        console.log(e.data.name);
        document.getElementById('logapp').innerHTML = e.data.name;
        document.getElementById('signup').style.display = 'none';
      }
    })
  }, [])
  function logclick() {
    axios.get('http://localhost:3000/').then((e) => {
      if (e.data.valid) {
        const yn = confirm("do you want to log out ?");
        if (yn) {
          axios.post('http://localhost:3000/', { e }).then(() => {
            document.getElementById('logapp').innerHTML = 'Log in';
            document.getElementById('signup').style.display = '';
            navigate('/');
          })
        }
      }
      else {

        navigate('/login');

      }
    })
  }


    return (
      <>
        < div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4" >
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
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-bold mb-2">Manage Maintenance</h2>
              <p className="text-gray-700">Keep track of all maintenance payments and dues.</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-bold mb-2">Manage Flat Owners</h2>
              <p className="text-gray-700">Easily manage flat owner information and details.</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-bold mb-2">View Reports</h2>
              <p className="text-gray-700">Generate and view detailed reports of society activities.</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-bold mb-2">Communication</h2>
              <p className="text-gray-700">Communicate easily with society members.</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex space-x-4"
          >
            {/* <Link to="/login" >  */}
            <Link id="logapp" onClick={() => { logclick() }} className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Login
            </Link>
            {/* </Link> */}
            <Link to="/signup" id='signup'>
              <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                Sign Up
              </button>
            </Link>
          </motion.div>
        </div >



      </>
    )
  }

  export default App


