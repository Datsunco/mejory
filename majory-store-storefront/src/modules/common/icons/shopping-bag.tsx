import React from "react"
import { IconProps } from "types/icon"

const ShoppingBag: React.FC<IconProps> = ({
  size = "24",
  color = "currentColor",
  ...attributes
}) => (
  <svg
    id="icon-cart-active"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    {...attributes}
  >
    <path
      fillRule="evenodd"
      d="M16.584 5a5.001 5.001 0 0 0-9.168 0H6.341A6.002 6.002 0 0 1 17.66 5h-1.075Zm0 0H7.416A4.983 4.983 0 0 0 7 7v2H6V7c0-.701.12-1.374.341-2H2v16h20V5h-4.341A5.99 5.99 0 0 1 18 7v2h-1V7c0-.711-.148-1.388-.416-2Z"
    />
  </svg>
)

export default ShoppingBag
