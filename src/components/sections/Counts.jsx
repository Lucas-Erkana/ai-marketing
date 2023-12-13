import React from 'react';

const Counts = () => {
  return (
    <section id="counts" className="counts">
      <div className="container" data-aos="fade-up">
        <div className="row">

          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <i className="bi bi-emoji-smile"></i>
              <span className="purecounter" data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1"></span>
              <p>Happy Clients</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
            <div className="count-box">
              <i className="bi bi-journal-richtext"></i>
              <span className="purecounter" data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1"></span>
              <p>Projects</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="bi bi-headset"></i>
              <span className="purecounter" data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1"></span>
              <p>Hours Of Support</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="bi bi-people"></i>
              <span className="purecounter" data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1"></span>
              <p>Hard Workers</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Counts;
