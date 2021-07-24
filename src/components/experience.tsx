import { FunctionComponent } from 'react';

interface ExperienceProps {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
}

export const Experience: FunctionComponent<ExperienceProps> = ({
    title,
    description,
    imageUrl,
    link,
}) => {
    return (
        <div className="project">
            <h2>{title}</h2>
            <div className="project-content">
                <img src={imageUrl} alt="work-image" />
                <div>
                    <p>{description}</p>
                </div>
            </div>
            <a href={link} target="_blank">
                View details
            </a>
        </div>
    );
};
