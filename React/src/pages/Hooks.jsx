import React from 'react'
import {Link} from 'react-router-dom'

const Hooks = () => {
  return (
        <div style={{ display: "flex", flexDirection: "column"}}>
        <Link to='/State'>UseState</Link>
        <Link to='/effect'>useEffect</Link>
    </div>
  )
}

export default Hooks