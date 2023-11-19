import { RootProvider } from 'next-docs-ui/provider'
import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'
import 'next-docs-ui/style.css'
import '@/styles/globals.css'
import Footer from '@/pages/components/footer'
import Helpheader from '@/app/components/helpheader'

const inter = Inter({
  subsets: ['latin']
})

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-tw" className={inter.className}>
      <Helpheader />
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
      <Footer />
    </html>
    
  )
}
