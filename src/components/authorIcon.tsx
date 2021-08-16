import { FunctionComponent } from 'react';

interface AuthorData {
    profileLink?: string;
    imageUrl: string;
    name: string;
    width?: string;
}

export const AuthorIcon: FunctionComponent<AuthorData> = ({
    profileLink,
    imageUrl,
    name,
    width,
}) => {
    return (
        <a href={profileLink} className="logo">
            <img src={imageUrl} style={{ width: `${width}px` }} alt="" />
            <h6 style={{ textAlign: 'center' }}>{name}</h6>
        </a>
    );
};
