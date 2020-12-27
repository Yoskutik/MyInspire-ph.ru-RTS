import React, { FC, useRef, useState } from 'react';
import { Picture, PictureProps } from '@components';
import { ArrowIcon } from '@components/icons';

interface LocationPictureProps extends PictureProps {
    active: boolean;
}

interface LocationProps {
    title: string;
    address: {
        location: string;
        href: string;
    },
    locations: string[];
    photosDir: string;
    photosList: string[];
    timeNeeded: number;
    duration: number;
}

const LocationPicture: FC<LocationPictureProps> = props => {
    const [active, setActive] = useState(props.active);

    return (
        <Picture {...props} cls={`small-image ${active ? 'active' : ''}`} onClick={() => {
            setActive(!active);
            props.onClick?.();
        }} />
    );
};

export const Location: FC<LocationProps> = props => {
    const [mainPhoto, setMainPhoto] = useState(props.photosList[0]);
    const ref = useRef(null);

    const onSmallImageLoad = (): void => {
        const height = `${ref.current.find('.location__photos_main').clientHeight}px`;
        ref.current.find('.location__photos_extra--photos').style.maxHeight = height;
    };

    let duration: string = null;
    if (props.duration === 1) {
        duration = 'Идеален для Фотопрогулки mini';
    } else if (props.duration === 2) {
        duration = `При заказе Фотопрогулки mini локации проходятся не в полном объёме, 
            поэтому если есть в списке локаций ваш фаворит, то предупредите меня об этом заранее.`;
    }

    return (
        <div className="location" ref={ref}>
            <div className="location__photos">
                <Picture cls="location__photos_main" alt={props.title} src={mainPhoto.replace(/m.jpg$/, '.jpg')} />
                <div className="location__photos_extra">
                    <ArrowIcon cls="arrow arrow-up" size={12} fill="#fff" />
                    <div className="location__photos_extra--photos">
                        {props.photosList.map((ph, i) => (
                            <LocationPicture src={ph} key={ph} alt={props.title} lazy={i > 3} active={i === 0}
                                     onClick={() => setMainPhoto(ph)} onLoad={onSmallImageLoad}/>
                        ))}
                    </div>
                    <ArrowIcon cls="arrow arrow-down" size={12} fill="#fff" />
                </div>
            </div>
            <div className="location__info">
                <h2 className="location__info_title">{props.title}</h2>
                Локации маршрута:
                <ul className="location__info_list">
                    {props.locations.map(l => <li key={Math.random()}>{l}</li>)}
                </ul>
                <p>{`Время на перемещение: ${props.timeNeeded} мин.`}</p>
                {duration}
                <p className="location__info_address">
                    Адрес:
                    {' '}
                    <a href={`https://www.google.com/maps/${props.address.href}`}
                       target="_blank"
                       rel="noreferrer">
                        {props.address.location}
                    </a>
                </p>
            </div>
        </div>
    );
};
