import React,{useState} from 'react'

const Counter = () => {
    const [count,SetCount] = useState(0)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>{SetCount(count+2)}}>Increment</button>
        <button onClick={()=>{SetCount(count-2)}}>Decrement</button>
    </div>
  )
}

export default Counter