"use client"

import { cn } from "@/lib/utils"

interface DoctorPlaceholderProps {
  className?: string
}

export function DoctorPlaceholder({ className }: DoctorPlaceholderProps) {
  return (
    <div
      className={cn(
        "w-full h-full bg-gradient-to-br from-[#e8f4f8] to-[#d1e8ef] flex items-center justify-center",
        className
      )}
    >
      <svg
        viewBox="0 0 200 200"
        className="w-3/4 h-3/4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background circle with pulse animation */}
        <circle
          cx="100"
          cy="100"
          r="90"
          className="fill-[#6682a3]/10 animate-pulse"
        />

        {/* Doctor silhouette - Head */}
        <circle
          cx="100"
          cy="65"
          r="30"
          className="fill-[#6682a3]/30"
        >
          <animate
            attributeName="opacity"
            values="0.3;0.5;0.3"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Doctor silhouette - Body/Coat */}
        <path
          d="M60 120 C60 100, 80 95, 100 95 C120 95, 140 100, 140 120 L140 160 C140 165, 135 170, 130 170 L70 170 C65 170, 60 165, 60 160 Z"
          className="fill-[#6682a3]/30"
        >
          <animate
            attributeName="opacity"
            values="0.3;0.5;0.3"
            dur="2s"
            repeatCount="indefinite"
          />
        </path>

        {/* Stethoscope */}
        <path
          d="M85 110 C85 115, 80 120, 80 130 C80 140, 90 145, 100 145 C110 145, 120 140, 120 130 C120 120, 115 115, 115 110"
          stroke="#f4b942"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          className="opacity-40"
        >
          <animate
            attributeName="opacity"
            values="0.4;0.7;0.4"
            dur="2.5s"
            repeatCount="indefinite"
          />
        </path>

        {/* Stethoscope earpieces */}
        <circle cx="85" cy="108" r="4" className="fill-[#f4b942]/40">
          <animate
            attributeName="opacity"
            values="0.4;0.7;0.4"
            dur="2.5s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="115" cy="108" r="4" className="fill-[#f4b942]/40">
          <animate
            attributeName="opacity"
            values="0.4;0.7;0.4"
            dur="2.5s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Stethoscope chest piece */}
        <circle cx="100" cy="148" r="6" className="fill-[#f4b942]/50">
          <animate
            attributeName="r"
            values="6;7;6"
            dur="1.5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.5;0.8;0.5"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Medical cross on coat */}
        <g className="opacity-50">
          <rect x="95" y="125" width="10" height="20" rx="1" fill="#f4b942">
            <animate
              attributeName="opacity"
              values="0.5;0.8;0.5"
              dur="3s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="90" y="130" width="20" height="10" rx="1" fill="#f4b942">
            <animate
              attributeName="opacity"
              values="0.5;0.8;0.5"
              dur="3s"
              repeatCount="indefinite"
            />
          </rect>
        </g>
      </svg>
    </div>
  )
}
