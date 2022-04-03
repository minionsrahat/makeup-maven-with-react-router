import React from 'react';
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
                             <a className="nav-link" >Home</a>
                         </li>
                         <li className="nav-item">
                             <a className="nav-link">Review</a>
                         </li>
                     </ul>
                    
                 </div>
           </div>
         </nav>
         
         
         </>
    );
};

export default Header;