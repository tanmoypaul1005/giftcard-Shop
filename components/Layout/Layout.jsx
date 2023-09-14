// components/layout.js
import { useEffect } from 'react';
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useRouter } from "next/router";
import { getUserVerificationInfo } from '../../app/stores/UserAccountStore.js'
import useAuthStore from '../../app/authStore';

export default function Layout({ children }) {

  const router = useRouter();

  const array = [
    '/demo/CardDemo',
    // '/auth/register',
    // '/auth/forget-password',
    // '/auth/reset-password',
    // '/auth/submit-otp',
    // '/profile/draft',
  ]

  const { isLoggedIn } = useAuthStore();

  useEffect(() => {
    isLoggedIn && getUserVerificationInfo();
  }, [isLoggedIn])


  let dont_show_layout = true;
  dont_show_layout = array.includes(router.pathname)


  if (dont_show_layout) return children

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <div className="pt-16">
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}