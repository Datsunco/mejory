import * as Popover from "@radix-ui/react-popover"
import { ChevronDown, EllipseMiniSolid } from "@medusajs/icons"
import { Label, Text, clx } from "@medusajs/ui"
import React, { useState } from "react"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import { CheckIcon, ChevronUp } from "lucide-react"

type SortByPopoverProps = {
  title: string
  items: {
    value: SortOptions
    label: string
  }[]
  value: string
  handleChange: (value: SortOptions) => void
  "data-testid"?: string
}

const SortByPopover = ({
  title,
  items,
  value,
  handleChange,
  "data-testid": dataTestId,
}: SortByPopoverProps) => {
  const [isOpened, setIsOpened] = useState(false)
  if (!items || items.length === 0) {
    return null // or return a fallback UI
  }

  return (
    <Popover.Root open={isOpened} onOpenChange={setIsOpened}>
      <Popover.Trigger asChild>
        <button
          className="flex w-auto min-w-[200px] items-center justify-end gap-x-2 rounded-lg p-2"
          data-testid={dataTestId}
        >
          {/* <Text className="txt-compact-small-plus text-ui-fg-muted">
            {title}
          </Text> */}
          <span className=" text-[12px] text-ui-fg-base">
            {items.find((i) => i.value === value)?.label.toLocaleLowerCase()}
          </span>
          <ChevronUp
            className={clx(
              "w-4 h-4 transition-all duration-500 ease-in-out",
              isOpened && "-scale-y-100"
            )}
          />
          {/* {isOpened ? <ChevronUp /> : <ChevronDown />} */}
        </button>
      </Popover.Trigger>

      <Popover.Content
        align="start"
        sideOffset={8}
        className="z-50 min-w-[200px] bg-ui-bg-base p-2 shadow-xl"
      >
        <div className="flex flex-col gap-y-2">
          {items.map((i) => (
            <button
              key={i.value}
              className={clx(
                "flex items-center gap-x-2 p-2 text-left hover:bg-ui-bg-base-hover",
                {
                  "bg-ui-bg-base-pressed": i.value === value,
                }
              )}
              onClick={() => handleChange(i.value)}
              data-testid="popover-item"
              data-active={i.value === value}
            >
              {i.value === value ? (
                <CheckIcon className="h-4 w-4" />
              ) : (
                <div className="h-4 w-4" />
              )}
              <Label
                className={clx("font-merriweather text-[12px]", {
                  "text-ui-fg-base": i.value === value,
                  "text-ui-fg-subtle": i.value !== value,
                })}
              >
                {i.label}
              </Label>
            </button>
          ))}
        </div>
      </Popover.Content>
    </Popover.Root>
  )
}

export default SortByPopover
