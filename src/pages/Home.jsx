import React from 'react'

const Home = ({items,user}) => {
  return (
    <div>
      <ol type="1">
        {items.map((fruits)=>(<li>{fruits}</li>))}
      </ol>
      <h2>{user.username}</h2>
      <h2>{user.password}</h2>
    </div>
  )
}

export default Home