import axios from 'axios';

const baseUrl = "https://randomuser.me/api/";

const instance = axios.create({
    baseURL: baseUrl,
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
        //'Authorization': "JWT " + localStorage.getItem('token')
    },
});

// Intercept before sending HTTP requests
instance.interceptors.request.use(
    (request) => {
        /**
         * you can process config here
         */
        return request;
    },
    (error) => Promise.reject(error)
);

// Intercept after received HTTP requests
instance.interceptors.response.use(
    (response) => {
      /**
       * you can process response and error here
       */
      return response
    },
    (error) => {
      if (error.response && error.response.data) {
        const code = error.response.status
        const msg = error.response.data.message
        // ElMessage.error(`Code: ${code}, Message: ${msg}`)
        console.error(`[Axios Error]`, error.response)
      } else {
        // ElMessage.error(`${error}`)
      }
      return Promise.reject(error)
    }
  );

export default instance;
