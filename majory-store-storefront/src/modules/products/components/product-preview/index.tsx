import { Text } from "@medusajs/ui"
import { listProducts } from "@lib/data/products"
import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"

export default async function ProductPreview({
  product,
  isFeatured,
  region,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {
  // const pricedProduct = await listProducts({
  //   regionId: region.id,
  //   queryParams: { id: [product.id!] },
  // }).then(({ response }) => response.products[0])

  // if (!pricedProduct) {
  //   return null
  // }

  const { cheapestPrice } = getProductPrice({
    product,
  })

  return (
    <LocalizedClientLink href={`/products/${product.handle}`} className="group">
      <div data-testid="product-wrapper" className="flex flex-col items-center">
        <Thumbnail
          thumbnail={product.thumbnail}
          images={product.images}
          size="medium"
          isFeatured={isFeatured}
        />
        <div className="mt-2 space-y-2 text-center">
          <div className="text-2xl font-light tracking-wide">
            {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
          </div>
          <h2 className="font-merriweather text-lg font-medium tracking-wide">
            {product.title}
          </h2>
          <p className="text-sm font-light text-gray-600">{product.subtitle}</p>
        </div>
      </div>
    </LocalizedClientLink>
  )
}
