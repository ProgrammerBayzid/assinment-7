import React, { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg';
import { AuthContext } from '../Contex/Contex';

const Header = () => {
    const { user } = useContext(AuthContext)

    const menuItems = <>
        <li className='font-semibold'><Link to='/home'>Home</Link></li>
        <li className='font-semibold'><Link to='/about'>About</Link></li>
        <li className='font-semibold'><Link to='/services'>Services</Link></li>
        <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
        <li className='font-semibold'><Link to='/contact'>Contact</Link></li>
        <li className='font-semibold'><Link to='/orders'>Orders</Link></li>
        <li>
            <div className="" >
                {user?.uid ? <div className="dropdown dropdown-end tooltip tooltip-bottom" data-tip={user?.displayName ? user.displayName : 'Name Not Available'}>

                    <label tabIndex={0} >

                        <div >

                            <div className="w-10 rounded-full">
                                <span className='ms-2'>{user?.photoURL ?
                                    <img src={user.photoURL} />

                                    :
                                    <p>No Photo</p>
                                }</span>

                            </div>
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link to='/profile' className="justify-between switeh bg-secondary font-bold">
                                Profile
                            </Link>
                        </li>
                    </ul>
                </div>
                    :

                    <div >
                        <ul className='className="menu menu-horizontal p-0 flex gap-4'>
                            <li className='font-semibold'><Link to='/login'>Login </Link></li>
                            <li className='font-semibold'><Link to='/register'>Register</Link></li>
                        </ul>
                    </div>

                }
            </div>
        </li>
    </>

    return (
        <div className="navbar h-20 mb-12 pt-10 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="mt-5 normal-case text-xl">
                    <img src={logo} alt="" srcset="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-warning">Appoinment</button>

            </div>
        </div>
    )
}

export default Header
