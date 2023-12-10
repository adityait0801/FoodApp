import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    const {resData} = props;
    
    const{cloudinaryImageId, name, cuisines, avgRatingString, costForTwo, deliveryTime } = resData?.info;

    return(
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src={CDN_URL+resData.info.cloudinaryImageId}/>
            <h4>{name}</h4>
            <h5>{cuisines.join(', ')}</h5>
            <h5>{avgRatingString} Stars</h5>
            <h5>{costForTwo}</h5>
            <h5>Delivery Time - {resData?.info.sla.deliveryTime} mins</h5>            
        </div>
    );
};

export default RestaurantCard;