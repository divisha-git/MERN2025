import React, { useState, useEffect } from 'react';

const Effect = () => {
  const [count, setCount] = useState(0); 
  const [user, setUser] = useState([]); 

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users') 
      .then(res => res.json())
      .then(data => setUser(data));
  }, []); 

  const handleIncrement = () => {
    setCount(count + 1);
  }

  const handleDecrement = () => {
    setCount(count - 1);
  }

  const handleReset = () => {
    setCount(0);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleIncrement}>Increment</button>

      <ol>
        {user.map((data) => (
         <>
            <p>ID: {data.id}</p>
            <p>Name: {data.name}</p>
            <p>Email: {data.email}</p>
             <p>Street: {data.address.street}</p>
            <p>Latitude: {data.address.geo.lat}</p>
          </>
        ))}
      </ol>
    </div>
  );
}

export default Effect;
