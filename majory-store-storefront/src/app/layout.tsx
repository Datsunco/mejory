import { getBaseURL } from "@lib/util/env"
import { Merriweather } from "next/font/google"
import localFont from "next/font/local"
import { Metadata } from "next"
import "styles/globals.css"
import { clx } from "@medusajs/ui"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

const Gilroy = localFont({
  src: [
    {
      path: "../../public/fonts/gilroy-bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gilroy-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gilroy-Semibold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-gilroy",
})

const merriweather = Merriweather({
  weight: ["400", "300", "700"],
  subsets: ["cyrillic"],
  variable: "--font-merriweather",
})

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-mode="light"
      className={`${Gilroy.variable} ${merriweather.variable}`}
    >
      <meta name="yandex-verification" content="285561159d8ebcd5" />
      <body>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
