import SizeTableTemplate from "@modules/size-table/templates"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mejory | Таблица размеров",
  description:
    "Используйте нашу таблицу размеров, чтобы подобрать идеальную одежду для бальных танцев. Mejory заботится о вашем комфорте и стиле.",
  keywords:
    "таблица размеров Mejory, размеры танцевальной одежды, подбор размера, размеры платьев для танцев",
  openGraph: {
    title: "Таблица размеров | Mejory — Подберите правильный размер",
    description:
      "Используйте нашу таблицу размеров, чтобы подобрать идеальную одежду для бальных танцев. Mejory заботится о вашем комфорте и стиле.",
    images: ["/images/og-size-chart.jpg"],
    type: "website",
  },
}

export default async function SizeTable() {
  return <SizeTableTemplate />
}
