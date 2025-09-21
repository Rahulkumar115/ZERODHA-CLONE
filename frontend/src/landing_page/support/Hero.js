import React from "react";

function Hero() {
    return (
    <div className="bg-light py-5">
      <div className="container">

        {/* First Row: Title and Button */}
        <div className="row">
          {/* CHANGE: Increased width from col-md-10 to col-md-12 */}
          <div className="col-md-12">
            <div className="d-flex justify-content-between align-items-center">
              <h1 className="h2">Support Portal</h1>
              <a href="#" className="btn btn-primary">My tickets</a>
            </div>
          </div>
        </div>

        {/* Second Row: Search Bar */}
        <div className="row mt-4">
          {/* CHANGE: Increased width from col-md-10 to col-md-12 */}
          <div className="col-md-12 mb-5">
            <div className="input-group input-group-lg">
              <span className="input-group-text bg-white border-end-0">
                <i className="bi bi-search"></i>
              </span>
              <input
                type="text" style={{height:"60px", width:"100px"}}
                className="form-control border-start-0 text-muted fs-6"
                placeholder="Eg: How do I open my account, How do I activate F&O?"
              />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};


export default Hero;