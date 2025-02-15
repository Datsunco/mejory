import { Text, clx } from "@medusajs/ui"
import { VariantPrice } from "types/global"

export default async function PreviewPrice({ price }: { price: VariantPrice }) {
  if (!price) {
    return null
  }
  console.log(price)

  return (
    <>
      {price.price_type === "sale" && (
        <Text
          className="text-ui-fg-muted line-through"
          data-testid="original-price"
        >
          {price.original_price_number}
        </Text>
      )}
      <Text
        className={clx("font-merriweather text-lg font-normal", {
          "text-ui-fg-interactive": price.price_type === "sale",
        })}
        data-testid="price"
      >
        {price.calculated_price_number + " р."}
      </Text>
    </>
  )
}
