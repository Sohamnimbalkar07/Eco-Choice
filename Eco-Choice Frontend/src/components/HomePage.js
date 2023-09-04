import React from 'react';
import '../HomePage.css';

function HomePage() {
  return (
    <>
      <div>
        <div
          id="myCarousel"
          class="carousel slide mb-6 por2"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="0"
              class=""
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              class="active"
              aria-current="true"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner por3">
            <div class="carousel-item por4">
              <img
                class="d-block w-100 "
                src="https://zimiorganics.com/blog/images/1.jpg"
                alt="Image 1"
              />

              <div class="container containerb">
                <div class="carousel-caption text-start"></div>
              </div>
            </div>
            <div class="carousel-item por4 active">
              <img
                class="d-block w-100 "
                src="https://agriculturepost.com/wp-content/uploads/2020/09/5-schemes-promoting-organic-farming-in-India.jpg"
                alt="Image 1"
              />
              <div class="carousel-caption">
                <h1 class="por12">Nature's Cart: Your Organic Haven</h1>
                <p class="por11">
                  Explore a World of Organic Delights – Where Health Meets
                  Sustainability
                </p>
              </div>
              <div class="container containerb">
                <div class="carousel-caption"></div>
              </div>
            </div>
            <div class="carousel-item por4">
              <img
                class="d-block w-100 "
                src="https://www.wegmans.com/wp-content/uploads/1097052-hero-wegmans-organic-farm-1.jpg"
                alt="Image 1"
              />

              <div class="container containerb">
                <div class="carousel-caption text-end"></div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div class="container containerb marketing por1">
        <div class="row">
          <div class="col-lg-4">
            <img
              class="d-block w-100 por8"
              src="https://www.dahu.bio/images/photos/agriculture/organic-product.jpg"
              alt="Image 1"
            />
            <h2 class="fw-normal">100% Natural</h2>
          </div>
          <div class="col-lg-4">
            <img
              class="d-block w-100 por8"
              src="https://5.imimg.com/data5/DW/VD/HC/SELLER-1035160/organic-grains.jpg"
              alt="Image 1"
            />
            <h2 class="fw-normal">100% Healthy</h2>
          </div>
          <div class="col-lg-4">
            <img
              class="d-block w-100 por8"
              src="https://www.healthkart.com/connect/wp-content/uploads/2016/07/banner-26.jpg"
              alt="Image 1"
            />
            <h2 class="fw-normal">100% Natural</h2>
          </div>
        </div>

        <hr class="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading fw-normal lh-1 por10">
              Embracing Nature's Finest
            </h2>
            <p class="lead">
              Natural products harness the inherent goodness of the Earth.
              They're crafted with minimal processing, preserving the integrity
              of their ingredients. Choosing natural means opting for
              simplicity, allowing the potency of nature to enrich our lives.
            </p>
          </div>
          <div class="col-md-5">
            <img
              class="d-block w-100 por9"
              src="https://img.freepik.com/premium-vector/100-percent-natural-product-label-stamp-badge-vector_545399-1100.jpg"
              alt="Image 1"
            />
          </div>
        </div>

        <hr class="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading fw-normal lh-1 por10">
              The Essence of Organic Products
            </h2>
            <p class="lead">
              Organic products: pure, sustainable, and natural. With no
              synthetic additives, they offer a genuine way to enhance our lives
              while caring for the Earth. Make the choice for health and the
              environment by embracing the organic difference.
            </p>
          </div>
          <div class="col-md-5 order-md-1">
            <img
              class="d-block w-100 por9"
              src="https://img.freepik.com/free-vector/pure-natural-organic-label-badge_1017-26210.jpg?q=10&h=200"
              alt="Image 1"
            />
          </div>
        </div>

        <hr class="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading fw-normal lh-1 por10">
              Prioritizing Wellness
            </h2>
            <p class="lead">
              Healthy products are more than just items; they're pathways to a
              better lifestyle. By selecting these products, you're making a
              conscious choice to nurture your well-being. Each product is a
              step towards a healthier, happier you.
            </p>
          </div>
          <div class="col-md-5">
            <img
              class="d-block w-100 por9"
              src="https://img.freepik.com/free-vector/hand-drawn-healthy-food-logo-template_23-2149641244.jpg?w=2000"
              alt="Image 1"
            />
          </div>
        </div>
      </div>
      <div className='por13'>
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
            <p class="text-center text-body-secondary">Eco-Choice © 2023 Company, Inc</p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default HomePage;
