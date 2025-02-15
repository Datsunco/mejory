"use client"

import { IconBadge, clx } from "@medusajs/ui"
import {
  type InputHTMLAttributes,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react"
import { Minus, Plus } from "lucide-react"

type QuantityInputProps = {
  onChange?: (value: number) => void
  min?: number
  max?: number
  defaultValue?: number
} & Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "min" | "max" | "defaultValue"
>

const CartItemQuantity = forwardRef<HTMLInputElement, QuantityInputProps>(
  (
    { className, onChange, min = 1, max = 99, defaultValue = 1, ...props },
    ref
  ) => {
    const innerRef = useRef<HTMLInputElement>(null)
    const [quantity, setQuantity] = useState(defaultValue)

    useImperativeHandle<HTMLInputElement | null, HTMLInputElement | null>(
      ref,
      () => innerRef.current
    )

    const handleQuantityChange = (value: number) => {
      const newValue = Math.min(Math.max(value, min), max)
      setQuantity(newValue)
      onChange?.(newValue)
    }

    const increment = () => {
      handleQuantityChange(quantity + 1)
    }

    const decrement = () => {
      handleQuantityChange(quantity - 1)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number.parseInt(e.target.value, 10)
      if (!isNaN(value)) {
        handleQuantityChange(value)
      }
    }

    const handleBlur = () => {
      // Reset to min if empty or invalid
      if (!quantity || quantity < min) {
        handleQuantityChange(min)
      }
    }

    return (
      <div className={clx("inline-flex items-center", className)}>
        {/* <IconBadge className="flex items-center txt-compact-small border rounded-none"> */}
        <button
          type="button"
          onClick={decrement}
          disabled={quantity <= min}
          className="flex h-5 w-5 items-center justify-center  transition-colors hover:bg-ui-bg-base-hover disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Decrease quantity"
        >
          <Minus className="h-4 w-4" />
        </button>
        <input
          ref={innerRef}
          type="number"
          inputMode="numeric"
          min={min}
          max={max}
          value={quantity}
          onChange={handleInputChange}
          onBlur={handleBlur}
          className="h-10 w-12 appearance-none border-none bg-transparent px-2 text-center transition-colors [-moz-appearance:textfield] focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          {...props}
        />
        <button
          type="button"
          onClick={increment}
          disabled={quantity >= max}
          className="flex h-5 w-5 items-center justify-center transition-colors hover:bg-ui-bg-base-hover disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Increase quantity"
        >
          <Plus className="h-4 w-4" />
        </button>
        {/* </IconBadge> */}
      </div>
    )
  }
)

CartItemQuantity.displayName = "CartItemQuantity"

export default CartItemQuantity
