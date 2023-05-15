import './beans.scss';

import beansWhite from '../../resources/icons/coffee_bean_white.svg';
import beansBlack from '../../resources/icons/coffee_bean_black.svg';

const lineBlack = 'stripe stripe__black',
      lineWhite = 'stripe';


const Beans = (props) => {
    return (
        <div className="beans">
            <div className={props.boolean ? lineBlack : lineWhite}></div>
            <img 
                src={props.boolean ? beansBlack : beansWhite} 
                alt="coffee_bean" className="main__svg" /> 
            <div className={props.boolean ? lineBlack : lineWhite}></div>
        </div>
    )
}

export default Beans;