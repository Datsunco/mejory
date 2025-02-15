import AboutUsTemplate from "@modules/about-us/templates"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "О нас",
  description: "Наша история",
}

export default async function AboutUs() {
  return <AboutUsTemplate />
}
