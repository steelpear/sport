import localFont from "next/font/local"
import Script from 'next/script'
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css'
import { PrimeReactProvider } from 'primereact/api'
import 'primereact/resources/primereact.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import "./globals.css"
import "./main.css"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({ children }) {
  const value = {
    ripple: true
  }

  return (
    <PrimeReactProvider value={value}>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          {children}
          <Script src="https://script.click-chat.ru/chat.js?wid=affd5ad6-be0f-4d91-810b-a3f580a82fa1" />
        </body>
      </html>
    </PrimeReactProvider>
  )
}
