import { Toaster } from "@/components/ui/Toaster"
import "../styles/global.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "@/components/layout/Header"
import Sider from "@/components/layout/Sider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body style={{ pointerEvents: "all!important" }} className={inter.className}>
        <Header />
        <main className='flex w-full h-[calc(100vh-56px)]'>
          <Sider />
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  )
}
