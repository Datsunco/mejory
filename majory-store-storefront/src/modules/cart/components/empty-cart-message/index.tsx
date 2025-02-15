import { Heading, Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"

const EmptyCartMessage = () => {
  return (
    <div
      className="mx-auto flex max-w-6xl flex-col items-start justify-center px-2 py-44"
      data-testid="empty-cart-message"
    >
      <Heading
        level="h1"
        className="text-3xl-regular font-gilroy flex flex-row items-baseline gap-x-2"
      >
        КОРЗИНА
      </Heading>
      <Text className="text-base-regular mb-6 mt-4 max-w-[32rem]">
        Пока что в вашей корзине пусто. Это срочно нужно исправлять, нажимайте
        на кнопку ниже и выбирайте то что вам по душе.
      </Text>
      <div>
        <InteractiveLink href="/store">В каталог</InteractiveLink>
      </div>
    </div>
  )
}

export default EmptyCartMessage
