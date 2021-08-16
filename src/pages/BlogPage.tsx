import { FunctionComponent } from 'react';
import { AuthorIcon } from '../components/authorIcon';
import { TopNavBar } from '../components/topNavBar';

interface LinkData {
    key: string;
    title: string;
    url: string;
}

interface ListData {
    title: string;
    link: string;
}

export interface BlogData {
    imageUrl: string;
    title: string;
    headerColor?: string;
    author: {
        name: string;
        imageUrl: string;
    };
    paragraphs: [
        {
            links?: [LinkData];
            list?: [ListData];
            imageUrl?: string;
            title?: string;
            texts?: string;
        }
    ];
}

export const BlogPage: FunctionComponent<BlogData> = ({
    imageUrl,
    title,
    author,
    paragraphs,
    headerColor,
}) => {
    return (
        <section className="blog-page">
            <TopNavBar />
            <section className="blog-page-content">
                <header
                    className="blog-header"
                    style={{ backgroundColor: headerColor }}
                >
                    <img src={imageUrl} alt="article-image" />
                    <h1>{title}</h1>
                    <h2>By</h2>
                    <AuthorIcon
                        imageUrl={author.imageUrl}
                        name={author.name}
                        width={'150'}
                    />
                </header>
                <section className='blog-section'>
                    {paragraphs.map((para, index) => {
                        return (
                            <article className="paragraph" key={index}>
                                <h1>{para.title}</h1>
                                <p>
                                    {combineTextAndLinks(
                                        para.texts,
                                        para.links
                                    )}
                                </p>
                                <ul>
                                    {para.list?.map((li) => {
                                        return (
                                            <li>
                                                <a
                                                    href={li.link}
                                                    target="_blank"
                                                    rel="nofollow"
                                                >
                                                    {li.title}
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </article>
                        );
                    })}
                </section>
            </section>
        </section>
    );
};

const combineTextAndLinks = (
    text: string | undefined,
    links: [LinkData] | undefined
): any[] => {
    if (!text) return [''];

    if (!links) return [text];

    let allParts = [];

    for (let index = 0; index < links.length; index++) {
        let link = links[index];
        let parts = text.split(link.key);
        for (let i = 0; i < parts.length; i += 2) {
            allParts.push(parts[i]);
            allParts.push(
                <a
                    className="match"
                    href={link.url}
                    target="_blank"
                    rel="nofollow"
                    key={i}
                >
                    {link.title}
                </a>
            );
            allParts.push(parts[i + 1]);
        }
    }
    return allParts;
};
