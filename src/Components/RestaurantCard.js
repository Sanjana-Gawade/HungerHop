import { CDN_URL } from "../Constants/constant";

const RestaurantCart =(props) => {
    const{resData}= props;
    const{name,cuisines,costForTwo,avgRating,sla}= resData?.info;

    return(
        <div className="res-container">
            <img id="cart-image" src={CDN_URL+resData.info.cloudinaryImageId}/>
        <div className="card-content">
        <h3>{name}</h3>
            <span id="star">{avgRating}</span>      
            <span>Available in {sla.slaString}</span>  
            <p className="text">{cuisines.join(', ')}</p>
            <p className="text">{costForTwo}</p>
        </div>
            
            
            </div>
    )
}  

export default RestaurantCart;