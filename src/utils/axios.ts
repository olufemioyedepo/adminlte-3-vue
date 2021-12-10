import axios from 'axios';
import store from '@/store/index';
import router from '@/router';

const baseUrl = process.env.NODE_ENV === 'development' ? "https://localhost:44387/api/" : "https://axamansard.com/partnerapp/api/";
//const baseUrl = "https://localhost:44387/api/";
const axiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 30000,
    
});

// Intercept before sending HTTP requests
axiosInstance.interceptors.request.use(
    (request) => {
        /**
         * you can process config here
         */
        const jwt = localStorage.getItem('jwt');
        //alert(jwt);
        request.headers = {
          'Content-Type': 'application/json',
          // 'Access-Control-Allow-Origin': '*',
          // 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
          // 'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
          'Authorization': `Bearer ${jwt}`
        }
        return request;
    },
    (error) => Promise.reject(error)
);

// Intercept after received HTTP requests
axiosInstance.interceptors.response.use(
    (response) => {
      /**
       * you can process response and error here
       */
      return response
    },
    (error) => {
      debugger;
      if (error.response.status === 401) {
        store.dispatch("auth/doLogout");
        router.push("/auth/login");
      }
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

export default axiosInstance;
