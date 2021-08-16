import { FunctionComponent } from 'react';
import { AuthorIcon } from './authorIcon';

export const TopNavBar: FunctionComponent = () => {
    return (
        <header className="header">
            <AuthorIcon
                imageUrl="/images/nd-avatar.png"
                name="Ndubuisi"
                profileLink="/"
            />
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
        </header>
    );
};
