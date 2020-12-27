import React, { FC } from 'react';
import { preprocessRequire } from '@utils';
import { Container, Page } from '@components';
import './style.scss';

interface PoseProps {
    imgSrc: string;
    title: string;
}

const Pose: FC<PoseProps> = ({ imgSrc, title, children }) => (
    <div className="pose">
        <img className="pose__img" src={imgSrc} alt={title} />
        <h3 className="pose__title">{title}</h3>
        <p className="pose__text">
            {children}
        </p>
    </div>
);

const images = preprocessRequire(require.context('@assets/photos/extra/poses', false));

const Poses: FC = () => (
    <Page>
        <Container>
            <Pose imgSrc={images[0]} title="Позирование стоя">
                Взаимодействуйте с окружением, не бойтесь опираться, трогать то что вас окружает, аналогично с одеждой,
                засовывайте руки в карманы, мните платье, поправляйте жакет.
                <br />
                Тело лучше расслабить , опереться на одну ногу, вторую немного согнуть.
            </Pose>
            <Pose imgSrc={images[1]} title="Позирование на стуле">
                Расслабьтесь. Нам, конечно, могут понадобиться статичные позы, но зачастую они ни к чему. Держать ровно
                спину вовсе не обязательно, ноги можно поставить на разные уровни (то есть одну немного согнуть, другую
                согнуть побольше или наоборот). Взаимодействуйте со стулом: опирайтесь на него руками, ставьте ноги на
                проножки.
            </Pose>
            <Pose imgSrc={images[2]} title="Позирование на полу">
                Не бойтесь сгибать колени, хвататься за них руками или облокачиваться руками на пол. Чем Вам удобнее и
                комфортнее будет - тем лучше.
            </Pose>
            <Pose imgSrc={images[3]} title="Портретное позирование">
                Не бойтесь взаимодействовать с руками и в одеждой. Давить улыбку совсем не обязательно. Если Вам не
                хочется улыбаться, то не нужно.
            </Pose>
        </Container>
    </Page>
);

export default Poses;
