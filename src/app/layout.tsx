import './globals.css';
import type { Metadata, Viewport   } from 'next';
import AxeptioInjector from './utils/AxeptioInjector';
import Analytics from './utils/Analytics';

export const metadata: Metadata = {
  title: 'Fl0jfk',
  description: 'My personal website',
  appleWebApp: true,
  icons: {
    icon: '/icon.png',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    }
  }
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "black"
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
         <Analytics/>
         <AxeptioInjector/>
        </body>
    </html>
  )
}
