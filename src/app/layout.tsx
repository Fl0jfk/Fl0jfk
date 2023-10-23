import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fl0jfk',
  description: 'My personal website',
  themeColor: "black",
  appleWebApp: true,
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
  
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
