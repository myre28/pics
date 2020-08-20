import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID HsgUtromjmbQdzpQ4GWwJY4DghtVYZmLMYoMA7q-qNU'
    }
});