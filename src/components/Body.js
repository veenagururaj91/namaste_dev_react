import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
    //Local Sate Variable - super powerful variable
    const [listOfRestuarants, setList] = useState(resList);

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                onClick={() =>{
                    // Filter Logic here
              const filteredList = listOfRestuarants.filter (
                (res) => res.info.avgRating > 4
              );
              setList(filteredList);
                //     listOfRestuarants = listOfRestuarants.filter(
                //     (res)=>res.info.avgRating > 4
                // );
                // console.log (listOfRestuarants);
                }}
                
                >Top Rated Restaurants</button>
            </div>
            <div className="restor_container">
                 {listOfRestuarants.map(restaurant => (
                 <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                 ))}
            </div>
        </div>
    )
};
export default Body;