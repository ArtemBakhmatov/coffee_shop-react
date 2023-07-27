import Beans from '../beans/Beans';

import './about.scss';  

import girl from '../../resources/img/girl.webp';
import coffeeSteam from '../../resources/img/coffee_steam.webp';

const boolean = true;

const About = (props) => {
    return (
        <section className="about">
            <div className="container">
                <div className="about__flex">
                    <div className={props.styleImg}>
                        <img src={props.srcImg ? girl : coffeeSteam} alt={props.altImg} />
                    </div>

                    <div className={props.aboutRightWidth}>
                        <h2 className={props.aboutTitleBottom}>
                            {props.aboutTitle}
                        </h2>
                        <Beans boolean={boolean} styleBeans={props.styleBeans} />
                        <div className={props.aboutUsDescr}>
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.
                            <br/> <br />
                            Now residence dashwoods she excellent you. Shade being under his bed her, Much
                            read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                            horrible but confined day end marriage. Eagerness furniture set preserved far
                            recommend. Did even but nor are most gave hope. Secure active living depend son
                            repair day ladies now.
                        </div>
                        <div className={props.aboutOurBeansDescr}>
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            <br/> <br />
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions. 
                            <br/> <br />
                            As greatly removed calling pleased improve an. Last ask him cold feel
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.
                        </div>
                    </div>
                </div>
                <div className="stripe stripe__black stripe__black-big"></div>
            </div>
        </section>   
    )
}

export default About;