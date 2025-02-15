"use client"

import FilterRadioGroup from "@modules/common/components/filter-radio-group"
import SortByPopover from "@modules/common/components/sort-by-popover"

export type SortOptions = "price_asc" | "price_desc" | "created_at"

type SortProductsProps = {
  sortBy: SortOptions
  setQueryParams: (name: string, value: SortOptions) => void
  "data-testid"?: string
}

const sortOptions: {
  value: SortOptions
  label: string
}[] = [
  {
    value: "created_at",
    label: "Самые новые",
  },
  {
    value: "price_asc",
    label: "Самые дешевые",
  },
  {
    value: "price_desc",
    label: "Самые дорогие",
  },
]

const SortProducts = ({
  "data-testid": dataTestId,
  sortBy,
  setQueryParams,
}: SortProductsProps) => {
  const handleChange = (value: SortOptions) => {
    setQueryParams("sortBy", value)
  }

  return (
    <>
      {/* <FilterRadioGroup
        title="Sort by"
        items={sortOptions}
        value={sortBy}
        handleChange={handleChange}
        data-testid={dataTestId}
      /> */}
      <SortByPopover
        title="Sort by"
        items={sortOptions}
        value={sortBy}
        handleChange={handleChange}
        data-testid={dataTestId}
      />
    </>
  )
}

export default SortProducts
