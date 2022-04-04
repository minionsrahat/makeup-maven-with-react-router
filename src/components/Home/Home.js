import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <>
        <div className="container mt-3">
            <div className="row mt-3">
                <div className="col-md-7 mx-auto p-3 d-flex align-items-center">
                    <div className="details">
                        <h3 className='feature-title'>
                        GET YOUR PERSONALIZED <br /> MAKEUP LOOK
                        </h3>
                        <p className='feature-details'>
                        Want a makeup look personalized for you whenever, wherever? MYAIA AKA My Artistry Intelligence Assistant, was supplied with advanced AI makeup powered by our top NYX professional Makeup artists who taught her everything she knows.
                         Our selfie expert can suggest makeup looks and tips that are perfect for you.
                        </p>
                        <button className='feature-btn'>GET YOUR LOOK RECOMMENDATION</button>
                    </div>
                    
                </div>
                <div className="col-md-3 mx-auto p-3">
                    <img className='feature-img' src="https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-nyxcosmetics-us-Library/en_US/dw5103da58/services/Services-ContentAssets-VTO-Mobile-540x540.jpg?sw=640&sh=640&sm=cut&q=70" alt="" srcset="" />
                </div>
                
            </div>
        </div>
        </>
    );
};

export default Home;