import DeliveryTemplate from "@modules/delivery/templates"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mejory | Доставка",
  description:
    "Узнайте о наших условиях доставки. Mejory предлагает быструю и надежную доставку одежды и аксессуаров для бальных танцев по всему миру.",
  keywords:
    "доставка Mejory, условия доставки, сроки доставки, доставка танцевальной одежды",
  openGraph: {
    title: "Доставка | Mejory — Условия и сроки доставки",
    description:
      "Узнайте о наших условиях доставки. Mejory предлагает быструю и надежную доставку одежды и аксессуаров для бальных танцев по всему миру.",
    images: ["/images/og-delivery.jpg"],
    type: "website",
  },
}

export default async function Delivery() {
  return <DeliveryTemplate />
}
