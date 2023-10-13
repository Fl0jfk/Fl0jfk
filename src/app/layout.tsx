import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fl0jfk',
  description: 'My personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
        <body style={{backgroundImage: "linear-gradient(to right, #434343 0%, black 100%)", background: "-webkit-linear-gradient(to right, #434343 0%, black 100%)"}} className="flex flex-col w-screen text-white">  
              {children}
        </body>
    </html>
  )
}
