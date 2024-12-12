import React from "react";

export const About = () => {
    return (
        <>
 <main className="main">
  {/* Page Title */}
  <div className="page-title dark-background" data-aos="fade" style={{height: 450, backgroundImage: 'url(assets/img/superyacht-management-header.jpg)'}}>
    <div className="container">
      <h1>About</h1>
      <nav className="breadcrumbs">
        <ol>
          <li><a href="index.html">Home</a></li>
          <li className="current">About</li>
        </ol>
      </nav>
    </div>
  </div>{/* End Page Title */}
  {/* About Section */}
  <section id="about" className="about section">
    <div className="container">
      <div className="row gy-4" data-aos="fade-up" data-aos-delay={100}>
        <div className="col-lg-5">
          <img src="assets/img/teacher.jpg" className="img-fluid" alt="Maritime Education" />
        </div>
        <div className="col-lg-7" data-aos="fade-up" data-aos-delay={200}>
          <div className="content">
            <h3>Empowering Future Mariners</h3>
            <p>
              Prepare for a dynamic career at sea with world-class maritime education. Our programs focus on fostering expertise in navigation, safety, and sustainability, ensuring you are ready for the challenges of the maritime industry.
            </p>
            <ul>
              <li><i className="bi bi-check-circle-fill" /> <span>Comprehensive training in navigation and seamanship.</span></li>
              <li><i className="bi bi-check-circle-fill" /> <span>Hands-on experience with advanced maritime technology.</span></li>
              <li><i className="bi bi-check-circle-fill" /> <span>Focus on safety, sustainability, and global maritime standards.</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>{/* /About Section */}
  {/* Why Us Section */}
  <section id="why-us" className="why-us section">
    <div className="container">
      <div className="row g-0">
        <div className="col-xl-5 img-bg" data-aos="fade-up" data-aos-delay={100}>
          <img src="assets/img/Merchant Navy Uniform.jpg" alt />
        </div>
        <div className="col-xl-7 slides position-relative" data-aos="fade-up" data-aos-delay={200}>
          <div className="swiper init-swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="item">
                  <h3 className="mb-3">Embark on a Career at Sea</h3>
                  <h4 className="mb-3">Comprehensive training to prepare future mariners for the challenges of the maritime industry.</h4>
                  <p>Our Maritime Education and Training Center offers cutting-edge programs in navigation, engineering, and safety management. Learn from seasoned professionals and gain hands-on experience with advanced maritime technology to ensure a successful and fulfilling career at sea.</p>
                </div>
              </div>{/* End slide item */}
              <div className="swiper-slide">
                <div className="item">
                  <h3 className="mb-3">Innovative Maritime Programs</h3>
                  <h4 className="mb-3">Stay ahead with state-of-the-art facilities and globally recognized certifications.</h4>
                  <p>Our center is equipped with advanced simulators, modern classrooms, and practical training vessels. We offer internationally accredited courses that meet the highest industry standards, ensuring you are equipped to navigate the complexities of the maritime world.</p>
                </div>
              </div>{/* End slide item */}
              <div className="swiper-slide">
                <div className="item">
                  <h3 className="mb-3">Dedicated to Excellence</h3>
                  <h4 className="mb-3">Fostering leadership and professionalism in maritime education.</h4>
                  <p>We are committed to nurturing a new generation of maritime leaders. Our programs emphasize safety, sustainability, and innovation, providing you with the skills to excel in both traditional and emerging maritime careers.</p>
                </div>
              </div>{/* End slide item */}
              <div className="swiper-slide">
                <div className="item">
                  <h3 className="mb-3">Join a Global Network</h3>
                  <h4 className="mb-3">Connect with a thriving community of maritime professionals worldwide.</h4>
                  <p>Be part of an extensive alumni network and industry partnerships that open doors to global opportunities. Whether you aspire to captain a vessel or manage maritime operations, our center provides the foundation for a successful maritime career.</p>
                </div>
              </div>{/* End slide item */}
            </div>
            <div className="swiper-pagination" />
          </div>
          <div className="swiper-button-prev" />
          <div className="swiper-button-next" />
        </div>
      </div>
    </div>
  </section>{/* /Why Us Section */}
  {/* Call To Action Section */}
  {/* /Call To Action Section */}
  {/* Team Section */}
  {/* /Team Section */}
</main>


        </>
    );
};