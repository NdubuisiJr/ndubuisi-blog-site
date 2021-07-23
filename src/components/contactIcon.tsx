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
        <div className='contact-icon'>
            <i className={`contact-icon fas ${icon}`}></i>
            <div>
                {subject}: {value}
            </div>
        </div>
    );
};
