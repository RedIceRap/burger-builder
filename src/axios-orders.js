import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-5f283.firebaseio.com/'
});

export default instance;