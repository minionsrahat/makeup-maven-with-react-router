import React from 'react';
import './Review.css'
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Review = (props) => {
    const { username, comment, img, rating, date } = props.review;
    return (
        <>
            <div className="col-md-10 mx-auto d-flex flex-row align-items-center shadow">
                <div className="review-img">
                    <img src={img} alt="" />
                </div>
                <div className="review-detail">
                    <div className="user-details px-3 mt-2">
                        <p><strong>{username}</strong> <span className='text-muted ms-2'>{date}</span></p>
                        <p>{comment}</p>


                    </div>

                    <div className="ratings px-3 mb-3">
                        <Rating
                            initialRating={rating}
                            emptySymbol={<FontAwesomeIcon icon={faStar} />}
                            fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                            readonly
                        ></Rating>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Review;