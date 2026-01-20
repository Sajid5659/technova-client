import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';
import userIcon from "../assets/user.png"
import logo from "../assets/logo.png"
import Swal from 'sweetalert2';
const Navbar = () => {
    const { user, logoutUser } = use(AuthContext)

    const handleLogout = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You will be logged out from TechNova",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, logout!"
        }).then((result) => {
            if (result.isConfirmed) {
                logoutUser().then(()=>{
                    Swal.fire({
                    title: "Logged Out!",
                    text: "Successfully logged out from TechNova",
                    icon: "success"
                });
                })
                
            }
        });
    }

    const links = (
        <div className="flex flex-col md:flex-row gap-6 font-medium text-lg">
            {[
                { to: "/", label: "Home" },
                { to: "/products", label: "Products" },
                { to: "/contact", label: "Contact" }
            ].map((item) => (
                <NavLink
                    key={item.to}
                    to={item.to}
                    className="relative"
                >
                    {item.label}
                </NavLink>
            ))}
        </div>
    );
    return (
        <div>
            <div className='shadow-sm bg-white fixed top-0 z-100 w-full'>
                <div className="navbar max-w-[90%] mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {links}
                            </ul>
                        </div>
                        <div>
                            <img className='w-32' src={logo} alt="" />
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end flex gap-3">
                        <Link to="/dashboard">
                            <img className='w-10 h-10 object-cover rounded-full' src={user ? user.photoURL : userIcon} alt="" />
                        </Link>
                        {
                            user ? (
                                <button onClick={handleLogout} className='btn border-secondary border-2 shadow-none text-sm bg-white text-secondary'>
                                    Logout
                                </button>
                            ) : (
                                <Link to="/login" className='btn border-secondary border-2 shadow-none text-sm bg-white text-secondary'>
                                    Login
                                </Link>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;