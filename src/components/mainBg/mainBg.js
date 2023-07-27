import Beans from '../beans/Beans';
import MainButton from '../mainButton/MainButton';

import './mainBg.scss';

const MainBg = (props) => {
    return (
        <section className={props.styleBg}>
            <div className="container">
                <h1 className="title">
                    {props.title}
                </h1>
                <Beans styleBeans={props.styleBeans} />
                <MainButton styleButton={props.styleButton} />
            </div>
        </section>
    )
}

export default MainBg;