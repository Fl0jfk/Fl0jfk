import './globals.css';
import type { Metadata } from 'next';
import AxeptioInjector from './utils/AxeptioInjector';
import Analytics from './utils/Analytics';

export const metadata: Metadata = {
  title: 'Fl0jfk',
  description: 'My personal website',
  appleWebApp: true,
  themeColor: "black",
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
  icons: {
    icon: '/icon.png',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
        <body className="flex flex-col w-screen text-white gradient-background">  
         {children}
         <AxeptioInjector/>
         <Analytics/>
        </body>
    </html>
  )
}
