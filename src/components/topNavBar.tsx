import { FunctionComponent } from 'react';

export const TopNavBar: FunctionComponent = () => {
    return (
        <header>
            <a href="/" className="logo">
                <img src="images/nd-avatar.png" alt="" />
                <h6>Ndubuisi Junior</h6>
            </a>
            <ul className="navigation">
                <li>
                    <a className="active" href="/">
                        Home
                    </a>
                </li>
                <li>
                    <a href="/blog">Blog</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
            <ul className="social-media">
                <li>
                    <a href="https://facebook.com/ndubuisijunior">
                        <i className="fab fa-facebook"></i>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/ndubuisijr">
                        <i className="fab fa-github"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/ndubuisi-jr-chukuigwe-278417145/">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/ndubuisijr">
                        <i className="fab fa-twitter"></i>
                    </a>
                </li>
            </ul>
        </header>
    );
};
