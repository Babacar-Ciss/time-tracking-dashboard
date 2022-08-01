import "./User.css";
import UserAvatar from "../../assets/images/image-jeremy.png";
import Userfilter from "../UserFilter/UserFilter";

const User = ({periode}) => {

    return(
        <div className="User">
            <div className="user-details"> 
                <img className="user-avatar" src={UserAvatar} alt="user avatar"/>
                <h2 className="user-name">Jeremy Robson</h2>
            </div>
            <Userfilter periode = {periode}/>
        </div>
    )
}


export default User;