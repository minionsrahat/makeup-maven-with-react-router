import React from 'react';
import './Home.css';
import useReviews from '../Hooks/Hooks';
import Review from '../Review/Review';
import {NavLink, useNavigate } from 'react-router-dom';
const Home = () => {
    const [reviews, setReviews]=useReviews();
    const navigate=useNavigate();
    const goReviewpage=()=>{
        navigate('/review');
    }
    return (
        <>
        <section className="feature">
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
                    <img className='feature-img' src="https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-nyxcosmetics-us-Library/en_US/dw5103da58/services/Services-ContentAssets-VTO-Mobile-540x540.jpg?sw=640&sh=640&sm=cut&q=70" alt=""/>
                </div>
                
            </div>
        </div>
        </section>
       
       <section className="review-section my-5">
           <div className="container">
           <h3 className='text-center mt-5'>Customer Reviews (3)</h3>
               <div className="row gy-4 my-3">
                 {reviews.slice(0,3).map((review)=>{
                        return <Review key={review.id} review={review}></Review>
                    })}
               </div>
               <div className="text-center">
               {/* <NavLink to='/review' className='feature-btn'>Review</NavLink> */}
               <button onClick={goReviewpage} className='feature-btn'>See All Reviews</button>
               </div>
           </div>
       </section>

    
        </>
    );
};

export default Home;