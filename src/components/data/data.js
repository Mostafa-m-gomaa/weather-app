import React,{Component} from "react";

const data=(props)=>{
return(
    <div className="data">
        {
            props.country && <diV>country: {props.country}</diV>
        }
        {
            props.city && <diV>city: {props.city}</diV>
        }
        {
            props.temp && <diV>tempreature: {props.temp}</diV>
        }
        {
            props.humidity && <diV>humidity: {props.humidity}</diV>
        }
        {
            props.description && <diV>description: {props.description}</diV>
        }
        {
            props.error &&  <diV>{props.error}</diV>
        }
        
        
       
        
        
       
    </div>
)
}
export default data