import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Notfound.css'

const Notfound = () => {
    const navigate=useNavigate();
    const goHomepage=()=>{
        navigate('/');
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="error-template">
                            <h1>
                                Oops!</h1>
                            <h2>
                                404 Not Found</h2>
                            <div className="error-details">
                                Sorry, an error has occured, Requested page not found!
                            </div>
                            <div className="error-actions">
                            <button onClick={goHomepage} className='feature-btn'>Take Me Home</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Notfound;