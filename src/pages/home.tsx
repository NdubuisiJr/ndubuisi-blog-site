
import { FunctionComponent } from 'react';

export const Home : FunctionComponent = () => {
    return (
        <>    <div className="banner"> 
        <div className="content">
            <h3>Hello, I'm</h3>
            <h2>Ndubuisi Jr Blog</h2>
            <p>I'm a Full Stack +Developer</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                explicabo! Perspiciatis, expedita quos. Hic animi nobis sit
                earum quisquam quae amet ad voluptates, itaque consequuntur a, 
                neque non in porro. explicabo! Perspiciatis, expedita quos. Hic animi nobis sit
                neque non in porro. explicabo! Perspiciatis, expedita quos. Hic animi nobis sit
                neque non in porro. explicabo! Perspiciatis, expedita quos.
            </p>
            <a href="#skills-section">Read More</a>
            <a href="#contact-section">Contact Me</a>
        </div>
        <img className="image" src="images/nd-avatar.JPG" alt="Ndubuisi Jr Photo"/>
    </div>
                <main>
            <section className="skillset" id="skills-section">
                <div className="title">
                    <h2>My Skillset</h2>
                    <hr/>
                </div>
                <div className="skills">
                    <div className="skill">
                        <div className="info"><span>HTML</span></div>
                        <div className="progress-bar html"><span></span></div>
                    </div>
                    <div className="skill">
                        <div className="info"><span>CSS</span></div>
                        <div className="progress-bar css"><span></span></div>
                    </div>
                    <div className="skill">
                        <div className="info"><span>Javascript</span></div>
                        <div className="progress-bar js"><span></span></div>
                    </div>
                    <div className="skill">
                        <div className="info"><span>C#</span></div>
                        <div className="progress-bar Csharp"><span></span></div>
                    </div>
                    <div className="skill">
                        <div className="info"><span>Node.js</span></div>
                        <div className="progress-bar node"><span></span></div>
                    </div>
                    <div className="skill">
                        <div className="info"><span>MYSQL</span></div>
                        <div className="progress-bar mysql"><span></span></div>
                    </div>
                    <div className="skill">
                        <div className="info"><span>MongoDB</span></div>
                        <div className="progress-bar mongo"><span></span></div>
                    </div>
                    <div className="skill">
                        <div className="info"><span>Xmarin</span></div>
                        <div className="progress-bar xamarin"><span></span></div>
                    </div>
                    <div className="skill">
                        <div className="info"><span>React</span></div>
                        <div className="progress-bar xamarin"><span></span></div>
                    </div>
                    <div className="skill">
                        <div className="info"><span>Vuejs</span></div>
                        <div className="progress-bar xamarin"><span></span></div>
                    </div>
                </div>
            </section>
            <section className="portfolio">
                <div className="title">
                    <h2>My Portfolio</h2>
                    <hr/>
                </div>
                <p>Below are projects that I have worked on and more that I am working on</p>
                <div className="projects">
                    <div className="project">SMS</div>
                    <div className="project">SMS</div>
                    <div className="project">SMS</div>
                    <div className="project">SMS</div>
                    <div className="project">SMS</div>
                    <div className="project">SMS</div>
                </div>
            </section>
            <section className="contact" id="contact-section">
                <div className="title">
                    <h2>Contact Me</h2>
                    <hr/>
                </div>
                <p>If you have any questions, suggestions, comments, and or you need me to work on something, send me a message</p>
                <form action="#S" method="post">
                    <div className="form-group">
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" name="firstName" id="firstName" placeholder="First Name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" name="lastName" id="lastName" placeholder="Last Name"/>
                    </div>
                <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" placeholder="Email"/>
                </div>
                <div className="form-group">                 
                        <label htmlFor="phoneNumber">Phone Number:</label>
                        <input type="text" name="phoneNumber" id="phoneNumber" placeholder="Phone Number"/>
                </div>
                <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" ></textarea>
                </div>
                <div className="btn-container">
                        <input type="submit" value="Send"/>
                </div>
                </form>
            </section>
        </main>
        <footer>
            <div className="footer-contents">
            <div className="logo">
                <a href="#" className="logo">
                    <img src="images/nd-avatar.JPG" alt=""/>
                    <h6>ND Junior Blog</h6>
                </a>
            </div>
            <div className="quick-links">
                <h4>Quick Links</h4>
                <ul className="navigation">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="social-media">
                <h4>Let's connect </h4>
                <ul className="social-media">
                    <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fab fa-github"></i></a></li>
                    <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                </ul>
            </div>
        </div>
            <p>Copyright © 2021 ND Junior Blog. All rights reserved </p>
        </footer>
        </>
    );
};