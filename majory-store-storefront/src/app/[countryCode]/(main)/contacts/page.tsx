import ContactsTemplate from "@modules/contacts/templates"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mejory | Контакты",
  description:
    "Свяжитесь с Mejory для вопросов и заказов. Мы всегда рады помочь вам с выбором одежды и аксессуаров для бальных танцев.",
  keywords:
    "контакты Mejory, связаться с Mejory, поддержка клиентов, заказ танцевальной одежды",
  openGraph: {
    title: "Контакты | Mejory — Свяжитесь с нами",
    description:
      "Свяжитесь с Mejory для вопросов и заказов. Мы всегда рады помочь вам с выбором одежды и аксессуаров для бальных танцев.",
    images: ["/images/og-contacts.jpg"],
    type: "website",
  },
}

export default async function Contacts() {
  return <ContactsTemplate />
}
