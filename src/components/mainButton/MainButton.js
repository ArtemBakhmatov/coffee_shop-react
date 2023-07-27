import {Link} from 'react-router-dom';
import '../mainBg/mainBg.scss';

const MainButton = (props) => {
    return (
        <>
            <div className={props.styleButton}>
                <h2 className="mainBg__subtitle">
                    We makes every day full of energy and taste
                </h2>
                <div className="mainBg__question">
                    Want to try our beans?
                </div>
                <Link to="/CoffeePage" className="mainBg__btn">More</Link>
            </div>
        </>
    )
}

export default MainButton;