import axios from 'axios';

const URL = 'https://api.unsplash.com/search/photos/?client_id=K08_VHYAe7YuNE3o73ZVgoxoXC4KNhocHsCmWu_D2Y8&query=mountain&orientation=landscape';


 export const fetchImages = async () => {
    const images = await axios.get(URL);
    return images;
}



