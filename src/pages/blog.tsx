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
                        title="Server side Rendered React with node and typescript"
                        date="01/08/2021"
                        icon="fa-home"
                        link="/server-side-rendered-react-wth-node-and-typescript"
                        imageUrl="images/ssr-react-ts.png"
                        author="Ndubuisi Jr Chukuigwe"
                        description="Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Saepe numquam rerum, aliquid laborum culpa
                            odio et natus, necessitatibus doloribus eligendi
                            voluptas eius dolore maxime libero enim quam quos
                            eum praesentium."
                    />
                </section>
                <section className="row row-2">
                    <ArticleCard
                        title="Server side Rendered React with node and typescript"
                        date="01/08/2021"
                        icon="fa-home"
                        link="/server-side-rendered-react-wth-node-and-typescript"
                        imageUrl="images/ssr-react-ts.png"
                        author="Ndubuisi Jr Chukuigwe"
                        description="Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Saepe numquam rerum, aliquid laborum culpa
                            odio et natus, necessitatibus doloribus eligendi
                            voluptas eius dolore maxime libero enim quam quos
                            eum praesentium."
                    />
                </section>
                <section className="row row-1">
                    <ArticleCard
                        title="Server side Rendered React with node and typescript"
                        date="01/08/2021"
                        icon="fa-home"
                        link="/server-side-rendered-react-wth-node-and-typescript"
                        imageUrl="images/ssr-react-ts.png"
                        author="Ndubuisi Jr Chukuigwe"
                        description="Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Saepe numquam rerum, aliquid laborum culpa
                            odio et natus, necessitatibus doloribus eligendi
                            voluptas eius dolore maxime libero enim quam quos
                            eum praesentium."
                    />
                </section>
                <section className="row row-2"></section>
                <section className="row row-1"></section>
                <section className="row row-2"></section>
            </section>
            <Footer />
        </section>
    );
};
