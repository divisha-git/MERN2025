import React from 'react'

import Child from './components/Child'
import Home from  './pages/Home/'
import About from './pages/About'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Counter from './components/Counter'


const App = () => {
 var fruits = ["Apple","Banana","Orange"];
 var users={username : "Divisha",password : "93492390" }
  return (
    <div>
     /* <Child name="divi" phonenumber="9876543210"/>
      <Child name="harshnee" phonenumber= "9076543210"/>
      <Home items={fruits} user={users} />
      <About/>
      <Skills/>
      <Contact/>
      <Login/>
      <Counter/>

    </div>
    
  )
}

export default App