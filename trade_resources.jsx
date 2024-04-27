import guide from "../assets/Resource Guide.png";
import village1 from "../assets/Lowland Village.png";
import village2 from "../assets/Highland Village.png";
import resources1 from "../assets/Resources Single.png";
import arrow from "../assets/Arrow Curve.png";
import "../components/trade_resources.css";

const Trade_resources = () => {
    return (
        <div className='Trade' id='trade'>
            <div className='left-r'>
                <img src={guide} alt=''/>
                
            </div>
            <div className='right-r'>
                <div className='details-r'>
                    <div>
                        <span>Trade between villages to amass wealth and gain an advantage over your opponents.</span>
                    </div>
                </div>
                <div className='contact'>
                    <img src={village1} alt=''/>
                    <div className="background-img">
                        <img src={arrow}></img>
                    </div>
                    <img src={village2} alt=''/>
                        <div className="foot">
                    <img src={resources1}></img>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default Trade_resources