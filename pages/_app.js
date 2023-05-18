import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '@/components/Navbar'
import { AuthContextProvider } from '@/context/AuthContext'
import ProtectedRoute from '@/components/ProtectedRoute'
import { useRouter } from 'next/router'

const noAuthRequired = ['/', '/login', '/signup']

export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <AuthContextProvider>
      <Navbar />
      {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      )}
    </AuthContextProvider>
  )
}
