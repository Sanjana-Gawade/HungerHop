import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom";
import { Menu_API } from "../Constants/constant";
import ResMenuItems from "./ResMenuItems";
import MyContext from "../../utils/MyContext";

const RestaurantMenu = ( )=>{

    const {restId} = useParams();
    const [restData, setRestData] = useState([])
    const [showIndex, setShowIndex] = useState(0);

    const {background} = useContext(MyContext);

    useEffect(()=>{
        fetchData();
        
    },[])

    async function fetchData(){

        const response = await fetch(Menu_API+restId);
        const json = await response.json();
        setRestData(json.data);
    
    }

    if(restData.length===0) return

    //
    const {name, cuisines, costForTwoMessage, avgRatingString, totalRatingsString,areaName,sla
    } = restData?.cards[2]?.card?.card?.info;

    const categories = restData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((category)=>
        category.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    
    )

    return(
        <div className={"resmenu-container"+" "+background}>
            <div className="restInfo">
                <h2>{name}</h2>
            </div>
            <div className="restInfo2">
                <span id="rating">{avgRatingString} ({totalRatingsString})</span>
                
                <span id="cost">   : {costForTwoMessage}</span>
                <p id="cuisines">{cuisines.join(', ')}</p>
                <p>Outlet : {areaName}</p>
                
                <p>{sla?.slaString}</p>

            </div>
            <div className="resmenu-conatainer">
            {
                categories.map((cat, index)=>{
                    return <ResMenuItems category={cat}
                    showItems={index === showIndex? true : false} 
                 setShowIndex ={() => setShowIndex(index)}
                 />
                    
                })
            }
            </div>
           
            
        </div>
    )
}

export default RestaurantMenu;