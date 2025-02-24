import type { Metadata } from 'next'
import { Do_Hyeon, Noto_Sans_KR } from 'next/font/google'
import './globals.css'

const do_hyeon = Do_Hyeon({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--do-hyeon'
})
const noto_sans = Noto_Sans_KR({
  subsets: ['latin'],
  variable: '--noto-sans'
})

export const metadata: Metadata = {
  title: 'example',
  description: 'example'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        lang="en"
        className={`${noto_sans.variable} ${do_hyeon.variable} font-noto-sans`}>
        {children}
      </body>
    </html>
  )
}
