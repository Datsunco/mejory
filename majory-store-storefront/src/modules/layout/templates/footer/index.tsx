import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import { Text, clx } from "@medusajs/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"
import Image from "next/image"
import Link from "next/link"

export default async function Footer() {
  const { collections } = await listCollections({
    fields: "*products",
  })
  const productCategories = await listCategories()

  return (
    <footer className="font-gilroy bg-[#660016] py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
          {/* Contact Information */}
          <div className="flex justify-between">
            <div className="space-y-2">
              <h2 className="mb-4 text-xl">Контакты</h2>
              <p>+7(xxx)xxx-xx-xx</p>
              <p>mejory.ru</p>
              <p>Inst: @_mejory_</p>
            </div>
            <div className="space-y-2">
              <h2 className="mb-4 text-xl">Доставка</h2>
              <p>+7(xxx)xxx-xx-xx</p>
              <p>mejory.ru</p>
              <p>Inst: @_mejory_</p>
            </div>
          </div>

          {/* Center Logo */}
          <div className="flex justify-center">
            <Image
              src="/footerlogo.png"
              alt="Mejory Logo"
              width={300}
              height={100}
              className="object-contain"
            />
          </div>

          <div className="flex justify-between">
            <div className="space-y-2">
              <h2 className="mb-4 text-xl">Таблица размеров</h2>
              <p>+7(xxx)xxx-xx-xx</p>
              <p>mejory.ru</p>
              <p>Inst: @_mejory_</p>
            </div>
            <div className="space-y-2">
              <h2 className="mb-4 text-xl">О нас</h2>
              <p>+7(xxx)xxx-xx-xx</p>
              <p>mejory.ru</p>
              <p>Inst: @_mejory_</p>
            </div>
          </div>

          {/* Navigation Links */}
          {/* <div className="flex justify-end gap-8">
            <Link
              href="/size-table"
              className="transition-opacity hover:opacity-80"
            >
              Таблица размеров
            </Link>
            <Link href="/about" className="transition-opacity hover:opacity-80">
              О нас
            </Link>
          </div> */}
        </div>
        <div className="mt-8 flex w-full justify-between text-ui-fg-muted">
          {" "}
          <Text className="text-white/60">
            © {new Date().getFullYear()} Mejory Store. Все права защищены.{" "}
          </Text>
          {/* МЕсто для ссылки на меня как разраба*/}{" "}
        </div>
      </div>
    </footer>
    // <footer className="bg-[#720317] border-t border-ui-border-base w-full">
    //   <div className="content-container flex flex-col w-full">
    //     <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-10">
    //       <div>
    //         <LocalizedClientLink
    //           href="/"
    //           className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase"
    //         >
    //           Medusa Store
    //         </LocalizedClientLink>
    //       </div>
    //       <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
    //         {productCategories && productCategories?.length > 0 && (
    //           <div className="flex flex-col gap-y-2">
    //             <span className="txt-small-plus txt-ui-fg-base">
    //               Categories
    //             </span>
    //             <ul
    //               className="grid grid-cols-1 gap-2"
    //               data-testid="footer-categories"
    //             >
    //               {productCategories?.slice(0, 6).map((c) => {
    //                 if (c.parent_category) {
    //                   return
    //                 }

    //                 const children =
    //                   c.category_children?.map((child) => ({
    //                     name: child.name,
    //                     handle: child.handle,
    //                     id: child.id,
    //                   })) || null

    //                 return (
    //                   <li
    //                     className="flex flex-col gap-2 text-ui-fg-subtle txt-small"
    //                     key={c.id}
    //                   >
    //                     <LocalizedClientLink
    //                       className={clx(
    //                         "hover:text-ui-fg-base",
    //                         children && "txt-small-plus"
    //                       )}
    //                       href={`/categories/${c.handle}`}
    //                       data-testid="category-link"
    //                     >
    //                       {c.name}
    //                     </LocalizedClientLink>
    //                     {children && (
    //                       <ul className="grid grid-cols-1 ml-3 gap-2">
    //                         {children &&
    //                           children.map((child) => (
    //                             <li key={child.id}>
    //                               <LocalizedClientLink
    //                                 className="hover:text-ui-fg-base"
    //                                 href={`/categories/${child.handle}`}
    //                                 data-testid="category-link"
    //                               >
    //                                 {child.name}
    //                               </LocalizedClientLink>
    //                             </li>
    //                           ))}
    //                       </ul>
    //                     )}
    //                   </li>
    //                 )
    //               })}
    //             </ul>
    //           </div>
    //         )}
    //         {collections && collections.length > 0 && (
    //           <div className="flex flex-col gap-y-2">
    //             <span className="txt-small-plus txt-ui-fg-base">
    //               Collections
    //             </span>
    //             <ul
    //               className={clx(
    //                 "grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small",
    //                 {
    //                   "grid-cols-2": (collections?.length || 0) > 3,
    //                 }
    //               )}
    //             >
    //               {collections?.slice(0, 6).map((c) => (
    //                 <li key={c.id}>
    //                   <LocalizedClientLink
    //                     className="hover:text-ui-fg-base"
    //                     href={`/collections/${c.handle}`}
    //                   >
    //                     {c.title}
    //                   </LocalizedClientLink>
    //                 </li>
    //               ))}
    //             </ul>
    //           </div>
    //         )}
    //         <div className="flex flex-col gap-y-2">
    //           <span className="txt-small-plus txt-ui-fg-base">Medusa</span>
    //           <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
    //             <li>
    //               <a
    //                 href="https://github.com/medusajs"
    //                 target="_blank"
    //                 rel="noreferrer"
    //                 className="hover:text-ui-fg-base"
    //               >
    //                 GitHub
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 href="https://docs.medusajs.com"
    //                 target="_blank"
    //                 rel="noreferrer"
    //                 className="hover:text-ui-fg-base"
    //               >
    //                 Documentation
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 href="https://github.com/medusajs/nextjs-starter-medusa"
    //                 target="_blank"
    //                 rel="noreferrer"
    //                 className="hover:text-ui-fg-base"
    //               >
    //                 Source code
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="flex w-full mb-16 justify-between text-ui-fg-muted">
    //       <Text className="text-white/60">
    //         © {new Date().getFullYear()} Mejory Store. Все права защищены.
    //       </Text>
    //       {/* МЕсто для ссылки на меня как разраба*/}
    //     </div>
    //   </div>
    // </footer>
  )
}
