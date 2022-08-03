import "./User.css";
import UserAvatar from "../../assets/images/image-jeremy.png";
import Userfilter from "../UserFilter/UserFilter";
import {motion} from "framer-motion"

const User = ({periode}) => {

    return(
        <motion.div className="User"
                    initial = {{x : '-100vw'}}
                    animate = {{x : '0', type:"spring"}}
        >
            <div className="user-details"> 
                <img className="user-avatar" src={UserAvatar} alt="user avatar"/>
                <h2 className="user-name">Jeremy Robson</h2>
            </div>
            <Userfilter periode = {periode}/>
        </motion.div>
    )
}


export default User;