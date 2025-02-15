import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import CarouselComponent from "@modules/layout/components/carousel"
import AboutUs from "@modules/home/components/about-us"
import CategoryList from "@modules/home/components/categories-list"
import ProductList from "@modules/home/components/product-list"
import AboutUsTemplate from "@modules/about-us/templates"

export const metadata: Metadata = {
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  const region = await getRegion(countryCode)

  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <div className="mb-20 md:mt-5">
        <CarouselComponent />
      </div>
      <CategoryList />
      <ProductList
        title="Боди и Топы"
        categoryId="pcat_01JKEBD112QCR0R0TET8W71WHF"
        type="body"
      />
      <ProductList
        title="Платья"
        categoryId="pcat_01JKG18A6NZ5QHJ14ZD01CW0Z0"
        type="dresses"
      />
      <ProductList
        title="Юбки"
        categoryId="pcat_01JKG18XRD4QT053565A1HQ1FD"
        type="skirt"
      />
      <AboutUsTemplate />
      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>
    </>
  )
}
