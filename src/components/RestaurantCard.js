import {CON_URL} from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} =props;
  

    const {cloudinaryImageId, name, cuisines, avgRating,costForTwo,
        sla:{deliveryTime}} = resData?.info;
    return (
        <div className="res-card">
            <img src={CON_URL+cloudinaryImageId}></img>
              <h3>{name}</h3>  
              <h4>{cuisines.join(",")}</h4>
              <h4>{avgRating} Stars</h4>
              <h4>{costForTwo}</h4>
              <h4>{deliveryTime} minutes</h4>
          
        </div>
    )
}
export default RestaurantCard;