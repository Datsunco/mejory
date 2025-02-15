import { Description } from "@headlessui/react"
import { listCategories } from "@lib/data/categories"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "@modules/products/components/thumbnail"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import React from "react"

const categories = [
  {
    title: "Боди и Топы",
    description: "Очень интересные свечи",
    href: "/products/body",
    image: [
      {
        url: "/svecha.jpg",
      },
      {
        url: "/svecha2.jpg",
      },
    ],
    position: "0 0",
  },
  {
    title: "Платья",
    description: "Со стразами и без только здесь",
    href: "/products/diffusers",
    image: [
      {
        url: "/svecha.jpg",
      },
      {
        url: "/svecha2.jpg",
      },
    ],
    position: "100% 0",
  },
  {
    title: "Юбки",
    description: "Новая коллекция до колен",
    href: "/products/sprays",
    image: [
      {
        url: "/svecha.jpg",
      },
      {
        url: "/svecha2.jpg",
      },
    ],
    position: "0 100%",
  },
  {
    title: "Travel-формат",
    description: "Пока не придумал но скоро",
    href: "/products/travel",
    image: [
      {
        url: "/svecha.jpg",
      },
      {
        url: "/svecha2.jpg",
      },
    ],
    position: "100% 100%",
  },
]

const CategoryList = async () => {
  const productCategories = await listCategories()

  console.log(productCategories)

  return (
    // <div
    //   id="categories-list"
    //   className="mx-auto mb-40 grid max-w-6xl grid-cols-1 items-center justify-center gap-x-10 gap-y-24 md:grid-cols-3"
    // >
    //   {categories.map((category) => (
    // <LocalizedClientLink
    //   key={category.title}
    //   href={category.href}
    //   className="group"
    // >
    //   <div
    //     data-testid="product-wrapper"
    //     className="flex flex-col items-center justify-center text-xl"
    //   >
    //     <h1 className="font-gilroy mb-1 w-full text-start text-2xl font-semibold">
    //       {category.title.toLocaleUpperCase()}
    //     </h1>
    //     <h2 className="font-gilroy mb-4 flex w-full items-center gap-2 text-start text-sm">
    //       {category.description.toLocaleUpperCase()}
    //       <ArrowRight color="#720317" className="h-4 w-4" />
    //     </h2>
    //     <Thumbnail
    //       images={category.image}
    //       size="medium+"
    //       isFeatured={true}
    //     />
    //   </div>
    // </LocalizedClientLink>
    // </div>
    <div
      id="categories-list"
      className="mx-auto mb-40 grid max-w-6xl grid-cols-1 items-center justify-center md:grid-cols-2"
    >
      {categories.map((category) => (
        <LocalizedClientLink
          key={category.title}
          href={category.href}
          className="group relative aspect-square h-[250px] w-full overflow-hidden md:h-[400px]"
        >
          <div className="absolute inset-0 z-10 bg-black/20 transition-opacity group-hover:bg-black/30" />
          <div
            className="relative h-full w-full"
            style={{
              backgroundImage: `url(${category.image[0].url})`,
              backgroundPosition: category.position,
              // backgroundSize: "200% 200%",
              backgroundSize: "cover",
            }}
          >
            <div className="absolute bottom-6 left-6 z-20">
              <h2 className="text-3xl font-light tracking-wide text-white">
                {category.title}
              </h2>
            </div>
          </div>
        </LocalizedClientLink>
      ))}
    </div>
  )
}

export default CategoryList
