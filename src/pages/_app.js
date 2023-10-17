import '@/styles/globals.css'
// import "bootstrap/dist/css/bootstrap.min.css"; 
// import "bootstrap/dist/js/bootstrap.min.js"; 
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import Head from 'next/head';
import Script from 'next/script';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoutes from './protectedRoutes';
export default function App({ Component, pageProps }) {
  return (
    <>
     
     

      <Provider store={store}>
      <ProtectedRoutes>
      <Component {...pageProps} />
      </ProtectedRoutes>
      </Provider>
    </>
  );
}
