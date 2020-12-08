import React, { FC, Fragment, useState } from 'react';
import './style.scss';

export interface ILink {
    title: string,
    href: string,
}

interface IBlock {
    title: string,
    links: ILink[],
}

export const Block: FC<IBlock> = ({ title, links }) => {
    const [opened, setOpened] = useState(false);

    return (
        <div className={`footer__block ${opened ? 'opened' : ''}`}>
            <h4 className="footer__block_title" onClick={() => setOpened(!opened)}>
                <span className="footer__block_triangle" />
                {title}
            </h4>
            <div className="footer__block_body">
                {links.map((it, i) => (
                    <Fragment key={Math.random()}>
                        <a target="_blank" href={it.href} rel="noreferrer">
                            {it.title}
                        </a>
                        {(i < links.length - 1) && <br />}
                    </Fragment>
                ))}
            </div>
        </div>
    );
};
