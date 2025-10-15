import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isNavOpen, setIsNavOpen] = useState(false);

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
          <section className={`home section ${activeSection === 'home' ? 'active' : ''}`} id='home'>
            <div className="container">
              <div className="intro">
                <img src="images/me.png" alt="profile" className="shadow-dark" />
                <h1>Amber Rosana</h1>
                <span className="iTyped" />
                <div className="social-links">
                  <a href="https://x.com/amber_rosana" target="_blank" rel="noopener noreferrer"> 
                    <i className="fa fa-twitter" /> 
                  </a>
                  <a href="https://web.facebook.com/amberprincess.rosana" target="_blank" rel="noopener noreferrer"> 
                    <i className="fa fa-facebook" /> 
                  </a>
                  <a href="https://github.com/amberrosana" target="_blank" rel="noopener noreferrer"> 
                    <i className="fa fa-github" /> 
                  </a>
                  <a href="https://www.linkedin.com/in/amber-rosana-9b7004301/" target="_blank" rel="noopener noreferrer"> 
                    <i className="fa fa-linkedin" /> 
                  </a>
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
                      <h3>I'm Amber Rosana, a <span>Learner in Progress 🌱</span></h3>
                      <p>
                        I'm a third-year BS Information Systems student at La Verdad Christian College, interested in UI/UX design and front-end development. I'm currently focused on sharpening my skills in design, prototyping with Figma, and building modern interfaces with frameworks like React.
                        I am highly adaptable, always willing to learn, and I enjoy collaborating with others to help drive projects toward success. Besides tech, I'm passionate about music, the arts, and filmmaking.
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="personal-info padd-15">
                      <div className="row">
                        <div className="info-item padd-15"> <p>Birthday : <span>2 October 2005</span></p> </div>
                        <div className="info-item padd-15"> <p>Age : <span>20</span></p> </div>
                        <div className="info-item padd-15"> <p>Status : <span>Undergraduate Student</span></p> </div>
                        <div className="info-item padd-15"> <p>Email : <span>rosanaamber@gmail.com</span></p> </div>
                        <div className="info-item padd-15"> <p>Degree : <span>BS Information Systems</span></p> </div>
                        <div className="info-item padd-15"> <p>Phone : <span>+63 9491 911 579</span></p> </div>
                        <div className="info-item padd-15"> <p>Location : <span>Pampanga, Philippines</span></p> </div>
                        <div className="info-item padd-15"> <p>Freelance : <span>Available</span></p> </div>
                      </div>
                      <div className="row">
                        <div className="buttons padd-15">
                          <a href="CV-Rosana.pdf" 
                            download="CV-Rosana.pdf"
                            className="btn"> Download Cv </a>
                          <a href="#contact" className="btn hire-me" onClick={(e) => handleNavLinkClick(e, 'contact')}> Hire me </a>
                        </div>
                      </div>
                    </div>
                    <div className="skills padd-15">
                      <div className="row">
                        <div className="skill-item padd-15">
                          <h5>Critical Thinking & Problem Solving</h5>
                          <div className="progress">
                            <div className="progress-in" style={{ width: "90%" }} />
                            <div className="skill-porcent">90%</div>
                          </div>
                        </div>
                        <div className="skill-item padd-15">
                          <h5>Figma (UI/UX)</h5>
                          <div className="progress">
                            <div className="progress-in" style={{ width: "85%" }} />
                            <div className="skill-porcent">85%</div>
                          </div>
                        </div>
                        <div className="skill-item padd-15">
                          <h5>Web App Development (Laravel/React)</h5>
                          <div className="progress">
                            <div className="progress-in" style={{ width: "70%" }} />
                            <div className="skill-porcent">70%</div>
                          </div>
                        </div>
                        <div className="skill-item padd-15">
                          <h5>Ethical Hacking (CTFs)</h5>
                          <div className="progress">
                            <div className="progress-in" style={{ width: "60%" }} />
                            <div className="skill-porcent">60%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="education padd-15">
                      <h3 className="title">Education</h3>
                      <div className="row">
                        <div className="timeline-box padd-15">
                          <div className="timeline shadow-dark">
                            <div className="timeline-item"> <div className="circle-dot" /> <h6 className="timeline-date"> <i className="fa fa-calendar" /> 2023 - Present </h6> <h4 className="timeline-title"> BS in Information Systems </h4> <p className="timeline-text"> La Verdad Christian College – Apalit </p></div>
                            <div className="timeline-item"> <div className="circle-dot" /> <h6 className="timeline-date"> <i className="fa fa-calendar" /> 2021 - 2023 </h6> <h4 className="timeline-title"> Senior High School (STEM) </h4> <p className="timeline-text"> Information and Communications Technology High School </p></div>
                            <div className="timeline-item"> <div className="circle-dot" /> <h6 className="timeline-date"> <i className="fa fa-calendar" /> 2017 - 2021 </h6> <h4 className="timeline-title"> Junior High School </h4> <p className="timeline-text"> Information and Communications Technology High School </p></div>
                            <div className="timeline-item"> <div className="circle-dot" /> <h6 className="timeline-date"> <i className="fa fa-calendar" /> 2011 - 2017 </h6> <h4 className="timeline-title"> Primary Education </h4> <p className="timeline-text"> Pangatlan Elementary School </p></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="experience padd-15">
                      <h3 className="title">Experience & Achievements</h3>
                      <div className="row">
                        <div className="timeline-box padd-15">
                          <div className="timeline shadow-dark">
                            <div className="timeline-item"> <div className="circle-dot" /> <h6 className="timeline-date"> <i className="fa fa-calendar" /> Oct 2025 </h6> <h4 className="timeline-title"> 4th Regional HAU CTF - Champion </h4> <p className="timeline-text"> Collaborated as part of a four-member team to achieve first place in the regional Capture the Flag (CTF) cybersecurity competition. </p></div>
                            <div className="timeline-item"> <div className="circle-dot" /> <h6 className="timeline-date"> <i className="fa fa-calendar" /> 2025 </h6> <h4 className="timeline-title"> Lead Backend Developer - Pijii (Task Manager) </h4> <p className="timeline-text"> Led the backend development of a Task Manager web app built with Laravel, React, and Inertia. </p></div>
                            <div className="timeline-item"> <div className="circle-dot" /> <h6 className="timeline-date"> <i className="fa fa-calendar" /> 2025 </h6> <h4 className="timeline-title"> Frontend Developer - Ibong Adarna Game </h4> <p className="timeline-text"> Developed the frontend interface for an educational web game for Grade 7 students using React & Tailwind CSS. </p></div>
                            <div className="timeline-item"> <div className="circle-dot" /> <h6 className="timeline-date"> <i className="fa fa-calendar" /> May 2023 </h6> <h4 className="timeline-title"> ICT Week CTF Champion </h4> <p className="timeline-text"> Won the school's internal Capture the Flag (CTF) cybersecurity competition. </p></div>
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

          {/* Hobbies Section*/}
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

          {/* Projects Section*/}
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
                      href="https://x.com/amber_rosana" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-icon-link" 
                    >
                      <i className="fa fa-twitter fa-2x" /> 
                    </a>
                  </div> 
                  <h4>Twitter</h4> 
                  <p>amber_rosana</p>
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
                      href="https://github.com/amberrosana" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-icon-link" 
                    >
                      <i className="fa fa-github fa-2x" /> 
                    </a>
                  </div> 
                  <h4>GitHub</h4> 
                  <p>amberrosana</p>
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