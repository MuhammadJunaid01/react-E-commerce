import React from "react";
import "./Review.css";
const Review = () => {
  const cartImg =
    "https://images.unsplash.com/photo-1601168658155-24ba806c086a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80";
  const cartimg2 =
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80";
  const cartimg3 =
    "https://images.unsplash.com/photo-1546215364-12f3fff5d578?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";
  return (
    <div className="review">
      <div className="costumer-revi container">
        <div className="row mt-5">
          <div className="col-lg-4 ">
            <div className="card cards">
              <img src={cartImg} class="card-img-top review-img" alt="..." />
              <div className="card-body">
                <h3 className="card-title">Danniy</h3>
                <span className="text-warning fs-2 me-3">
                  <i class="fas fa-thumbs-up"></i>
                </span>
                <span className="text-warning fs-2 me-3">
                  <i class="fas fa-thumbs-up"></i>
                </span>
                <span className="text-warning fs-2 me-3">
                  <i class="fas fa-thumbs-up"></i>
                </span>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 ">
            <div className="card cards">
              <img src={cartimg2} class="card-img-top review-img" alt="..." />
              <div className="card-body">
                <h3 className="card-title">Danniy</h3>
                <span className="text-warning fs-2 me-3">
                  <i class="fas fa-thumbs-up"></i>
                </span>
                <span className="text-warning fs-2 me-3">
                  <i class="fas fa-thumbs-up"></i>
                </span>
                <span className="text-warning fs-2 me-3">
                  <i class="fas fa-thumbs-up"></i>
                </span>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card cards">
              <img src={cartimg3} class="card-img-top review-img" alt="..." />
              <div className="card-body">
                <h3 className="card-title">Danniy</h3>
                <span className="text-warning fs-2 me-3">
                  <i class="fas fa-thumbs-up"></i>
                </span>
                <span className="text-warning fs-2 me-3">
                  <i class="fas fa-thumbs-up"></i>
                </span>
                <span className="text-warning fs-2 me-3">
                  <i class="fas fa-thumbs-up"></i>
                </span>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
