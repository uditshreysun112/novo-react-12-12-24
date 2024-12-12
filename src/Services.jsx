import React from "react";

export const Services = () =>{
    return(
        <>
<main className="main">
  {/* Page Title */}
  <div className="page-title dark-background" data-aos="fade" style={{height: 450, backgroundImage: 'url(assets/img/services-page-title-bg.jpg)'}}>
    <div className="container">
      <h1>Services</h1>
      <nav className="breadcrumbs">
        <ol>
          <li><a href="index.html">Home</a></li>
          <li className="current">Services</li>
        </ol>
      </nav>
    </div>
  </div>{/* End Page Title */}
  {/* Services Section */}
  <section id="services" className="services section">
    {/* Section Title */}
    <div className="container section-title" data-aos="fade-up">
      <h2>Our Maritime Services</h2>
      <p>Comprehensive training and education for the maritime industry, preparing you for a successful career at sea.</p>
    </div>{/* End Section Title */}
    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay={100}>
          <div className="icon flex-shrink-0"><i className="bi bi-briefcase" style={{color: '#f57813'}} /></div>
          <div>
            <h4 className="title">Maritime Training Programs</h4>
            <p className="description">Our comprehensive programs prepare students for various roles in the maritime industry, including navigation, engineering, and ship management.</p>
            <a href="#" className="readmore stretched-link"><span>Learn More</span><i className="bi bi-arrow-right" /></a>
          </div>
        </div>{/* End Service Item */}
        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay={200}>
          <div className="icon flex-shrink-0"><i className="bi bi-card-checklist" style={{color: '#15a04a'}} /></div>
          <div>
            <h4 className="title">Certification and Licensing</h4>
            <p className="description">We offer internationally recognized certifications and licenses, ensuring that our graduates meet the highest standards of the maritime industry.</p>
            <a href="#" className="readmore stretched-link"><span>Learn More</span><i className="bi bi-arrow-right" /></a>
          </div>
        </div>{/* End Service Item */}
        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay={300}>
          <div className="icon flex-shrink-0"><i className="bi bi-bar-chart" style={{color: '#d90769'}} /></div>
          <div>
            <h4 className="title">Simulation Training</h4>
            <p className="description">State-of-the-art simulators are used to train students in navigation, ship handling, and emergency response, enhancing their practical skills.</p>
            <a href="#" className="readmore stretched-link"><span>Learn More</span><i className="bi bi-arrow-right" /></a>
          </div>
        </div>{/* End Service Item */}
        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay={400}>
          <div className="icon flex-shrink-0"><i className="bi bi-binoculars" style={{color: '#15bfbc'}} /></div>
          <div>
            <h4 className="title">Maritime Safety</h4>
            <p className="description">We emphasize safety training, including survival at sea, fire safety, and first aid, to ensure the well-being of all maritime personnel.</p>
            <a href="#" className="readmore stretched-link"><span>Learn More</span><i className="bi bi-arrow-right" /></a>
          </div>
        </div>{/* End Service Item */}
        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay={500}>
          <div className="icon flex-shrink-0"><i className="bi bi-brightness-high" style={{color: '#f5cf13'}} /></div>
          <div>
            <h4 className="title">Marine Engineering</h4>
            <p className="description">Our marine engineering courses prepare students to maintain and operate the machinery aboard ships, ensuring smooth sailing and minimal downtime.</p>
            <a href="#" className="readmore stretched-link"><span>Learn More</span><i className="bi bi-arrow-right" /></a>
          </div>
        </div>{/* End Service Item */}
        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay={600}>
          <div className="icon flex-shrink-0"><i className="bi bi-calendar4-week" style={{color: '#1335f5'}} /></div>
          <div>
            <h4 className="title">Job Placement Assistance</h4>
            <p className="description">We provide job placement support to our graduates, connecting them with leading maritime companies and vessels worldwide.</p>
            <a href="#" className="readmore stretched-link"><span>Learn More</span><i className="bi bi-arrow-right" /></a>
          </div>
        </div>{/* End Service Item */}
      </div>
    </div>
  </section>
  <section id="services" className="services section">
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
  {/* Service Cards Section */}
  <section id="service-cards" className="service-cards section">
    <div className="container-fluid">
      <div className="row gy-4">
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
          <div className="card-item">
            <div className="row">
              <div className="col-xl-5">
                <div className="card-bg"><img src="assets/img/cards-1.jpg" alt /></div>
              </div>
              <div className="col-xl-7 d-flex align-items-center">
                <div className="card-body">
                  <h4 className="card-title">Eligendi omnis sunt veritatis.</h4>
                  <p>Fuga in dolorum et iste et culpa. Commodi possimus nesciunt modi voluptatem placeat deleniti adipisci. Cum delectus doloribus non veritatis. Officia temporibus illo magnam. Dolor eos et.</p>
                </div>
              </div>
            </div>
          </div>
        </div>{/* End Card Item */}
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
          <div className="card-item">
            <div className="row">
              <div className="col-xl-5">
                <div className="card-bg"><img src="assets/img/cards-5.jpg" alt /></div>
              </div>
              <div className="col-xl-7 d-flex align-items-center">
                <div className="card-body">
                  <h4 className="card-title">Possimus ut sed velit assumenda</h4>
                  <p>Sunt deserunt maiores voluptatem autem est rerum perferendis rerum blanditiis. Est laboriosam qui iste numquam laboriosam voluptatem architecto. Est laudantium sunt at quas aut hic. Eum dignissimos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>{/* End Card Item */}
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={300}>
          <div className="card-item">
            <div className="row">
              <div className="col-xl-5">
                <div className="card-bg"><img src="assets/img/cards-3.jpg" alt /></div>
              </div>
              <div className="col-xl-7 d-flex align-items-center">
                <div className="card-body">
                  <h4 className="card-title">Error beatae dolor inventore aut</h4>
                  <p>Dicta porro nobis. Velit cum in. Nesciunt dignissimos enim molestiae facilis numquam quae quaerat ipsam omnis. Neque debitis ipsum at architecto officia laboriosam odit. Ut sunt temporibus nulla culpa.</p>
                </div>
              </div>
            </div>
          </div>
        </div>{/* End Card Item */}
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={400}>
          <div className="card-item">
            <div className="row">
              <div className="col-xl-5">
                <div className="card-bg"><img src="assets/img/cards-4.jpg" alt /></div>
              </div>
              <div className="col-xl-7 d-flex align-items-center">
                <div className="card-body">
                  <h4 className="card-title">Expedita voluptas ut ut nesciunt</h4>
                  <p>Aut est quidem doloremque voluptatem magnam quis excepturi vero quia. Eum eos doloremque architecto illo at beatae dolore. Fugiat suscipit et sint ratione dolores. Aut aliquid ea dolores libero nobis.</p>
                </div>
              </div>
            </div>
          </div>
        </div>{/* End Card Item */}
      </div>
    </div>
  </section>{/* /Service Cards Section */}
  {/* Testimonials Section */}
  <section id="testimonials" className="testimonials section">
    {/* Section Title */}
    <div className="container section-title" data-aos="fade-up">
      <h2>Testimonials</h2>
      <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
    </div>{/* End Section Title */}
    <div className="container" data-aos="fade-up" data-aos-delay={100}>
      <div className="swiper init-swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="testimonial-item">
              <div className="stars">
                <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
              </div>
              <p>
                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
              </p>
              <div className="profile mt-auto">
                <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt />
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
              </div>
            </div>
          </div>{/* End testimonial item */}
          <div className="swiper-slide">
            <div className="testimonial-item">
              <div className="stars">
                <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
              </div>
              <p>
                Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
              </p>
              <div className="profile mt-auto">
                <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt />
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
              </div>
            </div>
          </div>{/* End testimonial item */}
          <div className="swiper-slide">
            <div className="testimonial-item">
              <div className="stars">
                <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
              </div>
              <p>
                Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
              </p>
              <div className="profile mt-auto">
                <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt />
                <h3>Jena Karlis</h3>
                <h4>Store Owner</h4>
              </div>
            </div>
          </div>{/* End testimonial item */}
          <div className="swiper-slide">
            <div className="testimonial-item">
              <div className="stars">
                <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
              </div>
              <p>
                Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
              </p>
              <div className="profile mt-auto">
                <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt />
                <h3>Matt Brandon</h3>
                <h4>Freelancer</h4>
              </div>
            </div>
          </div>{/* End testimonial item */}
          <div className="swiper-slide">
            <div className="testimonial-item">
              <div className="stars">
                <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
              </div>
              <p>
                Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
              </p>
              <div className="profile mt-auto">
                <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt />
                <h3>John Larson</h3>
                <h4>Entrepreneur</h4>
              </div>
            </div>
          </div>{/* End testimonial item */}
        </div>
        <div className="swiper-pagination" />
      </div>
    </div>
  </section>{/* /Testimonials Section */}
</main>

        </>
    );
};