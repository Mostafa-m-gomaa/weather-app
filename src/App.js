import { Component } from 'react';
import './App.css';
import Data from './components/data/data';
import Form from './components/form/form';

// let apiKey="8d6762299e06b3918211ecd77c84893d"

class App extends Component{
  state={
    country:"",
    city:"",
    temp:"",
    humidity:"",
    description:"",
    error:""

  }

getWeather= async (e)=>{
e.preventDefault();
const country=e.target.elements.country.value
const city=e.target.elements.city.value

const api= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=e36ed364400282e43250b6c4c0274d44`);
const data= await api.json()
if(city && country){
  this.setState({
 
    country:data.sys.country,
    city:data.name,
    temp:data.main.temp,
    humidity:data.main.humidity,
    description:data.weather[0].description,
    error:""
  })
}
else{
  this.setState({
    country:"",
    city:"",
    temp:"",
    humidity:"",
    description:"",
    error:"wrong data"
  })
}
}


  render(){
    return (
      <div className="App">
        <h2>Get Weather App</h2>
        <Form getWeather={this.getWeather} />
        <Data 
        country={this.state.country}
        city={this.state.city}
        temp={this.state.temp}
        humidity={this.state.humidity}
        description={this.state.description}
        error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
