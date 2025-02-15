import { Container, clx } from "@medusajs/ui"
import Image from "next/image"
import React from "react"

import PlaceholderImage from "@modules/common/icons/placeholder-image"

type ThumbnailProps = {
  thumbnail?: string | null
  // TODO: Fix image typings
  images?: any[] | null
  size?: "small" | "medium" | "medium+" | "large" | "full" | "square"
  isFeatured?: boolean
  className?: string
  "data-testid"?: string
}

const Thumbnail: React.FC<ThumbnailProps> = ({
  thumbnail,
  images,
  size = "small",
  isFeatured,
  className,
  "data-testid": dataTestid,
}) => {
  const initialImage = thumbnail || images?.[0]?.url
  const secondImage = images?.[1]?.url || thumbnail

  return (
    <Container
      className={clx(
        "relative z-[10] w-full overflow-hidden rounded-large bg-ui-bg-subtle p-4 shadow-elevation-card-rest transition-shadow duration-150 ease-in-out group-hover:shadow-elevation-card-hover",
        className,
        {
          "aspect-[11/14]": isFeatured,
          "aspect-[9/16]": !isFeatured && size !== "square",
          "aspect-[1/1]": size === "square",
          "w-[180px]": size === "small",
          "w-[290px]": size === "medium",
          "w-[360px]": size === "medium+",
          "w-[440px]": size === "large",
          "w-full": size === "full",
        }
      )}
      data-testid={dataTestid}
    >
      <ImageOrPlaceholder image={initialImage} size={size} />
      <ImageOrPlaceholder
        image={secondImage}
        size={size}
        className="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      {/* <div className="relative mb-4 aspect-[3/4]">
        <Image
          src={initialImage}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 300px"
        />
        <Image
          src={secondImage} // Replace with your hover image path
          alt={product.name}
          fill
          className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          sizes="(max-width: 768px) 100vw, 300px"
        />
      </div> */}
    </Container>
  )
}

const ImageOrPlaceholder = ({
  image,
  size,
  className,
}: Pick<ThumbnailProps, "size"> & { image?: string; className?: string }) => {
  return image ? (
    <Image
      src={image}
      alt="Thumbnail"
      className={clx("absolute inset-0 object-cover object-center", className)}
      draggable={false}
      quality={50}
      sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
      fill
    />
  ) : (
    <div
      className={clx(
        "absolute inset-0 flex h-full w-full items-center justify-center",
        className
      )}
    >
      <PlaceholderImage size={size === "small" ? 16 : 24} />
    </div>
  )
}

export default Thumbnail
