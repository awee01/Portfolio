import React from 'react'
import {Link} from "react-scroll"

const Navbar = () => {
    return (
        <header className = "navbar">
        <h1>
            <a>Adi Wee</a>
        </h1>
        <nav>
            <ul>
                <Link className = "linknav" smooth = {true} to = "About-Me" offset ={-100}>
                    <a href="#About-Me">About Me</a>
                </Link>
                <Link className = "linknav" smooth = {true} to = "Works" offset ={-100}>
                    <a href="#Works">Projects</a>
                </Link>
                <Link className = "linknav" smooth = {true} to = "Resume" offset ={-100}>
                    <a href="#Resume">Resume</a>
                </Link>
                <Link className = "linknav" smooth = {true} to = "Contact-Me" offset ={-100}>
                    <a href="#Contact-Me">Contact Me</a>
                </Link>
            </ul>
        </nav>
    </header>
    )
}

export default Navbar
