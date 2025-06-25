import React from 'react'
import { Link } from 'react-router-dom'
import'./Navbar.css'

const Navbar = () => {
  return (
    <div>
        <nav class='navbar'>
            <Link to ='/home'className='Link'>Home</Link>
            <Link to ='/about'className='Link'>About</Link>
            <Link to ='/skills'className='Link'>Skills</Link>
            <Link to ='/contact'className='Link'>Contact</Link>
            <Link to ='/login'className='Link'>Login</Link>
             <Link to ='/signup' className='Link'>Signup</Link>
            <Link to ='/child'className='Link'>Child</Link>
             <Link to ='/counter'className='Link'>Counter</Link>
             <Link to ='/hooks' className='Link'>Hooks</Link>
             <Link to ='/ref' className='Link'>Ref</Link>
              <Link to ='/reducer' className='Link'>Reducer</Link>
                <Link to ='/todo' className='Link'>Todo</Link>
            
        </nav>
    </div>
  )
}

export default Navbar