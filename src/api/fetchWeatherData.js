import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'eec092d9fecc9232502e3d82e23bf61c';

const userData = JSON.parse(localStorage.getItem('userData'));
 export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q:query?query:userData.city?userData.city:'delhi',
            units: 'metric',
            APPID: API_KEY
        }
    });
    return data;
}