import React from 'react';
import {NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
         <>
         <nav className="navbar navbar-expand-md navbar-dark bg-dark">
               <div className="container">
                 <a className="navbar-brand">Makeup Maven</a>
                 <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                     aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                 </button>
                 <div className="collapse navbar-collapse" id="collapsibleNavId">
                     <ul className="navbar-nav mx-auto py-3">
                         <li className="nav-item active">
                         <NavLink to='/' className="nav-link">Home</NavLink>
                         </li>
                         <li className="nav-item">
                             <NavLink to='/review' className="nav-link">Review</NavLink>
                         </li>
                         <li className="nav-item">
                             <NavLink to='/dashboard' className="nav-link">Dashboard</NavLink>
                         </li>
                         <li className="nav-item">
                             <NavLink to='/blogs' className="nav-link">Blogs</NavLink>
                         </li>
                         <li className="nav-item">
                             <NavLink to='/about' className="nav-link">About</NavLink>
                         </li>
                     </ul>
                    
                 </div>
           </div>
         </nav>
         
         
         </>
    );
};

export default Header;