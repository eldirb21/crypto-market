import axios from 'axios'
var url = 'http://localhost:3030/auth/api/v1/'
axios.defaults.baseURL = url;//process.env.API_URL; 

export default axios;
// Add a request interceptor
const Client = axios.create({
    baseURL: url// process.env.API_URL
});
Client.defaults.timeout = 2500;

Client.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
Client.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

const POST = (path, body) => {
    return Promise((resolve, reject) => {
        Client.post(path, body)
            .then(res => resolve(res))
            .catch(err => reject(err))
    })
}
const UPDATE = (path, body) => {
    return Promise((resolve, reject) => {
        Client.post(path, body)
            .then(res => resolve(res))
            .catch(err => reject(err))
    })
}
const GET = (path, body) => {
    return Promise((resolve, reject) => {
        Client.get(path, body)
            .then(res => resolve(res))
            .catch(err => reject(err))
    })
}
const DELETE = (path, body) => {
    return Promise((resolve, reject) => {
        Client.delete(path, body)
            .then(res => resolve(res))
            .catch(err => reject(err))
    })
}
export { Client, POST, UPDATE, GET, DELETE }

