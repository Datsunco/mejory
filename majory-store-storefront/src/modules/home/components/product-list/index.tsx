import { listProducts, listProductsWithSort } from "@lib/data/products"
import { getRegion } from "@lib/data/regions"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ProductPreview from "@modules/products/components/product-preview"
import { PaginatedProductsParams } from "@modules/store/templates/paginated-products"
import { ArrowRight, ChevronLeft, ChevronRight, Heart } from "lucide-react"
import Image from "next/image"
import React from "react"

interface ProductListProps {
  categoryId: string
  title: string
  type: string
}

const ProductList = async ({ title, type, categoryId }: ProductListProps) => {
  const queryParams: PaginatedProductsParams = {
    limit: 12,
    category_id: [categoryId],
  }

  const region = await getRegion("ru")

  if (!region) {
    return null
  }

  let {
    response: { products, count },
  } = await listProducts({
    pageParam: 1,
    queryParams,
    countryCode: "ru",
  })

  return (
    <div className="max-w-6xl py-6 font-gilroy md:mx-auto md:px-0">
      <LocalizedClientLink
        href={`/categories/${type}`}
        className="mb-6 flex items-center justify-between"
      >
        <h1 className="text-2xl font-semibold text-[#8B0000]">
          {title.toLocaleUpperCase()}
        </h1>
        <div className="flex items-center justify-center gap-2 rounded-lg p-2 pl-5 text-[#8B0000]">
          <span className="text-[15px] font-[500] hover:underline">
            Все товары
          </span>
          <ChevronRight className="h-5 w-5" />
        </div>
      </LocalizedClientLink>

      <div className="scrollbar-hide md:-mx-2 flex gap-8 overflow-x-auto px-2 pb-6">
        {products.map((product) => (
          <ProductPreview
            key={product.id}
            product={product}
            isFeatured={true}
            region={region}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductList
