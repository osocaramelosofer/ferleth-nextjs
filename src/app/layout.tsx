import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { NavBar } from '@/components/navbar'
import { Rubik_Mono_One, Pirata_One } from 'next/font/google'

const rubik = Rubik_Mono_One({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-rubik'
})
const pirata = Pirata_One({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-pirata'
})

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})

export const metadata: Metadata = {
  title: 'ferleth textiles',
  description: 'mexican fabric and textiles'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${rubik.variable} ${pirata.variable}`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="wrapper md:mx-20 lg:mx-40 mx-10">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  )
}
