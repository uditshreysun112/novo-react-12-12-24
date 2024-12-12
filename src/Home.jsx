import React from "react";

export const Home = () => {
    
    return (
        <>
<main className="main">
  {/* Hero Section */}
  <section id="hero" className="hero section dark-background">
    <img src="assets/img/boat-3480914_1920.jpg" alt data-aos="fade-in" />
    <div className="container">
      <div className="row">
        <div className="col-xl-4">
          <h1 data-aos="fade-up">Set Sail for Knowledge</h1>
          <blockquote data-aos="fade-up" data-aos-delay={100}>
            <p>Embark on a journey of maritime excellence. Learn the skills, values, and knowledge to navigate the
              seas and lead the future of the maritime industry.</p>
          </blockquote>
          <div className="d-flex" data-aos="fade-up" data-aos-delay={200}>
            <a href="#about" className="btn-get-started">Explore Programs</a>
            <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle" /><span>Watch
                Demo</span></a>
          </div>
        </div>
      </div>
    </div>
  </section>{/* /Hero Section */}
  {/* Why Us Section */}
  <section id="why-us" className="why-us section">
    <div className="container">
      <div className="row g-0">
        <div className="col-xl-5 img-bg" data-aos="fade-up" data-aos-delay={100}>
          <img src="assets/img/Happy mariner- Main image.png" alt />
        </div>
        <div className="col-xl-7 slides position-relative" data-aos="fade-up" data-aos-delay={200}>
          <div className="swiper init-swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="item">
                  <h3 className="mb-3">Navigate Your Maritime Future</h3>
                  <h4 className="mb-3">Unlock opportunities in maritime education and global shipping industries.</h4>
                  <p>Prepare to lead in the ever-evolving maritime world. Our programs focus on advanced navigation,
                    sustainability, and leadership skills to ensure you're ready for any challenge the seas may bring.
                  </p>
                </div>
              </div>{/* End slide item */}
              <div className="swiper-slide">
                <div className="item">
                  <h3 className="mb-3">Chart a Course to Excellence</h3>
                  <h4 className="mb-3">Empowering students with the tools to thrive in maritime operations and beyond.
                  </h4>
                  <p>Gain expertise in maritime logistics, safety protocols, and environmental stewardship. Our
                    education equips you to excel in both traditional and modern maritime roles with confidence.</p>
                </div>
              </div>{/* End slide item */}
              <div className="swiper-slide">
                <div className="item">
                  <h3 className="mb-3">Explore the Depths of Maritime Knowledge</h3>
                  <h4 className="mb-3">InMaritime Educationtive learning designed to shape the leaders of tomorrow’s
                    maritime industry.
                  </h4>
                  <p>From cutting-edge technology to timeless seamanship, our curriculum bridges the gap between
                    heritage and inMaritime Educationtion, ensuring a well-rounded education in all things maritime.
                  </p>
                </div>
              </div>{/* End slide item */}
              <div className="swiper-slide">
                <div className="item">
                  <h3 className="mb-3">Sustainability and Leadership at Sea</h3>
                  <h4 className="mb-3">Equipping you to steer a sustainable and prosperous maritime future.</h4>
                  <p>Learn to lead with integrity and inMaritime Educationtion. Our programs emphasize eco-friendly
                    practices and
                    strong leadership to help you make a lasting impact in the maritime industry.</p>
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
  {/* Services Section */}
  <section id="services" className="services section">
    {/* Section Title */}
    <div className="container section-title" data-aos="fade-up">
      <h2>Our Services</h2>
      <p>Empowering the next generation of maritime professionals with cutting-edge knowledge and practical expertise.
      </p>
    </div>{/* End Section Title */}
    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay={100}>
          <div className="icon flex-shrink-0"><i className="fa fa-ship" style={{color: '#f57813'}} /></div>
          <div>
            <h4 className="title">Maritime Navigation Training</h4>
            <p className="description">Learn advanced navigation techniques, chart plotting, and route optimization to
              master the art of safe and efficient maritime travel.</p>
            <a href="#" className="readmore stretched-link"><span>Learn More</span><i className="bi bi-arrow-right" /></a>
          </div>
        </div>
        {/* End Service Item */}
        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay={200}>
          <div className="icon flex-shrink-0"><i className="bi bi-globe" style={{color: '#15a04a'}} /></div>
          <div>
            <h4 className="title">Global Maritime Logistics</h4>
            <p className="description">Understand the complexities of global trade, shipping logistics, and supply chain
              management to excel in the maritime industry.</p>
            <a href="#" className="readmore stretched-link"><span>Learn More</span><i className="bi bi-arrow-right" /></a>
          </div>
        </div>{/* End Service Item */}
        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay={300}>
          <div className="icon flex-shrink-0"><i className="bi bi-compass" style={{color: '#d90769'}} /></div>
          <div>
            <h4 className="title">Marine Safety and Emergency Training</h4>
            <p className="description">Gain critical skills in maritime safety, including emergency response, crisis
              management, and lifesaving procedures.</p>
            <a href="#" className="readmore stretched-link"><span>Learn More</span><i className="bi bi-arrow-right" /></a>
          </div>
        </div>{/* End Service Item */}
        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay={400}>
          <div className="icon flex-shrink-0"><i className="bi bi-sunset" style={{color: '#15bfbc'}} /></div>
          <div>
            <h4 className="title">Sustainability in Maritime Operations</h4>
            <p className="description">Learn about eco-friendly practices and technologies that help minimize
              environmental impact in the maritime sector.</p>
            <a href="#" className="readmore stretched-link"><span>Learn More</span><i className="bi bi-arrow-right" /></a>
          </div>
        </div>{/* End Service Item */}
        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay={500}>
          <div className="icon flex-shrink-0"><i className="bi bi-people" style={{color: '#f5cf13'}} /></div>
          <div>
            <h4 className="title">Leadership and Crew Management</h4>
            <p className="description">Develop essential leadership skills to effectively manage ship crews and foster a
              safe, productive onboard environment.</p>
            <a href="#" className="readmore stretched-link"><span>Learn More</span><i className="bi bi-arrow-right" /></a>
          </div>
        </div>{/* End Service Item */}
        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay={600}>
          <div className="icon flex-shrink-0"><i className="bi bi-gear" style={{color: '#1335f5'}} /></div>
          <div>
            <h4 className="title">Marine Engineering and Technology</h4>
            <p className="description">Dive into the world of marine engineering and learn about the latest technologies
              driving inMaritime Educationtion in the maritime industry.</p>
            <a href="#" className="readmore stretched-link"><span>Learn More</span><i className="bi bi-arrow-right" /></a>
          </div>
        </div>{/* End Service Item */}
      </div>
    </div>
  </section>
  {/* /Services Section */}
  {/* Call To Action Section */}
  <section id="call-to-action" className="call-to-action section dark-background">
    <img src="assets/img/superyattch-bg.jpg" alt />
    <div className="container">
      <div className="row justify-content-center" data-aos="zoom-in" data-aos-delay={100}>
        <div className="col-xl-10">
          <div className="text-center">
            <h3>Do you Want to join marchant<br /> navy? Call @ 123-4567-8888</h3>
            <p>Embark on a journey to become a maritime leader. Whether you're aspiring to navigate the seas, engineer
              advanced vessels, or lead global shipping operations, our programs provide the knowledge and skills to
              set you on the right course.</p>
            <a className="cta-btn" href="#">Contact Now</a>
          </div>
        </div>
      </div>
    </div>
  </section>{/* /Call To Action Section */}
  {/* Features Section */}
  <section id="features" className="features section">
    <div className="container">
      <div className="row">
        <div className="col-lg-7" data-aos="fade-up" data-aos-delay={100}>
          <h3 className="mb-0">Essential Features for</h3>
          <h3>Maritime Education</h3>
          <div className="row gy-4">
            <div className="col-md-6">
              <div className="icon-list d-flex">
                <i className="bi bi-eye" style={{color: '#ff8b2c'}} />
                <span>Advanced Marine Navigation</span>
              </div>
            </div>{/* End Icon List Item*/}
            <div className="col-md-6">
              <div className="icon-list d-flex">
                <i className="bi bi-infinity" style={{color: '#5578ff'}} />
                <span>Seamless Global Logistics Training</span>
              </div>
            </div>{/* End Icon List Item*/}
            <div className="col-md-6">
              <div className="icon-list d-flex">
                <i className="bi bi-mortarboard" style={{color: '#e80368'}} />
                <span>Comprehensive Crew Management</span>
              </div>
            </div>{/* End Icon List Item*/}
            <div className="col-md-6">
              <div className="icon-list d-flex">
                <i className="bi bi-star" style={{color: '#ffa76e'}} />
                <span>Excellence in Maritime Safety</span>
              </div>
            </div>{/* End Icon List Item*/}
            <div className="col-md-6">
              <div className="icon-list d-flex">
                <i className="bi bi-x-diamond" style={{color: '#11dbcf'}} />
                <span>Eco-Friendly Shipping Solutions</span>
              </div>
            </div>{/* End Icon List Item*/}
            <div className="col-md-6">
              <div className="icon-list d-flex">
                <i className="bi bi-camera-video" style={{color: '#4233ff'}} />
                <span>Interactive Virtual Training</span>
              </div>
            </div>{/* End Icon List Item*/}
            <div className="col-md-6">
              <div className="icon-list d-flex">
                <i className="bi bi-brightness-high" style={{color: '#29cc61'}} />
                <span>Marine Technology InMaritime Educationtion</span>
              </div>
            </div>{/* End Icon List Item*/}
            <div className="col-md-6">
              <div className="icon-list d-flex">
                <i className="bi bi-activity" style={{color: '#ff5828'}} />
                <span>Dynamic Problem-Solving Skills</span>
              </div>
            </div>{/* End Icon List Item*/}
          </div>
        </div>
        <div className="col-lg-5 position-relative" data-aos="zoom-out" data-aos-delay={200}>
          <div className="phone-wrap">
            <img src="assets/img/iphone view.jpeg" alt="Ship Image" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
    <div className="details">
      <div className="container">
        <div className="row">
          <div className="col-md-6" data-aos="fade-up" data-aos-delay={300}>
            <h4>Explore Maritime Mobile App</h4>
            <p>Expand your horizons with specialized training in navigation, safety, and leadership, preparing you for
              a thriving maritime career.</p>
            <a href="#about" className="btn-get-started">Get Started</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* /Features Section */}
  {/* Recent Posts Section */}
  <section id="recent-posts" className="recent-posts section">
    {/* Section Title */}
    <div className="container section-title" data-aos="fade-up">
      <h2>Recent Maritime Insights</h2>
    </div>{/* End Section Title */}
    <div className="container">
      <div className="row gy-5">
        <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay={200}>
          <div className="post-box">
            <div className="post-img"><img style={{height: 230}} src="assets/img/blog/hero-bg.jpg" className="img-fluid" alt /></div>
            <div className="meta">
              <span className="post-date">Tue, December 12</span>
              <span className="post-author"> / Capt. Julia Parker</span>
            </div>
            <h3 className="post-title">Navigating the Future: Emerging Trends in Maritime Education</h3>
            <p>Explore the latest advancements and trends shaping maritime training and education in the modern era...</p>
            <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right" /></a>
          </div>
        </div>
        <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay={400}>
          <div className="post-box">
            <div className="post-img"><img style={{height: 230}} src="assets/img/blog/marine-life-2.jpg" className="img-fluid" alt /></div>
            <div className="meta">
              <span className="post-date">Fri, September 05</span>
              <span className="post-author"> / Dr. Mario Douglas</span>
            </div>
            <h3 className="post-title">Sustainability at Sea: Green Practices in Maritime Training</h3>
            <p>Discover how maritime institutions are incorporating sustainable practices into their curriculums...</p>
            <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right" /></a>
          </div>
        </div>
        <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay={600}>
          <div className="post-box">
            <div className="post-img"><img style={{height: 230}} src="assets/img/blog/marine-life-1.jpg" className="img-fluid" alt /></div>
            <div className="meta">
              <span className="post-date">Tue, July 27</span>
              <span className="post-author"> / Lisa Hunter</span>
            </div>
            <h3 className="post-title">The Role of Simulation in Modern Maritime Training</h3>
            <p>Learn how cutting-edge simulation technologies are revolutionizing training for seafarers...</p>
            <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right" /></a>
          </div>
        </div>
        <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay={600}>
          <div className="post-box">
            <div className="post-img"><img style={{height: 230}} src="assets/img/blog/crew1.jpg" className="img-fluid" alt /></div>
            <div className="meta">
              <span className="post-date">Tue, September 16</span>
              <span className="post-author"> / Dr. Mario Douglas</span>
            </div>
            <h3 className="post-title">Bridging the Skills Gap: Preparing Future Mariners</h3>
            <p>Find out how maritime academies are addressing the industry's growing need for skilled professionals...</p>
            <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right" /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* /Recent Posts Section */}
</main>
        </>
    );
};