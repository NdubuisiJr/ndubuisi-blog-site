import { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';
import { TopNavBar } from '../components/topNavBar';

interface BlogData {
    imageUrl: string;
    title: string;
    author: {
        name: string;
        imageUrl: string;
    };
    paragraphs: [
        {
            links?: [
                {
                    key: string;
                    title: string;
                    url: string;
                }
            ];
            list?: [
                {
                    title: string;
                    link: string;
                }
            ];
            imageUrl?: string;
            title?: string;
            text?: string;
        }
    ];
}

export const BlogPage: FunctionComponent<BlogData> = ({
    imageUrl,
    title,
    author,
    paragraphs,
}) => {
    const id = useParams();
    return (
        <section className="blog-page">
            <TopNavBar />
        </section>
    );
};
