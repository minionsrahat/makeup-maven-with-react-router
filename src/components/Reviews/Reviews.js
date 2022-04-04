import React from 'react';
import useReviews from '../Hooks/Hooks';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews]=useReviews();
    return (
        <div>
            <h3 className='text-center mt-5'>Total Reviews : {reviews.length}</h3>
            <div className="container my-5">
                <div className="row gy-4">
                  
                {
                    reviews.map((review)=>{
                        return <Review key={review.id} review={review}></Review>
                    })
                }  
                </div>
            </div>
        </div>
    );
};

export default Reviews;