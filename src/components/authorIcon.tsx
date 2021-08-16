import { FunctionComponent } from 'react';

interface AuthorData {
    profileLink?: string;
    imageUrl: string;
    name: string;
}

export const AuthorIcon: FunctionComponent<AuthorData> = ({
    profileLink,  imageUrl, name
}) => {
    return (
        <a href={profileLink} className="logo">
            <img src={imageUrl} alt="" />
            <h6>{name}</h6>
        </a>
    );
};
