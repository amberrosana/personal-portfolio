import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isNavOpen, setIsNavOpen] = useState(false);
  
  // Set the desired fixed skin:
  const defaultBodySkin = 'dark'; 

  // Utility to handle section change on link click
  const handleNavLinkClick = (e, sectionId) => {
    e.preventDefault();
    setActiveSection(sectionId);
    setIsNavOpen(false); 

  const navLinks = [
    { id: 'home', icon: 'fa fa-home', name: 'Home' },
    { id: 'about', icon: 'fa fa-user', name: 'About' },
    { id: 'hobbies', icon: 'fa fa-paint-brush', name: 'Hobbies' }, 
    { id: 'projects', icon: 'fa fa-code', name: 'Projects' }, 
    { id: 'contact', icon: 'fa fa-comments', name: 'Contact' },
  ];

  return (
    <>
      {/* Main Container */}
      <div className="main-container">
        {/* Aside */}
        <div className={`aside ${isNavOpen ? 'open' : ''}`}>
          {/* Nav Toggler Btn */}
          <div className="nav-toggler" onClick={() => setIsNavOpen(!isNavOpen)}>
            <span />
          </div>
          <div className="aside-inner">
            {/* Logo */}
            <div className="logo">
              <a href="#">Amber</a>
            </div>
            {/* Nav */}
            <ul className="nav">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={activeSection === link.id ? 'active' : ''}
                    onClick={(e) => handleNavLinkClick(e, link.id)}
                  >
                    <i className={link.icon} /> {link.name}
                  </a>
                </li>
              ))}
            </ul>
            {/* Copyright */}
            <div className="copyright-text">© 2020 The WebShala Template</div>
          </div>
        </div>
        {/* Aside End */}

        {/* Main Content */}
        <div className="main-content">
          {/* Home Section */}
          <section className={`home section ${activeSection === 'home' ? 'active' : ''}`} id="home">
            <div className="container">
              <div className="intro">
                <img src="images/me.png" alt="profile" className="shadow-dark" />
                <h1>Amber Rosana</h1>
                <span className="iTyped" />
                <div className="social-links">
                  <a href="#"> <i className="fa fa-twitter" /> </a>
                  <a href="#"> <i className="fa fa-facebook" /> </a>
                  <a href="#"> <i className="fa fa-instagram" /> </a>
                  <a href="#"> <i className="fa fa-linkedin" /> </a>
                </div>
              </div>
            </div>
          </section>
          {/* Home Section End */}

          {/* About Section */}
          <section className={`about section ${activeSection === 'about' ? 'active' : ''}`} id="about">
            <div className="container">
              <div className="row">
                <div className="section-title padd-15"> <h2>About Me</h2> </div>
              </div>
              <div className="row">
                <div className="about-content padd-15">
                  <div className="row">
                    <div className="about-text padd-15">
                      <h3>I'm Upvesh Kumar and <span>Web Developer</span></h3>
                      <p>Hi! My name is Upvesh Kumar. I am a Web Developer, and I'm very passionate and dedicated to my work. With 10 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration. </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="personal-info padd-15">
                      <div className="row">
                        <div className="info-item padd-15"> <p>Birthday : <span>5 June 1992</span></p> </div>
                        <div className="info-item padd-15"> <p>Age : <span>28</span></p> </div>
                        <div className="info-item padd-15"> <p>Website : <span>www.domain.com</span></p> </div>
                        <div className="info-item padd-15"> <p>Email : <span>info@gmail.com</span></p> </div>
                        <div className="info-item padd-15"> <p>Degree : <span>M.Tech</span></p> </div>
                        <div className="info-item padd-15"> <p>Phone : <span>+91 8800 000 000</span></p> </div>
                        <div className="info-item padd-15"> <p>City : <span>Mumbai</span></p> </div>
                        <div className="info-item padd-15"> <p>Freelance : <span>Available</span></p> </div>
                      </div>
                      <div className="row">
                        <div className="buttons padd-15">
                          <a href="#" className="btn"> Download Cv </a>
                          <a href="#contact" className="btn hire-me" onClick={(e) => handleNavLinkClick(e, 'contact')}> Hire me </a>
                        </div>
                      </div>
                    </div>
                    <div className="skills padd-15">
                      {/* ... Skills content ... (omitted for brevity) */}
                      <div className="row">
                        <div className="skill-item padd-15">
                          <h5>Javascript</h5>
                          <div className="progress">
                            <div className="progress-in" style={{ width: "76%" }} />
                            <div className="skill-porcent">76%</div>
                          </div>
                        </div>
                        <div className="skill-item padd-15">
                          <h5>Wordpress</h5>
                          <div className="progress">
                            <div className="progress-in" style={{ width: "90%" }} />
                            <div className="skill-porcent">90%</div>
                          </div>
                        </div>
                        <div className="skill-item padd-15">
                          <h5>Java</h5>
                          <div className="progress">
                            <div className="progress-in" style={{ width: "80%" }} />
                            <div className="skill-porcent">80%</div>
                          </div>
                        </div>
                        <div className="skill-item padd-15">
                          <h5>Bootstrap</h5>
                          <div className="progress">
                            <div className="progress-in" style={{ width: "60%" }} />
                            <div className="skill-porcent">60%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ... Education and Experience content ... (omitted for brevity) */}
                  <div className="row">
                    <div className="education padd-15">
                      <h3 className="title">Education</h3>
                      <div className="row">
                        <div className="timeline-box padd-15">
                          <div className="timeline shadow-dark">
                            <div className="timeline-item"> <div className="circle-dot" /> <h6 className="timeline-date"> <i className="fa fa-calendar" /> 2013 - 2015 </h6> <h4 className="timeline-title"> Master In Computer Science </h4> <p className="timeline-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. </p></div>
                            <div className="timeline-item"> <div className="circle-dot" /> <h6 className="timeline-date"> <i className="fa fa-calendar" /> 2011 - 2013 </h6> <h4 className="timeline-title"> Studied At Delhi University </h4> <p className="timeline-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. </p></div>
                            <div className="timeline-item"> <div className="circle-dot" /> <h6 className="timeline-date"> <i className="fa fa-calendar" /> 2008 - 2011 </h6> <h4 className="timeline-title"> Bachelor Degree </h4> <p className="timeline-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. </p></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="experience padd-15">
                      <h3 className="title">Experience</h3>
                      <div className="row">
                        <div className="timeline-box padd-15">
                          <div className="timeline shadow-dark">
                            <div className="timeline-item"> <div className="circle-dot" /> <h6 className="timeline-date"> <i className="fa fa-calendar" /> 2013 - 2015 </h6> <h4 className="timeline-title"> Backend Developer </h4> <p className="timeline-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. </p></div>
                            <div className="timeline-item"> <div className="circle-dot" /> <h6 className="timeline-date"> <i className="fa fa-calendar" /> 2011 - 2013 </h6> <h4 className="timeline-title"> Frontend Developer </h4> <p className="timeline-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. </p></div>
                            <div className="timeline-item"> <div className="circle-dot" /> <h6 className="timeline-date"> <i className="fa fa-calendar" /> 2008 - 2011 </h6> <h4 className="timeline-title"> Graphic Designer </h4> <p className="timeline-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. </p></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* About Section End */}

          {/* Hobbies Section (Formerly Service) */}
          <section className={`service section ${activeSection === 'hobbies' ? 'active' : ''}`} id="hobbies">
            <div className="container">
              <div className="row">
                <div className="section-title padd-15"> <h2>Hobbies</h2> </div>
              </div>
              <div className="row">
                <div className="service-item padd-15"> <div className="service-item-inner"> <div className="icon"> <i className="fa fa-laptop" /> </div> <h4>Web Design</h4> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum.</p> </div> </div>
                <div className="service-item padd-15"> <div className="service-item-inner"> <div className="icon"> <i className="fa fa-photo" /> </div> <h4>Photography</h4> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum.</p> </div> </div>
                <div className="service-item padd-15"> <div className="service-item-inner"> <div className="icon"> <i className="fa fa-code" /> </div> <h4>Web Development</h4> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum.</p> </div> </div>
                <div className="service-item padd-15"> <div className="service-item-inner"> <div className="icon"> <i className="fa fa-film" /> </div> <h4>Video Editing</h4> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum.</p> </div> </div>
                <div className="service-item padd-15"> <div className="service-item-inner"> <div className="icon"> <i className="fa fa-rocket" /> </div> <h4>Seo Optimization</h4> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum.</p> </div> </div>
                <div className="service-item padd-15"> <div className="service-item-inner"> <div className="icon"> <i className="fa fa-paint-brush" /> </div> <h4>Logo Design</h4> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum.</p> </div> </div>
              </div>
            </div>
          </section>
          {/* Hobbies Section End */}

          {/* Projects Section (Formerly Blog) */}
          <section className={`blog section ${activeSection === 'projects' ? 'active' : ''}`} id="projects">
            <div className="container">
              <div className="row">
                <div className="section-title padd-15"> <h2>Latest Projects</h2> </div>
              </div>
              <div className="row">
                
                {/* Project Item 1 */}
                <div className="blog-item padd-15"> 
                  <div className="blog-item-inner shadow-dark"> 
                    {/* 💡 Anchor tag added around the image/date block */}
                    <a href="#project-link-1" target="_blank" rel="noopener noreferrer" className="project-link-overlay">
                      <div className="blog-img"> 
                        <img src="images/blog/1.jpg" alt="Responsive Web Design Project" /> 
                        <div className="blog-date">4 jun 2020</div> 
                      </div> 
                    </a>
                    <div className="blog-info"> 
                      <h4 className="blog-title">Responsive Web Design</h4> 
                      <p className="blog-description"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas. </p> 
                      <p className="blog-tags"> Tags : <a href="#">Html</a> , <a href="#">css</a> </p> 
                    </div> 
                  </div> 
                </div>
                
                {/* Project Item 2 */}
                <div className="blog-item padd-15"> 
                  <div className="blog-item-inner shadow-dark"> 
                    {/* 💡 Anchor tag added around the image/date block */}
                    <a href="#project-link-2" target="_blank" rel="noopener noreferrer" className="project-link-overlay">
                      <div className="blog-img"> 
                        <img src="images/blog/2.jpg" alt="Creative Slideshow Project" /> 
                        <div className="blog-date">4 jun 2020</div> 
                      </div> 
                    </a>
                    <div className="blog-info"> 
                      <h4 className="blog-title">Creative Slideshow</h4> 
                      <p className="blog-description"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas. </p> 
                      <p className="blog-tags"> Tags : <a href="#">Html</a> , <a href="#">Javascript</a> </p> 
                    </div> 
                  </div> 
                </div>
                
                {/* Project Item 3 */}
                <div className="blog-item padd-15"> 
                  <div className="blog-item-inner shadow-dark"> 
                    {/* 💡 Anchor tag added around the image/date block */}
                    <a href="#project-link-3" target="_blank" rel="noopener noreferrer" className="project-link-overlay">
                      <div className="blog-img"> 
                        <img src="images/blog/3.jpg" alt="Image Gallery Lightbox Project" /> 
                        <div className="blog-date">4 jun 2020</div> 
                      </div> 
                    </a>
                    <div className="blog-info"> 
                      <h4 className="blog-title">Image Gallery Lightbox</h4> 
                      <p className="blog-description"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas. </p> 
                      <p className="blog-tags"> Tags : <a href="#">Javascript</a> </p> 
                    </div> 
                  </div> 
                </div>
                
              </div>
            </div>
          </section>
          {/* Projects Section End */}

          {/* Contact Section */}
          <section className={`contact section ${activeSection === 'contact' ? 'active' : ''}`} id="contact">
            <div className="container">
              <div className="row">
                <div className="section-title padd-15"> <h2>Contact Me</h2> </div>
              </div>
              {/* Updated Contact Info Items */}
              <div className="row">
                {/* Call Me */}
                <div className="contact-info-item padd-15"> 
                  <div className="icon"> <i className="fa fa-phone fa-2x" /> </div> 
                  <h4>Call Me On</h4> 
                  <p>09491911579</p> 
                </div>
                
                {/* Location */}
                <div className="contact-info-item padd-15"> 
                  <div className="icon"> <i className="fa fa-map-marker fa-2x" /> </div> 
                  <h4>Location</h4> 
                  <p>Add Street, Sampaloc, Apalit, Pampanga, Philippines</p> 
                </div>
                
                {/* Email */}
                <div className="contact-info-item padd-15"> 
                  <div className="icon"> <i className="fa fa-envelope fa-2x" /> </div> 
                  <h4>Email</h4> 
                  <p>rosanaamber@gmail.com</p> 
                </div>

                {/* Twitter */}
                <div className="contact-info-item padd-15"> 
                  <div className="icon"> 
                    <a 
                      href="#" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-icon-link" 
                    >
                      <i className="fa fa-twitter fa-2x" /> 
                    </a>
                  </div> 
                  <h4>Twitter</h4> 
                  <p>rosanaamber</p>
                </div>
                
                {/* Facebook */}
                <div className="contact-info-item padd-15"> 
                  <div className="icon"> 
                    <a 
                      href="https://web.facebook.com/amberprincess.rosana" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-icon-link" 
                    >
                      <i className="fa fa-facebook fa-2x" /> 
                    </a>
                  </div> 
                  <h4>Facebook</h4> 
                  <p>amberprincess.rosana</p>
                </div>
                
                {/* GitHub (Using fa-github) */}
                <div className="contact-info-item padd-15"> 
                  <div className="icon"> 
                    <a 
                      href="#" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-icon-link" 
                    >
                      <i className="fa fa-github fa-2x" /> 
                    </a>
                  </div> 
                  <h4>GitHub</h4> 
                  <p>rosanaamber</p>
                </div>
              </div>
              {/* End of Contact Info Items */}

            </div>
          </section>
          {/* Contact Section End */}
        </div>
        {/* Main Content End */}
      </div>
      {/* Main Container End */}

      {/* Lightbox - Retained but removed inline JS */}
      <div className="lightbox">
        <div className="lightbox-content">
          <div className="lightbox-close">×</div>
          <img src="" alt="" className="lightbox-img" />
          <div className="lightbox-caption">
            <div className="caption-text" />
            <div className="caption-counter" />
          </div>
        </div>
        <div className="lightbox-controls">
          <div className="prev-item"> <i className="fa fa-angle-left" /> </div>
          <div className="next-item"> <i className="fa fa-angle-right" /> </div>
        </div>
      </div>
      {/* Lightbox End */}
    </>
  );
}

export default App;