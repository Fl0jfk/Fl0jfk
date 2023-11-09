import './globals.css';
import type { Metadata   } from 'next';

export const metadata: Metadata = {
  title: 'Fl0jfk',
  description: 'My personal website',
  themeColor: "black",
  appleWebApp: true,
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
        </body>
    </html>
  )
}
