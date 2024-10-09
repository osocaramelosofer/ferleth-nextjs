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
        <div className="wrapper mx-10 md:mx-20 lg:mx-30 ">
          <NavBar />
          {children}
        </div>
        <footer className="p-10">
          <div className="flex justify-items-baseline justify-between flex-col md:flex-row">
            <div>
              <span className="font-rubik text-5xl text-white">ferlet</span>
              <p className="text-xl semi-bold text-white uppercase">
                for everyone but notanyone
              </p>
            </div>
            <div className="colum-wrapper flex text-neutral-200 gap-32 flex-col md:flex-row">
              <div className="col">
                <span className="uppercase font-bold text-2xl ">product</span>
                <ul className="">
                  <li className="uppercase semi-bold">jackets</li>
                  <li className="uppercase semi-bold">shirts</li>
                  <li className="uppercase semi-bold">dresses</li>
                  <li className="uppercase semi-bold">hats</li>
                  <li className="uppercase semi-bold">outwears</li>
                </ul>
              </div>
              <div className="col">
                <span className="uppercase font-bold text-2xl ">buying</span>
                <ul className="">
                  <li className="uppercase semi-bold">shop</li>
                  <li className="uppercase semi-bold">term to use</li>
                  <li className="uppercase semi-bold">privacy</li>
                  <li className="uppercase semi-bold">how it works</li>
                  <li className="uppercase semi-bold">customer service</li>
                </ul>
              </div>
              <div className="col">
                <span className="uppercase font-bold text-2xl ">social</span>
                <ul className="">
                  <li className="uppercase semi-bold">instagram</li>
                  <li className="uppercase semi-bold">facebook</li>
                  <li className="uppercase semi-bold">twitter</li>
                </ul>
              </div>
              <div className="col">
                <span className="uppercase font-bold text-2xl ">
                  join our community
                </span>
                <form className="">
                  <input
                    type="email"
                    placeholder="EMAIL ADDRESS"
                    className="rounded-full p-2"
                  />
                </form>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
