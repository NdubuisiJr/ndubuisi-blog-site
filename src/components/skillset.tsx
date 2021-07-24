import { FunctionComponent } from 'react';

export const Skillset: FunctionComponent = () => {
    return (
        <section className="skillset" id="skills-section">
            <header className="title">
                <h2>Major Skillset</h2>
                <hr />
            </header>
            <article className="skills">
                <div className="skill">
                    <div className="info">
                        <span>C#</span>
                    </div>
                    <div className="progress-bar Csharp">
                        <span></span>
                    </div>
                </div>
                <div className="skill">
                    <div className="info">
                        <span>React</span>
                    </div>
                    <div className="progress-bar react">
                        <span></span>
                    </div>
                </div>
                <div className="skill">
                    <div className="info">
                        <span>HTML</span>
                    </div>
                    <div className="progress-bar html">
                        <span></span>
                    </div>
                </div>
                <div className="skill">
                    <div className="info">
                        <span>Node.js</span>
                    </div>
                    <div className="progress-bar node">
                        <span></span>
                    </div>
                </div>
                <div className="skill">
                    <div className="info">
                        <span>CSS</span>
                    </div>
                    <div className="progress-bar css">
                        <span></span>
                    </div>
                </div>
                <div className="skill">
                    <div className="info">
                        <span>Javascript/Typescript</span>
                    </div>
                    <div className="progress-bar js">
                        <span></span>
                    </div>
                </div>
                <div className="skill">
                    <div className="info">
                        <span>Xamarin</span>
                    </div>
                    <div className="progress-bar xamarin">
                        <span></span>
                    </div>
                </div>
                <div className="skill">
                    <div className="info">
                        <span>AWS</span>
                    </div>
                    <div className="progress-bar aws">
                        <span></span>
                    </div>
                </div>
            </article>
        </section>
    );
};
