import React from 'react'
import {Link} from 'react-router-dom';


const Navbar = () => {
  return (
    <nav>
      <div>
        <Link className="App-link" to="/">Home</Link>
        &nbsp;|&nbsp;
        <Link className="App-link" to="/page2">Page2</Link>
      </div>
    </nav>
  )
}

export default Navbar