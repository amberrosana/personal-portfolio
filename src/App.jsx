import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Utility to handle section change on link click
  const handleNavLinkClick = (e, sectionId) => {
    e.preventDefault();
    setActiveSection(sectionId);
    setIsNavOpen(false); 
  }

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
                
                {/* Hobby Item: Web Design (UI/UX & Figma) */}
                <div className="service-item padd-15"> 
                  <div className="service-item-inner"> 
                    <div className="icon"> <i className="fa fa-magic" /> </div> 
                    <h4>Web Design (UI/UX)</h4> 
                    <p>I'm currently exploring the fundamentals of UI/UX design, particularly through hands-on practice using Figma to create and prototype user interfaces. </p> 
                  </div> 
                </div>
                
                {/* Hobby Item: Music (Playing & Creating) */}
                <div className="service-item padd-15"> 
                  <div className="service-item-inner"> 
                    <div className="icon"> <i className="fa fa-music" /> </div> 
                    <h4>Music</h4> 
                    <p>I enjoy listening to music, playing the guitar, and occasionally creating my own songs. It's a great outlet for stress relief and creative expression.</p> 
                  </div> 
                </div>
                
                {/* Hobby Item: Video Editing */}
                <div className="service-item padd-15"> 
                  <div className="service-item-inner"> 
                    <div className="icon"> <i className="fa fa-film" /> </div> 
                    <h4>Video Editing</h4> 
                    <p>Recently, I've developed an interest in video editing using tools like CapCut. While I'm still a beginner, I find the process to be highly engaging and enjoyable.</p> 
                  </div> 
                </div>
                
                {/* Hobby Item: Voice Acting/Narration */}
                <div className="service-item padd-15"> 
                  <div className="service-item-inner"> 
                    <div className="icon"> <i className="fa fa-microphone" /> </div> 
                    <h4>Voice Acting & Narration</h4> 
                    <p>I enjoy reading and performing narration scripts and have been asked to provide voiceovers for videos. This hobby helps me practice my public speaking and fluency.</p> 
                  </div> 
                </div>
                
                {/* Hobby Item: Capture the Flag (CTF) */}
                <div className="service-item padd-15"> 
                  <div className="service-item-inner"> 
                    <div className="icon"> <i className="fa fa-flag-checkered" /> </div> 
                    <h4>Cybersecurity CTFs</h4> 
                    <p>I participate in online Capture the Flag (CTF) games, which involve solving challenges in areas like Cryptography, OSINT, AI LLM, and Forensics.</p> 
                  </div> 
                </div>
                
                {/* Hobby Item: Creative Writing (Poetry) */}
                <div className="service-item padd-15"> 
                  <div className="service-item-inner"> 
                    <div className="icon"> <i className="fa fa-pencil-square-o" /> </div> 
                    <h4>Creative Writing</h4> 
                    <p>I like to write poetry as a way to relieve stress and continually improve my overall writing skills.</p> 
                  </div> 
                </div>
                
              </div>
            </div>
          </section>
          {/* Hobbies Section End */}

          {/* Projects Section (Formerly Blog) */}
          <section className={`blog section ${activeSection === 'projects' ? 'active' : ''}`} id="projects">
            <div className="container">
              <div className="row">
                <div className="section-title padd-15"> <h2>Projects</h2> </div>
              </div>
              <div className="row">
                
                {/* Project Item 1: Letters of Sumire */}
                <div className="blog-item padd-15"> 
                  <div className="blog-item-inner shadow-dark"> 
                    <a href="https://github.com/amberrosana-lvcc/note-app" target="_blank" rel="noopener noreferrer" className="project-link-overlay">
                      <div className="blog-img"> 
                        <img src="images/projects/noteapp.png" alt="Letters of Sumire Web App" /> 
                        <div className="blog-date">Web App</div> 
                      </div> 
                    </a>
                    <div className="blog-info"> 
                      <h4 className="blog-title">
                        Letters of Sumire
                        <a href="https://github.com/amberrosana-lvcc/note-app" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px' }}>
                          <i className="fa fa-external-link" style={{ color: '#4CAF50', fontSize: '16px' }} />
                        </a>
                      </h4> 
                      <p className="blog-description"> A note-taking web application using Laravel, HTML, and Tailwind CSS. </p> 
                    </div> 
                  </div> 
                </div>
                
                {/* Project Item 2: Notes App (2025) */}
                <div className="blog-item padd-15"> 
                  <div className="blog-item-inner shadow-dark"> 
                    <a href="https://github.com/amberrosana-lvcc/notes" target="_blank" rel="noopener noreferrer" className="project-link-overlay">
                      <div className="blog-img"> 
                        <img src="images/projects/notes.png" alt="Laravel Notes App" /> 
                        <div className="blog-date">Web App</div> 
                      </div> 
                    </a>
                    <div className="blog-info"> 
                      <h4 className="blog-title">
                        Notes App
                        <a href="https://github.com/amberrosana-lvcc/notes" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px' }}>
                          <i className="fa fa-external-link" style={{ color: '#4CAF50', fontSize: '16px' }} />
                        </a>
                      </h4> 
                      <p className="blog-description"> A secure Laravel note application featuring user authentication and scaffolding built using Breeze. </p> 
                    </div> 
                  </div> 
                </div>
                
                {/* Project Item 3: Ibong Adarna: Ang Paglalakbay */}
                <div className="blog-item padd-15"> 
                  <div className="blog-item-inner shadow-dark"> 
                    <a href="https://github.com/7078-cj/Ibong_Adarna" target="_blank" rel="noopener noreferrer" className="project-link-overlay">
                      <div className="blog-img"> 
                        <img src="images/projects/ibongadarna.png" alt="Ibong Adarna Game Web App" /> 
                        <div className="blog-date">Web Game</div> 
                      </div> 
                    </a>
                    <div className="blog-info"> 
                      <h4 className="blog-title">
                        Ibong Adarna: Ang Paglalakbay
                        <a href="https://github.com/7078-cj/Ibong_Adarna" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px' }}>
                          <i className="fa fa-external-link" style={{ color: '#4CAF50', fontSize: '16px' }} />
                        </a>
                      </h4> 
                      <p className="blog-description"> Educational game web application for Grade 7 student (Role: Frontend Developer using React & Tailwind)</p> 
                    </div> 
                  </div> 
                </div>

                {/* Project Item 4: Pijii */}
                <div className="blog-item padd-15"> 
                  <div className="blog-item-inner shadow-dark"> 
                    <a href="https://github.com/LVCCWAD/Pijii" target="_blank" rel="noopener noreferrer" className="project-link-overlay">
                      <div className="blog-img"> 
                        <img src="images/projects/pijii.png" alt="Pijii Task Manager Web App" /> 
                        <div className="blog-date">Web App</div> 
                      </div> 
                    </a>
                    <div className="blog-info"> 
                      <h4 className="blog-title">
                        Pijii - Task Manager
                        <a href="https://github.com/LVCCWAD/Pijii" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px' }}>
                          <i className="fa fa-external-link" style={{ color: '#4CAF50', fontSize: '16px' }} />
                        </a>
                      </h4> 
                      <p className="blog-description"> Simple Task Manager Web App built with Laravel, React, Inertia, and Tailwind CSS. (Role: Lead Backend Developer) </p> 
                    </div> 
                  </div> 
                </div>

                {/* Figma Item 1: NyomNyan */}
                <div className="blog-item padd-15"> 
                  <div className="blog-item-inner shadow-dark"> 
                    <a href="https://www.figma.com/proto/ePzdNYDOUc80DFZByv9bit/PRACTICAL_ROSANA_BSIS2?page-id=1%3A2&node-id=1-7&p=f&m=draw&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A7&t=o16mlE8YRKMCPoIH-1" target="_blank" rel="noopener noreferrer" className="project-link-overlay">
                      <div className="blog-img"> 
                        <img src="images/projects/nyomnyan.png" alt="NyomNyan Mobile Food Ordering App Figma Design" /> 
                        <div className="blog-date">Figma Design</div> 
                      </div> 
                    </a>
                    <div className="blog-info"> 
                      <h4 className="blog-title">
                        NyomNyan - Mobile Food Ordering
                        <a href="https://www.figma.com/proto/ePzdNYDOUc80DFZByv9bit/PRACTICAL_ROSANA_BSIS2?page-id=1%3A2&node-id=1-7&p=f&m=draw&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A7&t=o16mlE8YRKMCPoIH-1" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px' }}>
                          <i className="fa fa-external-link" style={{ color: '#4CAF50', fontSize: '16px' }} />
                        </a>
                      </h4> 
                      <p className="blog-description"> A high-fidelity prototype of a mobile food ordering app, designed in Figma. </p> 
                    </div> 
                  </div> 
                </div>

                {/* Figma Item 2: Tastewise */}
                <div className="blog-item padd-15"> 
                  <div className="blog-item-inner shadow-dark"> 
                    <a href="https://www.figma.com/proto/41BLqX2m6mY0zCOTAMQl4n/Tastewise---HCI?page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2&scaling=contain&content-scaling=fixed&t=Cfm0Fcuky7MhXnbk-1" target="_blank" rel="noopener noreferrer" className="project-link-overlay">
                      <div className="blog-img"> 
                        <img src="images/projects/tastewise.png" alt="Tastewise AI Recipe Generator Figma Design" /> 
                        <div className="blog-date">Figma Design</div> 
                      </div> 
                    </a>
                    <div className="blog-info"> 
                      <h4 className="blog-title">
                        Tastewise
                        <a href="https://www.figma.com/proto/41BLqX2m6mY0zCOTAMQl4n/Tastewise---HCI?page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2&scaling=contain&content-scaling=fixed&t=Cfm0Fcuky7MhXnbk-1" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px' }}>
                          <i className="fa fa-external-link" style={{ color: '#4CAF50', fontSize: '16px' }} />
                        </a>
                      </h4> 
                      <p className="blog-description"> A conceptual AI-assisted recipe generator designed in Figma, tailored for people with illnesses and filterable by cost. (Lead UI/UX Designer) </p> 
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