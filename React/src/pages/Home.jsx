import React from 'react'
import image from '../assets/p18.jpg'
import About from './About'

const Home = ({ items, users }) => {
  return (
    <div>
      <About items={items} users={users} />
      <img src={image} alt="photo" />
    </div>
  )
}

export default Home
