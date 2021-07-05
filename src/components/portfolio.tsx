import { FunctionComponent } from 'react';

export const Portfolio: FunctionComponent = () => {
    return (
        <section className="portfolio">
            <div className="title">
                <h2>My Portfolio</h2>
                <hr />
            </div>
            <p>
                Below are projects that I have worked on and more that I am
                working on
            </p>
            <div className="projects">
                <div className="project">SMS</div>
                <div className="project">SMS</div>
                <div className="project">SMS</div>
                <div className="project">SMS</div>
                <div className="project">SMS</div>
                <div className="project">SMS</div>
            </div>
        </section>
    );
};
