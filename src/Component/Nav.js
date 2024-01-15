import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate("/signup");
    }


    return (
        <div className="nav">
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/1086px-R_logo.svg.png" alt="Logo img"/>
            {
                auth ? <ul className="nav-ul">

                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/addJob">Add Job</Link></li>
                    {/* <li><Link to="/update/:id">Update Product</Link></li> */}
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to = "/about">About</Link></li>
                    <li><Link onClick={logout} to="/signup">Log Out</Link></li>
                </ul> :

                    <ul className="nav-ul nav-right">
                        <li><Link to="/">Sign Up/ Register</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
            }

        </div>
    )
}

export default Nav;