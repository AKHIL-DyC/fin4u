import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/component/navbar/Navbar'
import Footer from '@/component/footer/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fin4u',
  description: 'financial made simple with fin4u',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='container'>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        </div>
      
      </body>
    </html>
  )
}
