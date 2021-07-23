import { FunctionComponent } from 'react';
import { ContactIcon } from '../components/contactIcon';
import { Footer } from '../components/footer';
import { TopNavBar } from '../components/topNavBar';

export const Contact: FunctionComponent = () => {
    return (
        <div className="contact-page">
            <TopNavBar />
            <div className="contact-page-content">
                <div className="form-container">
                    <form>
                        <h1>Contact me</h1>
                        <div className="name-email">
                            <div>
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="email"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="subject">Email Subject</label>
                            <input
                                type="text"
                                id="subject"
                                placeholder="subject"
                            />
                        </div>
                        <div>
                            <label htmlFor="message">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                cols={30}
                                rows={10}
                            ></textarea>
                        </div>
                        <button>Send Message</button>
                    </form>
                    <img src="images/ph-city.png" alt="ph map" />
                </div>
                <div className="contact-icons">
                    <ContactIcon
                        icon="fa-map-marker"
                        subject="Address"
                        value="Federal Housing Estate, Woji, Port Harcourt, Nigeria"
                    />
                    <ContactIcon
                        icon="fa-phone"
                        subject="Phone"
                        value="+234 8148428107"
                    />
                    <ContactIcon
                        icon="fa-envelope"
                        subject="Email"
                        value="ndubuisijrchukuigwe@gmail.com"
                    />
                    <ContactIcon
                        icon="fa-twitter"
                        subject="Twitter"
                        value="@ndubuisijr"
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
};
