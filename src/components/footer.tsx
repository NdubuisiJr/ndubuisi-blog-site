import { FunctionComponent } from 'react';

export const Footer: FunctionComponent = () => {
    return (
        <footer>
            <div className="footer-contents">
                <div className="logo">
                    <a href="#" className="logo">
                        <img src="images/nd-avatar.png" alt="" />
                        <h6>ND Junior Blog</h6>
                    </a>
                </div>
                <div className="quick-links">
                    <h4>Quick Links</h4>
                    <ul className="navigation">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="social-media">
                    <h4>Let's connect </h4>
                    <ul className="social-media">
                        <li>
                            <a href="#">
                                <i className="fab fa-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fab fa-github"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <p>Copyright © 2021 ND Junior Blog. All rights reserved </p>
        </footer>
    );
};