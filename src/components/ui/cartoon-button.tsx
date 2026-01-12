"use client"

import Link from "next/link"
import React from "react"

interface CartoonButtonProps {
  label?: string;
  color?: string;
  hasHighlight?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  href?: string;
  children?: React.ReactNode;
}

/**
 * CartoonButton - An animated button with a sweep highlight effect.
 * 
 * Features:
 * - Hover lift animation (-translate-y-1)
 * - Retro shadow effect on hover
 * - Sweep highlight animation on hover
 * - Supports both button clicks and link navigation
 * 
 * Usage:
 * ```tsx
 * // As a button
 * <CartoonButton label="Click Me" onClick={handleClick} />
 * 
 * // As a link
 * <CartoonButton label="Book Now" href="/booking" />
 * 
 * // With custom children
 * <CartoonButton href="/appointment">
 *   <Calendar className="h-4 w-4 mr-2" />
 *   Book Appointment
 * </CartoonButton>
 * ```
 */
export function CartoonButton({
  label,
  color = 'bg-gray-900',
  hasHighlight = true,
  disabled = false,
  onClick,
  className = '',
  type = 'button',
  href,
  children,
}: CartoonButtonProps) {
  const handleClick = () => {
    if (disabled) return;
    onClick?.();
  };

  const buttonClasses = `
    relative h-10 sm:h-12 px-4 sm:px-6 text-sm sm:text-base rounded-full font-semibold text-white 
    border-2 border-neutral-800 transition-all duration-150 overflow-hidden group
    flex items-center justify-center w-full
    ${color} hover:shadow-[0_4px_0_0_#262626]
    ${disabled ? 'opacity-50 pointer-events-none' : 'hover:-translate-y-1 active:translate-y-0 active:shadow-none'}
  `.trim();

  const content = (
    <>
      <span className="relative z-10 whitespace-nowrap flex items-center justify-center gap-2">
        {children || label}
      </span>
      {hasHighlight && !disabled && (
        <div className="absolute top-1/2 left-[-100%] w-16 h-24 bg-white/30 -translate-y-1/2 rotate-12 transition-all duration-500 ease-in-out group-hover:left-[200%]" />
      )}
    </>
  );

  // If href is provided, render as a Link
  if (href && !disabled) {
    return (
      <div className={`inline-block ${className}`}>
        <Link href={href} className={`${buttonClasses} inline-flex`}>
          {content}
        </Link>
      </div>
    );
  }

  // Otherwise render as a button
  return (
    <div className={`inline-block ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'} ${className}`}>
      <button
        type={type}
        disabled={disabled}
        onClick={handleClick}
        className={buttonClasses}
      >
        {content}
      </button>
    </div>
  );
}
