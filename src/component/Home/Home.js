import React, { useState, useEffect } from "react";
import { fetchWeather } from "../../api/fetchWeatherData";
import "./Home.css";
import { fetchQuote } from "../../api/fetchQuote";
import Success from "../success/success";
import { Animated } from "react-animated-css";
import {fetchImages } from '../../api/fetchImages';



const Home = ({setLogOut, setSubmit}) => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [quote, setQuote] = useState([]);
  const [focus, setFocus] = useState("");
  const [showTask, setShowTask] = useState(false);
  const [inputCheck, setinputCheck] = useState("");
  const [changeCity, setChangeCity] = useState(false);
  const [userName, setUserName] = useState('Mayank');
  const [changeUserName, setChangeUserName] = useState(false);
    let [updateQuote, setUpdateQuote] = useState(0);
    let [currentTime, setcurrentTime] = useState('');

  const search = async (e) => {
    if(e && e.key === "Enter") {
      const data = await fetchWeather(query);
      setWeather(data);
      setQuery("");
      setChangeCity(false)
    }else{
        const data = await fetchWeather(userData.city);
        setWeather(data);
    }
  };
 
  useEffect(() => {
     search();
    const quotes = fetchQuote();
    quotes.then((res) => setQuote(res.data));  //1643
    const images = fetchImages();
    images.then((res) => console.log(res.data));
    
  }, []);


const aTalk = ['It\'s a new day.', 'You are the best version of yourself',
                'You can achieve all your dreams', 'Today is a miracle.',
                'Others don’t define you', 'Life goes on', 'You deserve the best',
                 'You\'re the best', 'You can do anything.','You\'re a winner',
                'You\'re unstoppable today', 'You\'re phenomenal', 'You looks perfect today'];



  let today = () => {
    setcurrentTime(new Date());
  };
  function getDate() {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let currentTime = `${hours > 9 ? hours : `0${hours}`}:${minutes > 9 ? minutes : `0${minutes}`}`;
    // if(hours === 9 && minutes === 18 && seconds === 1){
      
    // }  
    return currentTime;
  }
  useEffect(() => {
    const interval = setInterval(() => {
      today();
    },1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
     setInterval(() => {
       setUpdateQuote(updateQuote++);
       let update = updateQuote;
       localStorage.setItem("quoteCount", JSON.stringify(update));   
    }, 86400000);
  }, []);

  
  function getGreet() {
    let today = new Date();
    let hrs = today.getHours();
    let greet;

    if (hrs < 12 && hrs >= 6) greet = "Good morning";
    else if (hrs >= 12 && hrs <= 17) greet = "Good afternoon";
    else if (hrs >= 17 || (hrs >= 0 && hrs < 6)) greet = "Good evening";

    return greet;
  }

  function addTask(e) {
    if (focus && e.key === "Enter") {
      localStorage.setItem("focus", JSON.stringify(focus));
      setShowTask(true);
    }
  }

  function updateUserName(e){
    if ( e.key === "Enter") {
        setChangeUserName(false)
      }
  }
  const task = JSON.parse(localStorage.getItem('focus'));

  const userData = JSON.parse(localStorage.getItem('userData'));
  let [count, setCount] = useState(0);
  if(userData.name && userData.city && count === 0) {
    console.log(userData);
    setUserName(userData.name);
    setCount(count+1);
  }

   function logOut(){
     setSubmit(false);
     localStorage.setItem('submit', JSON.stringify(false));
     localStorage.setItem("quoteCount", JSON.stringify(0));
     window.location.reload(true);
   }

   const getQuoteCount = JSON.parse(localStorage.getItem('quoteCount'));
   const finalCount = getQuoteCount?getQuoteCount:0 ;

  return (
    <div
      style={{ color: "white" }}
      className="main-container"
    >
      <button className="logout" onClick={logOut}>Log out</button>
      <p className="time">{getDate()}</p>
      <div className="wish-container">
          {
              changeUserName?(
                <input
                className="focus_input"
                type="text"
                placeholder="Your Name"
                onChange={(e) => setUserName(e.target.value)}
                onKeyPress={updateUserName}
              />
              ): (
                  <>
                    <p className="wishes">{getGreet()}, <span className="userName">{userName}</span>.</p>
                    <span className="change-name" onClick={() => setChangeUserName(true)}>Change</span>
                  </>
              )
          }
      
      </div>
      <div className="temp-container">
          {
              weather.main ? (
                <>
                <div className="temp-img--container">
                <img
                  className="temp_img"
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description}
                />
                <p className="temp">{Math.round(weather.main.temp)}°</p>
              </div>
                   
                      {
                  changeCity? (
                      <input className="temp-input" 
                             type='text'
                             placeholder="City..."
                             value={query}
                             onChange={(e) => setQuery(e.target.value)}
                             onKeyPress={search}
                     />
                  ): (
                      <p className="temp-city" onClick={(e) => setChangeCity(true)}>{weather.name}</p>
                  )
              }
                   </>
              ): (
                  <>
                <div className="temp-img--container">
                <img
                  className="temp_img"
                  src="https://img-premium.flaticon.com/png/512/1888/premium/1888313.png?token=exp=1623954992~hmac=32ea7ab6d5b017056158092cc860eaf0"
                  alt="icon"
                />
                <p className="temp">30°</p>
              </div>
      
              {
                  changeCity ? (
                      <input className="temp-input" 
                             type='text'
                             placeholder="City..."
                             value={query}
                             onChange={(e) => setQuery(e.target.value)}
                             onKeyPress={search}
                     />
                     
                  ): (
                      <p className="temp-city" onClick={(e) => setChangeCity(true)}>enter city</p>
                  )
              }
          </>
              )
          }
      </div>


      {/* {quote[finalCount] && quote[finalCount] !== "undefined" && (
        <div className="quote-container" >
          <p className="quote">{quote[finalCount].text}</p>
          <p className="quote-author">{quote[finalCount].author}</p>
        </div>
      )} */}
      {/* <input 
              type="text"
              className="search"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={search}
              /> */}
      {/* {weather.main && (
                  <div className="city">
                     <h2 className="city-name">
                         <span>{weather.name}</span>
                         <sup>{weather.sys.country}</sup>
                     </h2>
                     <div className="city-temp">
                         {Math.round(weather.main.temp)}
                         <sup>&deg;C</sup>
                     </div>
                     <div className="info">
                         <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description}/>
                         <p className="desc">{weather.weather[0].description}</p>
                     </div>
                  </div>

              )} */}
    </div>
  );
};

export default Home;


// userName
// focus
// quotenumber
// heynumber
// city