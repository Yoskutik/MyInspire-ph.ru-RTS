import { useToasts } from 'react-toast-notifications';
import React, { FC } from 'react';
import { copyToClipboard } from '@utils';
import { CopyIcon } from '@components/icons';

const email = 'tatiana.mix.1910@gmail.com';
const tel = '+7 (999) 515-42-17';

export const Links: FC = () => {
    const { addToast } = useToasts();

    const onCopyClick = (str: string, message: string): void => {
        copyToClipboard(str);
        addToast(message, {
            appearance: 'info',
            autoDismiss: true,
        });
    };

    return (
        <div className="contacts__links">
            <p className="contacts__links_item">
                E-mail:
                <a className="email" itemProp="email" href={`mailto:${email}`}>
                    {email}
                </a>
                <button className="contacts__links_copy" type="button"
                        onClick={() => onCopyClick(email, 'Адрес электронной почты был скопирован')}>
                    <CopyIcon size={16} />
                </button>
            </p>
            <p className="contacts__links_item">
                Телефон:
                <a className="tel" href={`tel:${tel}`} itemProp="telephone">
                    {tel}
                </a>
                <button className="contacts__links_copy" type="button"
                        onClick={() => onCopyClick(tel, 'Номер телефона был скопирован')}>
                    <CopyIcon size={16} />
                </button>
            </p>
            <p className="contacts__links_item">Для связи в WhatsApp, Telegram</p>
        </div>
    );
};
