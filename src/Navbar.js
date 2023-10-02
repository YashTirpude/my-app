import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar(props) {



  return (
    <nav className="navbar navbar-expand-lg  bg-dark  text-light fixed-top">
      <div className="container-fluid bg-dark">
        <Link className="navbar-brand text-light" to="/">Home</Link>



        <div className="collapse navbar-collapse  " id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item" >
              <Link className="nav-link text-light " aria-current="page" to="/entertainment">Entertainment</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/sports">Sports</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/science">Science</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/business">Business</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/health">Health</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/technology">Technology</Link>
            </li>
          </ul>
        </div>


        <div className="nav-item dropdown">
          <div className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </div>
          <ul className="dropdown-menu bg-dark ">

            <li><Link className="dropdown-item text-light" to="/entertainment">Entertainment</Link></li>
            <li><Link className="dropdown-item text-light" to="/sports">Sports</Link></li>
            <li><Link className="dropdown-item text-light" to="/science">Science</Link></li>
            <li><Link className="dropdown-item text-light" to="/business">Business</Link></li>
            <li><Link className="dropdown-item text-light" to="/health">Health</Link></li>
            <li><Link className="dropdown-item text-light" to="/technology">Technology</Link></li>
          </ul>
        </div>


        {/* <button type="button" className="btn btn-sm btn-primary mx-3" onClick={props.toggleDarkmode}>Dark Mode</button> */}
      </div>



    </nav>
  )
}

