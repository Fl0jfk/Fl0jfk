"use client"

import './globals.css';
import { DataProvider } from './contexts/data';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <DataProvider>
        <body style={{backgroundImage: "linear-gradient(to right, #434343 0%, black 100%)"}} className="flex flex-col w-screen text-white">  
            <Header/>
              {children}
            <Footer/> 
        </body>
      </DataProvider>  
    </html>
  )
}
