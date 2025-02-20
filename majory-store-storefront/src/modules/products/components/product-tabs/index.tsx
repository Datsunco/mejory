"use client"

import Back from "@modules/common/icons/back"
import FastDelivery from "@modules/common/icons/fast-delivery"
import Refresh from "@modules/common/icons/refresh"

import Accordion from "./accordion"
import { HttpTypes } from "@medusajs/types"
import { ArrowRightIcon } from "lucide-react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type ProductTabsProps = {
  product: HttpTypes.StoreProduct
}

const ProductTabs = ({ product }: ProductTabsProps) => {
  const tabs = [
    {
      label: "Данные о товаре",
      component: <ProductInfoTab product={product} />,
    },
    {
      label: "Доставка и возрат",
      component: <ShippingInfoTab />,
    },
  ]

  return (
    <div className="w-full">
            <LocalizedClientLink
        href="/size-table"
        className="txt-medium flex justify-between border-t-[1px] px-[5px] py-4 font-sans text-sm font-normal text-ui-fg-subtle"
      >
        Таблица размеров
        <ArrowRightIcon className="mr-1 h-5 w-5" />
      </LocalizedClientLink>
      <Accordion type="multiple">
        {tabs.map((tab, i) => (
          <Accordion.Item
            key={i}
            title={tab.label}
            headingSize="medium"
            value={tab.label}
          >
            {tab.component}
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  )
}

const ProductInfoTab = ({ product }: ProductTabsProps) => {
  return (
    <div className="text-small-regular py-8">
      <div className="grid grid-cols-2 gap-x-8">
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-semibold">Материал</span>
            <p>{product.material ? product.material : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">Страна производитель</span>
            <p>{product.origin_country ? product.origin_country : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">Тип</span>
            <p>{product.type ? product.type.value : "-"}</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-semibold">Вес</span>
            <p>{product.weight ? `${product.weight} g` : "-"}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const ShippingInfoTab = () => {
  return (
    <div className="text-small-regular py-8">
      <div className="grid grid-cols-1 gap-y-8">
        <div className="flex items-start gap-x-2">
          <FastDelivery />
          <div>
            <span className="font-semibold">Доставка по всей России</span>
            <p className="max-w-sm">
              Осуществляется транспортной компанией СДЭК или другими удобными
              для вас способами. Расходы по отправке товара несет покупатель.
              Предоплата составляет 100%
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <FastDelivery />
          <div>
            <span className="font-semibold">Доставка в другие страны</span>
            <p className="max-w-sm">
              Осуществляется заранее обговоренными с менеджером транспортными
              компаниями. Расходы по отправке товара несет покупатель.
              Предоплата составляет 100%
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Refresh />
          <div>
            <span className="font-semibold">Обмен и возврат</span>
            <p className="max-w-sm">
              Возможен в течение 5-ти календарных дней с момента получения
              товара. При условии, что товар остается в первоначальном виде.
              Расходы по отправке товара покупатель осуществляет за свой счет
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductTabs
