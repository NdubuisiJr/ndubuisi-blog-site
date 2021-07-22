import { FunctionComponent } from 'react';

interface articleCardProps {
    title: string;
    date: string;
    description: string;
    link: string;
    icon: string;
    imageUrl: string;
    author: string;
}

export const ArticleCard: FunctionComponent<articleCardProps> = ({
    title,
    date,
    description,
    link,
    icon,
    imageUrl,
    author,
}) => {
    return (
        <section className="article-card">
            <img src={imageUrl} alt="articleCardImage" />
            <div>
                <i className={`icon fas ${icon}`}></i>
                <div className="details">
                    <h2 className="title">{title}</h2>
                    <span>{date}</span>
                </div>
                <p>{description}</p>
                <div className="bottom">
                    <em>- {author}</em>
                    <a href={link}>Read More</a>
                </div>
            </div>
        </section>
    );
};
