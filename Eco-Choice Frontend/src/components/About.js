import React from 'react';
import '../About.css'; // Import the CSS file correctly

export default function About() {
  return (
    <div className="abc">
      <div class="responsive-container-block bigContainer">
        <div class="responsive-container-block Container">
          <p class="text-blk heading">About Us</p>
          <p class="text-blk subHeading">
          "At Eco-Choice, we are passionate about bringing the beauty and essence of nature to your fingertips. Our journey began with a simple yet profound belief in the power of organic and natural products. We understand the importance of nourishing our bodies and caring for the environment simultaneously. Our platform is a haven for those who seek products that reflect these values – products that are sourced sustainably, created ethically, and designed to enhance your well-being. With a commitment to transparency and authenticity, we curate a diverse range of organic offerings, from wholesome foods to rejuvenating skincare. Eco-Choice is more than just an e-commerce website; it's a reflection of our dedication to a healthier lifestyle and a greener planet. Join us on this journey of embracing nature's wonders and making conscious choices that resonate with the rhythm of the Earth."
          </p>
          <div class="social-icons-container">
            <a class="social-icon">
              <img
                class="socialIcon image-block"
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb33.png"
              />
            </a>
            <a class="social-icon">
              <img
                class="socialIcon image-block"
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb34.png"
              />
            </a>
            <a class="social-icon">
              <img
                class="socialIcon image-block"
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb35.png"
              />
            </a>
            <a class="social-icon">
              <img
                class="socialIcon image-block"
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb36.png"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="por13">
        <hr class="featurette-divider" />
        <div class="containerc">
          <footer class="py-3 my-4">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
              <li class="nav-item">
                <a href="#" class="nav-link px-2 text-body-secondary">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link px-2 text-body-secondary">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link px-2 text-body-secondary">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link px-2 text-body-secondary">
                  FAQs
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link px-2 text-body-secondary">
                  About
                </a>
              </li>
            </ul>
            <p class="text-center text-body-secondary">
              Eco-Choice © 2023 Company, Inc
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
