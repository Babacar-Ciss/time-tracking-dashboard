import "./Activities.css";
import datas from "../../../src/data/data.json";
import IMAGES from "../../assets/images";
import {motion} from "framer-motion"

const Activities = ({frequency}) => {
    console.log(datas);
    
    function iconschoiceHandler (iconTitle) {
        switch (iconTitle) {
            case "exercise" :
                return IMAGES.iconExercise;
            break;
            case "play" :
                return IMAGES.iconPlay;
            break;
            case "self-care" :
                return IMAGES.iconSelfCare;
            break;
            case "social" :
                return IMAGES.iconSocial;
            break;
            case "study" :
                return IMAGES.iconStudy;
            break;
            case "work" :
                return IMAGES.iconWork;
            break;
        }
    }

    function colorschoiceHandler (iconTitle) {
        switch (iconTitle) {
            case "exercise" :
                return "#4BCF82";
            break;
            case "play" :
                return "#55C2E6";
            break;
            case "self-care" :
                return "#F1C75B";
            break;
            case "social" :
                return "#7335D2";
            break;
            case "study" :
                return "#FF5E7D";
            break;
            case "work" :
                return "#FF8B64";
            break;
        }
    }

    function periodeRenderHandler (data,periode) {
        switch (periode) {
            case "weekly" :
                return (<><p  className="activities-duration">{data.timeframes.weekly.current}hrs</p>
                        <p className="activities-previous">Last {previousPeriodeHandler(periode)} - {data.timeframes.weekly.previous}hrs</p> </>);
                break;
            case "daily" : 
                return (<><p  className="activities-duration">{data.timeframes.daily.current}hrs</p>
            <p className="activities-previous">Last {previousPeriodeHandler(periode)} - {data.timeframes.daily.previous}hrs</p> </>);
                break;
            case "monthly" : 
                return (<><p  className="activities-duration">{data.timeframes.monthly.current}hrs</p>
                <p className="activities-previous">Last {previousPeriodeHandler(periode)} - {data.timeframes.monthly.previous}hrs</p> </>);
                break;
            }
    }

    function previousPeriodeHandler (periode) {
        switch (periode) {
            case "weekly" :
                return (<>Week</>);
            
            case "daily" :
                return (<>Day</>);
            
            case "monthly" :
                return (<>Month</>);
        }
    }



    
    const MappingDatas = datas.map((data, index) => (
        <motion.div className="Activities" key={`${data.title}${index}`} 
                                           layout
                                           initial = {{opacity : 0}}
                                           animate = {{opacity : 1}}
                                           transition = {{duration : 1, delay : 0.5, layout : {duration : 2}}}
                                           style={{backgroundColor: `${colorschoiceHandler(data.title.toLowerCase())}`,
                                                                          backgroundImage: `url(${iconschoiceHandler(data.title.toLowerCase())})`
                                                                        }}>  
        <div className="activities-container">
            <div className="activities-details">
                <p className="activities-title">{data.title}</p>
                {
                    periodeRenderHandler(data,frequency)
                }
                <img className="activities-logo" src={IMAGES.iconEllipsis} alt="Ellipsis dot image" />
            </div>
        </div>
    </motion.div>
    ))
   

return (
    <>
        {MappingDatas}
    </>
)
}

export default Activities;