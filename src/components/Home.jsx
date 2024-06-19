import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  axios.get('http://localhost:3000/').then((e)=>{
     if(!e.data.valid){
      
        alert("please login first ");
        navigate('/')
    }})
  return (
    <div>
      home
    </div>
  )
}

export default Home



