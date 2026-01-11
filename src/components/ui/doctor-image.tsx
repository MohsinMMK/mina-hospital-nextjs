"use client"

import { useState } from "react"
import Image from "next/image"
import { DoctorPlaceholder } from "./doctor-placeholder"

interface DoctorImageProps {
  src: string | null | undefined
  alt: string
  className?: string
  width?: number
  height?: number
  fill?: boolean
}

export function DoctorImage({ src, alt, className, width, height, fill = true }: DoctorImageProps) {
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const showPlaceholder = !src || hasError

  if (showPlaceholder) {
    if (width && height) {
      return (
        <div
          style={{ width, height }}
          className={className}
        >
          <DoctorPlaceholder className="w-full h-full" />
        </div>
      )
    }
    return <DoctorPlaceholder className={className} />
  }

  if (width && height) {
    return (
      <>
        {isLoading && (
          <div style={{ width, height }} className={className}>
            <DoctorPlaceholder className="w-full h-full" />
          </div>
        )}
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`${className} ${isLoading ? 'invisible absolute' : ''}`}
          onError={() => setHasError(true)}
          onLoad={() => setIsLoading(false)}
        />
      </>
    )
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
        fill={fill}
        className={className}
        onError={() => setHasError(true)}
        onLoad={() => setIsLoading(false)}
      />
    </>
  )
}
