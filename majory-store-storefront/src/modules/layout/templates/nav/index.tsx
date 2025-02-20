import { Suspense } from "react"

import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import Link from "next/link"
import Image from "next/image"

import Logo from "../../../../../public/logo.png"
import ScrollButton from "@modules/layout/components/scroll-button"

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="group sticky inset-x-0 top-0 z-[29] border-b border-ui-border-base bg-white font-gilroy shadow-md">
      <header className="relative mx-auto h-16 max-w-7xl duration-200">
        <nav className="content-container text-small-regular flex h-full w-full items-center justify-between text-ui-fg-subtle">
          {/* only smart phone */}
          <div className="flex h-full basis-0 items-center md:hidden">
            <div className="h-full">
              <SideMenu regions={regions} />
            </div>
          </div>

          <div className="flex h-full items-center">
            <LocalizedClientLink
              href="/"
              className="uppercase text-[#720317] hover:text-ui-fg-base"
              data-testid="nav-store-link"
            >
              <Image
                src="/logo.png"
                alt="MEJORY"
                width={250}
                height={50}
                className="w-[250px]"
              />
            </LocalizedClientLink>
          </div>
          {/* Desktop Блок с сылками  */}
          <div className="hidden w-full gap-10 px-10 md:flex">
            <div className="text-[14px] font-[500] uppercase text-[#720317] hover:text-ui-fg-base">
              <ScrollButton targetId="categories-list">КАТАЛОГ</ScrollButton>
            </div>
            <LocalizedClientLink
              href={"/about-us"}
              className="text-[14px] font-[500] uppercase text-[#720317] hover:text-ui-fg-base"
            >
              О нас
            </LocalizedClientLink>
            <LocalizedClientLink
              href={"/contacts"}
              className="text-[14px] font-[500] uppercase text-[#720317] hover:text-ui-fg-base"
            >
              Контакты
            </LocalizedClientLink>
            <LocalizedClientLink
              href={"/delivery"}
              className="text-[14px] font-[500] uppercase text-[#720317] hover:text-ui-fg-base"
            >
              Доставка
            </LocalizedClientLink>
          </div>

          <div className="flex h-full basis-0 items-center justify-end gap-x-6 z-[29]">
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="flex gap-2 hover:text-ui-fg-base"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
