import AboutUsTemplate from "@modules/about-us/templates"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: ' Mejory | О нас',
  description: 'Mejory — это стиль, комфорт и качество. Мы создаем одежду и аксессуары для бальных танцев, которые вдохновляют на движение и помогают выразить себя.',
  keywords: 'о нас Mejory, история бренда, качественная танцевальная одежда, стиль и комфорт, одежда для танцоров',
  openGraph: {
    title: 'О нас | Mejory — Элегантная одежда для танцоров',
    description: 'Mejory — это стиль, комфорт и качество. Мы создаем одежду и аксессуары для бальных танцев, которые вдохновляют на движение и помогают выразить себя.',
    images: ['/images/og-about.jpg'],
    type: 'website',
  },
};

export default async function AboutUs() {
  return <AboutUsTemplate />
}
