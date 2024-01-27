import type { Metadata } from 'next'
import './globals.css'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'


export const metadata: Metadata = {
  title: 'E-Capstone Portal',
  description: 'Generated by create next app',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {

  const userType = 'admin'

  return (
    <html lang="en">
      <body>
        {userType === 'user' ? <Navbar /> : <SideBar />}
        {children}
      </body>
    </html>
  )
}
