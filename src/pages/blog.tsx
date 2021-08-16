import { FunctionComponent } from 'react';
import { ArticleCard } from '../components/articleCard';
import { Footer } from '../components/footer';
import { TopNavBar } from '../components/topNavBar';

export const Blog: FunctionComponent = () => {
    return (
        <section className="container">
            <TopNavBar />
            <section className="wrapper">
                <header className="center-line">
                    <a href="#" className="scroll-icon">
                        <i className="fas fa-caret-up"></i>
                    </a>
                </header>
                <section className="row row-1">
                    <ArticleCard
                        title="Setting up Server side Rendered React application with node and typescript"
                        date="01/08/2021"
                        icon="fa-home"
                        link="/blog/setup-server-side-rendered-react-with-node-and-typescript"
                        imageUrl="images/ssr-react-ts.png"
                        author="Ndubuisi Jr Chukuigwe"
                        description="React is an excellent frontend framework that provides a lot of flexibility 
                        for developing client side applications. We are going to explore how to setup a React 
                        project for server side rendering using the excellent Node with typescript instead of 
                        the default javascript."
                    />
                </section>
                <section className="row row-2">
                    <ArticleCard
                        title="Containerizing ASP.net core web API using docker"
                        date="01/08/2021"
                        icon="fa-laptop"
                        link="/blog/containerizing-aspnet-core-web-api-using-docker"
                        imageUrl="images/asp-docker.png"
                        author="Ndubuisi Jr Chukuigwe"
                        description="Containerization is increasingly becoming the quickest and most effective 
                        means of distributing websites and web APIs. Asp.net core is an excellent framework for 
                        developing server side applications including server side rendered websites and web APIs. 
                        We will explore how to properly containerize web APIs developed with ASP.net core using 
                        docker containers"
                    />
                </section>
                <section className="row row-1">
                    <ArticleCard
                        title="Charting in Xamarin.Forms using SkiaChart.Forms"
                        date="01/08/2021"
                        icon="fa-lock"
                        link="/blog/charting-in-xamarin-forms-using-skiachart"
                        imageUrl="images/xamarin-skiachart.png"
                        author="Ndubuisi Jr Chukuigwe"
                        description="SkiaChart.Forms is a simple xamarin.Forms chart library, built on top of 
                        the skiasharp.views.forms library. This library is developed with engineering and statistics 
                        in mind. We will review how to utilize this library in your Xamarin.Forms applications."
                    />
                </section>
                <section className="row row-2">
                    <ArticleCard
                        title="Obtaining and setting up SSL certificate for a containerized nginx application"
                        date="01/08/2021"
                        icon="fa-lock"
                        link="/blog/setup-ssl-certificate-for-containerized-nginx-application"
                        imageUrl="images/ssl-nginx.png"
                        author="Ndubuisi Jr Chukuigwe"
                        description="Encryption in today's web cannot to over emphasized. Obtaining an SSL 
                        certificate is an important proceedure in ensuring a safe and protected website. We are going to 
                        see how to obtain SSL certificate using let's encrypt's certbot's official docker image, and utilize 
                        it on a containerized nginx webisite"
                    />
                </section>
                <section className="row row-1">
                    <ArticleCard
                        title="Expectations for HNG internship"
                        date="16/08/2021"
                        icon="fa-book"
                        link="/blog/expections-for-hng-internship"
                        imageUrl="images/hngi.PNG"
                        author="Ndubuisi Jr Chukuigwe"
                        description="My number one goal for HNGi is to connect deeply with the software development ecosystem in Nigeria and across Africa. The current HNG internship boosts of over 7 thousand participants. I'm very sure there are future industry leaders, tech evangelists, CEOs and change ministers in the HNGi workspace right now."
                    />
                </section>
                <section className="row row-2"></section>
            </section>
            <Footer />
        </section>
    );
};
