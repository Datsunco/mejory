import ItemsTemplate from "./items"
import Summary from "./summary"
import EmptyCartMessage from "../components/empty-cart-message"
import SignInPrompt from "../components/sign-in-prompt"
import Divider from "@modules/common/components/divider"
import { HttpTypes } from "@medusajs/types"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import { Suspense } from "react"
import RelatedProducts from "@modules/products/components/related-products"

const CartTemplate = ({
  cart,
  customer,
}: {
  cart: HttpTypes.StoreCart | null
  customer: HttpTypes.StoreCustomer | null
}) => {
  return (
    <div className="content-container max-w-7xl py-12">
      <div className="pb-20" data-testid="cart-container">
        {cart?.items?.length ? (
          <div className="grid grid-cols-1 gap-x-40 small:grid-cols-[1fr_360px]">
            <div className="flex flex-col gap-y-6 bg-white py-6">
              {/* {!customer && (
                <>
                  <SignInPrompt />
                  <Divider />
                </>
              )} */}
              <ItemsTemplate cart={cart} />
            </div>
            <div className="relative">
              <div className="sticky top-12 flex flex-col gap-y-8">
                {cart && cart.region && (
                  <>
                    <div className="bg-white py-6">
                      <Summary cart={cart as any} />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <EmptyCartMessage />
          </div>
        )}
      </div>
      <Suspense fallback={<SkeletonRelatedProducts />}>
        <RelatedProducts countryCode={"ru"} />
      </Suspense>
    </div>
  )
}

export default CartTemplate
