"use client"

import { useState } from "react"
import Image from "next/image"
import { DoctorPlaceholder } from "./doctor-placeholder"

interface DoctorImageProps {
  src: string | null | undefined
  alt: string
  className?: string
}

export function DoctorImage({ src, alt, className }: DoctorImageProps) {
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const showPlaceholder = !src || hasError

  if (showPlaceholder) {
    return <DoctorPlaceholder className={className} />
  }

  return (
    <>
      {isLoading && (
        <div className="absolute inset-0">
          <DoctorPlaceholder />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        onError={() => setHasError(true)}
        onLoad={() => setIsLoading(false)}
      />
    </>
  )
}
