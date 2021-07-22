import { FunctionComponent } from 'react';
import { ArticleCard } from '../components/articleCard';
import { TopNavBar } from '../components/topNavBar';

export const Blog: FunctionComponent = () => {
    return (
        <div className="container">
            <TopNavBar />
            <div className="wrapper">
                <div className="center-line">
                    <a href="#" className="scroll-icon">
                        <i className="fas fa-caret-up"></i>
                    </a>
                </div>
                <div className="row row-1">
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
                </div>
                <div className="row row-2">
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
                </div>
                <div className="row row-1">
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
                </div>
                <div className="row row-2"></div>
                <div className="row row-1"></div>
                <div className="row row-2"></div>
            </div>
        </div>
    );
};
