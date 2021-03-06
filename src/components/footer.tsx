import { FunctionComponent } from 'react';

export const Footer: FunctionComponent = () => {
    return (
        <footer>
            <section className="footer-contents">
                <article className="logo">
                    <a href="#" className="logo">
                        <img src="images/nd-avatar.png" alt="logo" />
                        <h6>Ndubuisi Jr Chukuigwe</h6>
                    </a>
                </article>
                <article className="quick-links">
                    <h4>Quick Links</h4>
                    <ul className="navigation">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/blog">Blog</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </article>
                <article className="social-media">
                    <h4>Let's connect </h4>
                    <ul className="social-media">
                        <li>
                            <a
                                href="https://facebook.com/ndubuisijunior"
                                target="_blank"
                                rel="nofollow"
                            >
                                <i className="fab fa-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/ndubuisijr"
                                target="_blank"
                                rel="nofollow"
                            >
                                <i className="fab fa-github"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/ndubuisi-jr-chukuigwe-278417145/"
                                target="_blank"
                                rel="nofollow"
                            >
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://twitter.com/ndubuisijr"
                                target="_blank"
                                rel="nofollow"
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                    </ul>
                </article>
            </section>
            <p>Copyright ?? 2021 ND Junior Blog. All rights reserved </p>
        </footer>
    );
};
