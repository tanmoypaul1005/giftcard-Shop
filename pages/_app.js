import { Suspense, useEffect, useState } from 'react';
import { ToastContainer, Slide } from 'react-toastify';
import AxiosHeader from '../app/utils/AxiosHeader';
import Layout from '../components/Layout/Layout'
import SplashScreen from '../components/Layout/SplashScreen';
import LoadingModal from '../components/Modal/LoadingModal';
import '../styles/globals.css'
import '../styles/stripe.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import '../app/i18n';
import WelcomeScreenModal from '../components/Modal/WelcomeScreenModal copy';



function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // set token to axios header globally
    if (localStorage.postcard_token) {
      AxiosHeader({ token: localStorage.postcard_token });
    } else {
      AxiosHeader({ token: null });
    }

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [])


  return (
    <>
      {
        loading ?
          <SplashScreen />
          :
          <>
            <Suspense fallback="">
              <div className='font-montserrat scroll-smooth bg-blueGray-50 min-h-screen'>
                {/* <div className="z-50 fixed bottom-2 left-2 w-4 h-4 rounded-full bg-blue-600 sm:bg-orange-600 md:bg-indigo-600 lg:bg-green-600 xl:bg-red-600 2xl:bg-black"></div> */}

                <LoadingModal />

                <WelcomeScreenModal />

                <ToastContainer
                  position="top-right"
                  autoClose={2000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  transition={Slide}
                  theme="dark"
                  limit={2}
                />

                <GoogleOAuthProvider clientId="21378135863-etp9hmfmm8ou6qrpqrlpo929124ahc1p.apps.googleusercontent.com">
                  <Layout>
                    <Component {...pageProps} />
                  </Layout>
                </GoogleOAuthProvider>
              </div>
            </Suspense>
          </>
      }

    </>
  )
}

export default MyApp
