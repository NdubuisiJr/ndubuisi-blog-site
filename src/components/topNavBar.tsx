import { FunctionComponent } from "react";

export const TopNavBar : FunctionComponent = () => {
    return (
        <header>
            <a href="#" className="logo">
                <img src="images/nd-avatar.JPG" alt=""/>
                <h6>ND Junior Blog</h6>
            </a>
            <ul className="navigation">
                <li><a className="active" href="index.html">Home</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <ul className="social-media">
                <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                <li><a href="#"><i className="fab fa-github"></i></a></li>
                <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            </ul>
        </header>
    )
};