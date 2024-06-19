import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Navbar = () => {
  const navigate = useNavigate()
  axios.get('http://localhost:3000/').then((e) => {
    if (e.data.valid) {
      document.getElementById('login').innerHTML = e.data.name;
    }
  })

function logclick(){
  axios.get('http://localhost:3000/').then((e) => {
    if (e.data.valid) {
      const yn = confirm("do you want to log out ?");
      if (yn) {
        axios.post('http://localhost:3000/',{e}).then(() => {
          document.getElementById('login').innerHTML = 'Log in';
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
    <div>
      <nav className='flex'>
        <div className="left w-3/6 ">
        <NavLink to='/' className="flex gap-10 px-10">
            <div className="logo"><img src="src/assets/My Apartment W1015px H875px.png" alt="" width={40} /></div>
            <div className="name my-auto">My Building</div>
        </NavLink>
        </div>
        <div className="right w-3/6 my-auto">
            <ul className='flex justify-around '>
                <li><NavLink to='/home'>home</NavLink></li>
                <li><NavLink to='/addflat'>Flat Details</NavLink></li>
                <li><NavLink to='/addmaintenance'>maintenance Details</NavLink></li>
                <li><NavLink id='login' className='px-6 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-150 ease-in-out' onClick={logclick} >Login</NavLink></li>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
