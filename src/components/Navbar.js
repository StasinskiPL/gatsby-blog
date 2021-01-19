import React from 'react'
import {Link} from "gatsby"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-inner">
                <Link to="/">Dawid Stasiński</Link>
                <Link to="/about">About</Link>




            </div>
        </nav>
    )
}

export default Navbar
