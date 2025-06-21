import React from 'react'

import Child from './components/Child'
import Home from './pages/Home/'
import About from './pages/About'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup/'
import Counter from './components/Counter'
import Navbar from './components/Navbar'
import Hooks from './pages/Hooks'
import State from './Hooks/State'
import Effect from './Hooks/Effect'
import Ref from './Hooks/Ref'
import Reducer from './Hooks/Reducer'
import { Route, Routes } from 'react-router-dom'



const App = () => {
  var fruit = ["Apple", "Banana", "Orange"];
  var users = { username: "Divisha", password: "93492390" }
  return (
    /* <div>
       <Child name="divi" phonenumber="9876543210"/>
       <Child name="harshnee" phonenumber= "9076543210"/>
       <Home items={fruits} user={users} />
       <About/>
       <Skills/>
       <Contact/>
       <Login/>
       <Counter/>*/
    <div>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home items={fruit} users={users} />} />
        <Route path='/about' element={<About items={fruit} users={users} />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/child' element={<Child name="divi" phonenumber="9876543210" />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/hooks' element={<Hooks />} />
        <Route path='/state' element={<State />} />
        <Route path='/effect' element={<Effect />} />
        <Route path='/ref' element={<Ref />} />
        <Route path='/reducer' element={<Reducer />} />

      </Routes>

    </div>

  )
}

export default App