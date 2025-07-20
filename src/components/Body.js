/**Working with My test API from created json website */
// import RestaurantCard from "./RestaurantCard";
// import { useEffect, useState } from "react";
// import Shimmer from "./Shimmer";

// const Body = () => {
//     const [listOfRestuarants, setList] = useState([]);
//     const [filteredRestuarants, setFilteredRestuarants] = useState([]);
//     const [searchText, setSearchText] = useState("");

//     useEffect(() => {fetchData();}, []);

//     const fetchData = async () => {
//         const data = await fetch(
//             "https://api.jsonbin.io/v3/qs/687c9ad9d039d559a1687c17"
//         );
//         const json = await data.json();
        
//         setList(json.record.restaurants || []);
//         setFilteredRestuarants(json.record.restaurants || []);
//     };

//     return listOfRestuarants.length === 0 ? <Shimmer /> : (
//         <div className="body">
//             <div className="filter">
//                 <div className="search">
//                     <input
//                         type="text"
//                         className="search-box"
//                         value={searchText}
//                         onChange={(e) => {
//                             setSearchText(e.target.value);
//                         }}
//                     />
//                     <button
//                         onClick={() => {
//                             const filtered = listOfRestuarants.filter(
//                                 (res) =>
//                                     res.info.name
//                                         .toLowerCase()
//                                         .includes(searchText.toLowerCase())
//                             );
//                             setFilteredRestuarants(filtered);
//                         }}
//                     >
//                         Search
//                     </button>
//                 </div>
//                 <button
//                     className="filter-btn"
//                     onClick={() => {
//                         const filteredList = listOfRestuarants.filter(
//                             (res) => res.info.avgRating > 4
//                         );
//                         setFilteredRestuarants(filteredList);
//                     }}
//                 >
//                     Top Rated Restaurants
//                 </button>
//             </div>
//             <div className="restor_container">
//                 {filteredRestuarants.map((restaurants) => (
//                     <RestaurantCard key={restaurants.info.id} resData={restaurants} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Body;
/**Working with My test API from created json website */



/**Working with Swiggy  API from Namaste website */
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestuarants, setList] = useState([]);
    const [filteredRestuarants, setFilteredRestuarants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {fetchData();}, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://corsproxy.io/?url=https://pastebin.com/raw/0QcdEDBL"
        );
        const json = await data.json();
        
        // setList(json.record.restaurants || []);
        // setFilteredRestuarants(json.record.restaurants || []);

        setList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestuarants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    return listOfRestuarants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input
                        type="text"
                        className="search-box"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button
                        onClick={() => {
                            const filtered = listOfRestuarants.filter(
                                (res) =>
                                    res.info.name
                                        .toLowerCase()
                                        .includes(searchText.toLowerCase())
                            );
                            setFilteredRestuarants(filtered);
                        }}
                    >
                        Search
                    </button>
                </div>
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestuarants.filter(
                            (res) => res.info.avgRating > 4
                        );
                        setFilteredRestuarants(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="restor_container">
                {filteredRestuarants.map((restaurants) => (
                    <RestaurantCard key={restaurants.info.id} resData={restaurants} />
                ))}
            </div>
        </div>
    );
};

export default Body;

/**Working with My test API from created json website */
