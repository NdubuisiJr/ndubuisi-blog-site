import { FunctionComponent } from 'react';

export const EmailContact: FunctionComponent = () => {
    return (
        <section className="contact" id="contact-section">
            <div className="title">
                <h2>Contact Me</h2>
                <hr />
            </div>
            <p>
                If you have any questions, suggestions, comments, and or you
                need me to work on something, send me a message
            </p>
            <form action="#S" method="post">
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder="First Name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        placeholder="Last Name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input
                        type="text"
                        name="phoneNumber"
                        id="phoneNumber"
                        placeholder="Phone Number"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message"></textarea>
                </div>
                <div className="btn-container">
                    <input type="submit" value="Send" />
                </div>
            </form>
        </section>
    );
};
