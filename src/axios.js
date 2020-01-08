import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-blog-c0b04.firebaseio.com/',
});
// instance.interceptors.request...

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance;