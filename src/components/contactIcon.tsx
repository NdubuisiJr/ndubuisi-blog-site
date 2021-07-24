import { FunctionComponent } from 'react';

interface ContactIconProps {
    icon: string;
    subject: string;
    value: string;
}

export const ContactIcon: FunctionComponent<ContactIconProps> = ({
    icon,
    subject,
    value,
}) => {
    return (
        <article className="contact-icon">
            <i className={`contact-icon fas ${icon}`}></i>
            <div>
                {subject}: {value}
            </div>
        </article>
    );
};
