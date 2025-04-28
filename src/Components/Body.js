import RestaurantCart from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect, useContext } from "react";
import DisplayErrorforCard from "./DisplayErrorforCard";
import { Link, Links } from "react-router-dom";
import MyContext from "../../utils/MyContext";

const Body = function(){
    const [listOfRestaurant, setListofRestaurant]= useState([]);
    const [filteredList,setFilteredList]=useState([]);
    const [inputValue, setInputValue] = useState("");
    const [noResult, setNoResult] = useState(false);
    const {background} = useContext(MyContext);
    const [sortOption, setSortOption] = useState("");
    
    const handleSort = (e) => {
        const selected = e.target.value;
        setSortOption(selected);
        sortCards(filteredList, selected);
      };
    
      const sortCards = (list, sortBy) => {
        if (!list.length) return;
    
        const sorted = [...list].sort((a, b) => {
          const costA = parseInt(a.info.costForTwo.match(/\d+/)[0]);
          const costB = parseInt(b.info.costForTwo.match(/\d+/)[0]);
    
          return sortBy === "lowtohigh" ? costA - costB : costB - costA;
        });
    
        setFilteredList(sorted);
      };
  
  
    useEffect (()=> {
        fetchData();
      }, []);
    
      const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=15.85760&lng=74.50110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    
        );
        
        const json = await data.json();
       
        //optional chaining
    
        setListofRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        //console.log(listOfRestaurant)
        setFilteredList(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
      }

      const handleChange = (event) => {
        setInputValue(event.target.value);
      };
     
      const handleClick = ()=>{
        let filteredList = listOfRestaurant.filter((res)=>{
            return res?.info?.name.toLowerCase().includes(inputValue.toLowerCase())
        })
         setFilteredList(filteredList);

         filteredList.length===0 ?setNoResult(true):setNoResult(false)


      }

    
    
    
    return listOfRestaurant.length === 0 ? <Shimmer/> : (
        <div className= {"body-container"+" "+background}>
            <div>
                <h2>Restaurant with online food delivery</h2>
            </div>

            <div className="other-options">
                <div id="search">
                <input id="search-input"
                    type="text" 
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="Search the Restaurants...."/>
                    <button id="search-btn" onClick={handleClick}>
                        <img id="search-img" src="https://cdn-icons-png.flaticon.com/512/54/54481.png"/>
                    </button>
                </div>
                    
            
                    
                <select name="options" id="dropdown" onChange={handleSort}>
                    <option value="option1" defaultChecked>Sort By</option>
                    <option value="lowtohigh" >Cost: Low to High</option>
                    <option value="hightolow">Cost: High to Low</option>
                </select>
            

            </div>
            <div className="list-of-restaurant">
            {
                   noResult===true? <DisplayErrorforCard/>: filteredList.map((restaurant)=>{
                        return <Link key ={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}
                        ><RestaurantCart resData={restaurant}/>
               
               </Link> 
                    })
                   
            }
            </div>
            
            
        </div>
    )
}

export default Body;