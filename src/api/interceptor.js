// import axios from 'axios'



// const Axiosinstance = axios.create(
//     {
//           // API base url write...
//           baseURL: process.env.BASE_URL
//     }
// );
// // instance.interceptors.request.use(function () {/*...*/});


// // const myInterceptor = axios.interceptors.request.use(()=>{

// // });

// // axios ke 2 interceptor bante hai request or response. inhi do se hamari application per API implement hoti hai.

// // Add a request interceptor
// Axiosinstance.interceptors.request.use(function (config) {
//     // Do something before request is sent
//     return config;
//   }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   });

// //   axios.interceptors.request.use(
// //     (config) => {
// //       // Do something before request is sent
// //       return config;
// //     },
// //     (error) => {
// //       // Do something with request error
// //       return Promise.reject(error);
// //     });
  

// // Add a response interceptor
// Axiosinstance.interceptors.response.use(function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     return response;
//   }, function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     return Promise.reject(error);
//   });

//   export default Axiosinstance


import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://hdmwbaicr4.execute-api.ap-south-1.amazonaws.com/dev/', // Replace with your API base URL
});



// Axios me 2 interceptor hote hai response and request.

axiosInstance.interceptors.request.use(
  (config) => {
  // Retrieve the token from localStorage
  const token = localStorage.getItem('Token');

  // Add the token to the request headers All API security not directly not access browser API.
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Modify response object here if needed
    return response;
  },
  (error) => {
    // Handle response error
    return Promise.reject(error);
  }
);

export default axiosInstance;

