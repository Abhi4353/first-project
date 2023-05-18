import React from "react";

const Subscribe = () => {
  return (
    <>
      <div className="container-fluid subscribe-main-div pt-5 pb-5">
        <div className="container subscribe-div">
          <div className="row">
            <div className="col">
              <div className="subscribe-text">
                <p className="subscribe-text-heading">
                  Subscribe Our Newsletter
                </p>
                <p>
                  Subscribe newsletter to get offers and about new places to
                  discover.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="subscribe-text-box">
                <input type="text" placeholder="Your Mail" />
                <button type="button" className="btn btn-danger btn-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
