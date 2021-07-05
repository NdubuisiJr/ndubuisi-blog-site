import { FunctionComponent } from 'react';

export const Banner: FunctionComponent = () => {
    return (
        <div className="banner">
            <div className="content">
                <h3>Hello, I'm</h3>
                <h2>Ndubuisi Jr Chukuigwe</h2>
                <span>I'm a Full Stack Software Developer</span>
                <p>
                    I help businesses and Individuals to develop highly
                    scalable, testable, and maintainable software solutions to
                    their everyday problem. I have great passion for writing
                    high quality code, following best practices while keeping
                    business goals and timelines in mind. You can view my skill
                    sets below
                </p>
                <a href="#skills-section">View Skillset</a>
                <a href="#contact-section">Contact Me</a>
            </div>
        </div>
    );
};
