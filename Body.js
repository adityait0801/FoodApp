import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockDemo";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";

    const Body = () =>{
        const [listOfRestaurants,setListOfRestaurants] = useState([]);

        const [searchText, setSearchText] = useState("");

        const [filteredRestaurants,setFilteredRestaurants] = useState([]);

        useEffect( ()=>{
            fetchData()
        },[]);
        
        const fetchData = async()=>{
            const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.2513844&lng=81.62964130000002&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        
        const json = await data.json();
        // console.log(json);
        //  console.log(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants);
        setListOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        };

        if (listOfRestaurants.length === 0)
        return <Shimmer />;
      

    return (
        <div className="body">
            <div className="filter">
            <div className="search">
                <input type="text" className="search-text" value={searchText} 
                onChange={(e)=>{
                    setSearchText(e.target.value);
                }}/>
                <button
                className="search-btn"
                onClick={() => {
                    const filteredRestaurants = listOfRestaurants.filter((res) =>
                      res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    setFilteredRestaurants(filteredRestaurants);
                  }
                }
                >
                Search
                </button>
                </div>
            <button className="filter-btn"
            onClick={()=>{
                const filteredList = listOfRestaurants.filter(
                    (res) => res.info.avgRating > 4
                );
                setListOfRestaurants(filteredList);
            }}
            >
            Top Rated Restaurants
            </button>

            {/* To render the data coming from api into our webpage */}
            <div className="res-container">
                {   
                filteredRestaurants.map((restaurant) => {
                    return <RestaurantCard 
                    key={restaurant.info.id} resData={restaurant}
                    // key={info.info.id} resData={info}
                    />
                })
                }   
                </div>
            </div>
        </div>
    );
    };

export default Body;