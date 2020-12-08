import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import pages from '../../../../../pages.json';
import './style.scss';

interface INav {
    visible: boolean;
}

export const Nav: FC<INav> = ({ visible }) => {
    const [documentTitle, setDocumentTitle] = useState<string>(null);

    useEffect(() => {
        documentTitle && (document.title = documentTitle);
    }, [documentTitle]);

    return (
        <div className="header__nav" itemScope itemType="http://schema.org/SiteNavigationElement"
             style={{ display: visible ? 'flex' : '' }}>
            {Object.keys(pages)
                .filter(key => Object.keys(pages[key]).includes('name'))
                .map(key => (
                    <Link to={key === 'home' ? '/' : `/${key}/`} key={Math.random()}
                          onClick={() => setDocumentTitle(pages[key].title)}>
                        <span>{pages[key].name}</span>
                    </Link>
                ))}
        </div>
    );
};
