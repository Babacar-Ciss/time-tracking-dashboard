import "./UserFilter.css"


const Userfilter = ({periode}) => (
        <div className="user-filter" onClick={periode}>
            <span>Daily</span>
            <span>Weekly</span>
            <span>Monthly</span>
        </div>
)
    
export default Userfilter;