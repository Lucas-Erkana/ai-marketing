import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-newsletter">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h4>Join Our Newsletter</h4>
              <p>
                Tamen quem nulla quae legam multos aute sint culpa legam noster
                magna
              </p>
              <form action="" method="post">
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 footer-contact">
              <h3>
                AI Marketing Agency<span>.</span>
              </h3>
              <p>
                147 Sam Nujoma Avenue <br />
                Walvis Bay, 13013
                <br />
                Namibia
                <br />
                <br />
                <strong>Phone:</strong> +264853211110
                <br />
                <strong>Email:</strong> info@aimarketing.com.na
                <br />
              </p>
            </div>
            {/* Add more columns here as needed */}
          </div>
        </div>
      </div>

      <div className="container py-4">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>AI-Marketing</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="https://lucaserkana.vercel.app/">Lucas Erkana</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
