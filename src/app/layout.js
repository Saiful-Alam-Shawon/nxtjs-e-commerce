import App from './Component/App'
import StoreProvider from './Redux/StoreProvider'
import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'E-Commerce',
  description: 'Design & Developed by Saiful',
}

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <App>{children}</App>
        </StoreProvider>
      </body>
    </html>

  )
}
