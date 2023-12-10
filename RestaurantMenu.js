import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    
     const [resInfo, setResInfo] = useState(null);
    useEffect( ()=> {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {

       const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.2513844&lng=81.62964130000002&restaurantId=84718&catalog_qa=undefined&submitAction=ENTER");

       const json = await data.json();
       console.log(json);
       setResInfo(json.data);
        
    };

    if(resInfo === null)
    return <Shimmer/>

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info; 

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{costForTwoMessage}</h3>
            <ul>
                <li>Menu</li>
                <li>Cuisines</li>
                <li>Price</li>
                <li>Delivery Time</li>
            </ul>
        </div>
    );
};

export default RestaurantMenu ;