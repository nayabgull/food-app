import React from 'react'

function Onlineorder() {
  return (
    <div>
      <>
  <div className="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
    <div className="row g-0">
      <div className="col-md-6">
        <div className="video">
          <button
            type="button"
            className="btn-play"
            data-bs-toggle="modal"
            data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
            data-bs-target="#videoModal"
          >
            <span />
          </button>
        </div>
      </div>
      <div className="col-md-6 bg-dark d-flex align-items-center">
        <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
          <h5 className="section-title ff-secondary text-start text-primary fw-normal">
            Order Online
          </h5>
          <h1 className="text-white mb-4">Detail of Your Order</h1>
          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                  />
                  <label htmlFor="name">Your Name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="Number"
                    className="form-control"
                    id="phone"
                    placeholder="Mobile NUmber"
                  />
                  <label htmlFor="Number">Mobile NUmber</label>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="form-floating date"
                  id="date3"
                  data-target-input="nearest"
                >
                  <div className="form-floating">
                  <select className="form-select" id="select1">
                    <option value={1}>BreakFast</option>
                    <option value={2}>Lunch</option>
                    <option value={3}>Dinner</option>
                  </select>
                  <label htmlFor="select1">Category</label>
                </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <select className="form-select" id="select1">
                    <option value={1}>item1</option>
                    <option value={2}>item2</option>
                    <option value={3}>item3</option>
                  </select>
                  <label htmlFor="select1">Item</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Special Request"
                    id="message"
                    style={{ height: 100 }}
                    defaultValue={""}
                  />
                  <label htmlFor="message">Special Notes</label>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-primary w-100 py-3" type="submit">
                  Order Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div
    className="modal fade"
    id="videoModal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content rounded-0">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Youtube Video
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
          {/* 16:9 aspect ratio */}
          <div className="ratio ratio-16x9">
            <iframe
              className="embed-responsive-item"
              src=""
              id="video"
              allowFullScreen=""
              allowscriptaccess="always"
              allow="autoplay"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    </div>
  )
}

export default Onlineorder
