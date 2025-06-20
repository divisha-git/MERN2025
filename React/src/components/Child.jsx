import React from 'react'

const Child = (props) => {
  return (
    <div>
      <h3>Name: {props.name}</h3>
        <h3>Phone number:{props.phonenumber}</h3>

      </div>
    
  )
}

export default Child