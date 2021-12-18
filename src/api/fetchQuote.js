import axios from 'axios';

const URL = 'https://type.fit/api/quotes';
// const API_KEY = 'eec092d9fecc9232502e3d82e23bf61c';

 export const fetchQuote = async () => {
    const quote = await axios.get(URL);
    return quote;
}

// fetch("https://type.fit/api/quotes")
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {
//     console.log(data);
//   });