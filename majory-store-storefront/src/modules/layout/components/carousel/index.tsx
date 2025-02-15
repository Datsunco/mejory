"use client"

import React from "react"
import Autoplay from "embla-carousel-autoplay"
// import { Carousel, CarouselContent, CarouselItem, CarouselNext,  CarouselPrevious} from "@modules/layout/components/carousel"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel"
import { ChevronLeftIcon } from "lucide-react"
import { type CarouselApi } from "./carousel"
import { Card, CardContent } from "../carousel-card"
import { clx } from "@medusajs/ui"

const CarouselComponent = () => {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(2)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 10000,
          }),
        ]}
        setApi={setApi}
        className="mx-auto w-full max-w-6xl"
      >
        <CarouselContent className="-ml-1 flex items-center">
          {Array.from({ length: 5 }).map((_, index) => (
            //   <CarouselItem key={index} className={clx("pl-1",current === index && "basis-1/3",current !== index && "basis-1/3")}>
            <CarouselItem key={index} className={clx("pl-1")}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-[12/16] items-center justify-center p-6 md:aspect-[20/9]">
                    <span className="text-2xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0" />
        <CarouselNext className="absolute right-0" />
      </Carousel>
    </div>
  )
}

export default CarouselComponent
