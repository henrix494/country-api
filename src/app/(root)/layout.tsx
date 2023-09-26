import '../../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from '@/components/nav/Nav'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
 
  return (
    <html className=' '  lang="en">
      <body className={inter.className + ' bg-[#fafafa] dark:bg-dmBG' }>
         <Nav/>
        {children}
       
        </body>
    </html>
  )
}
