import React,{Component} from "react";

 class form extends Component{
    render(){
        return(
            <form onSubmit={this.props.getWeather}>
                <input type="text" placeholder="enter country" name="country"/>
                <input type="text" placeholder="enter city" name="city"/>
                <input type="submit" value="Get Weather"/>
            </form>
        )
    }
 }
 export default form ;