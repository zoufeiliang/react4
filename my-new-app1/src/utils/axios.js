import axios from 'axios';

//请求拦截器
axios.interceptors.request.use(function(config) {
    console.log('拦截器1')
    return config;
},function(error){
    return Promise.reject(error);
});


//响应拦截器
axios.interceptors.response.use(function(response){
    console.log('拦截器2')
    return response;

},function(error){
    return Promise.reject(error);
});
window.axios = axios;
export default axios;