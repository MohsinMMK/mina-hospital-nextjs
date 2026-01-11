"use client"

import * as React from "react"
import { DayPicker, getDefaultClassNames } from "react-day-picker"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  const defaultClassNames = getDefaultClassNames()

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row gap-2",
        month: "flex flex-col gap-4",
        month_caption: "flex justify-center pt-1 relative items-center w-full",
        caption_label: "text-sm font-medium text-gray-900",
        nav: "flex items-center gap-1",
        button_previous: cn(
          "absolute left-1 h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
          "inline-flex items-center justify-center rounded-md text-sm font-medium",
          "hover:bg-gray-100 hover:text-gray-900"
        ),
        button_next: cn(
          "absolute right-1 h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
          "inline-flex items-center justify-center rounded-md text-sm font-medium",
          "hover:bg-gray-100 hover:text-gray-900"
        ),
        month_grid: "w-full border-collapse",
        weekdays: "flex",
        weekday: "text-gray-500 rounded-md w-9 font-normal text-[0.8rem]",
        week: "flex w-full mt-2",
        day: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20",
          "h-9 w-9 inline-flex items-center justify-center rounded-md",
          "[&:has([aria-selected])]:bg-gray-100"
        ),
        day_button: cn(
          "h-9 w-9 p-0 font-normal",
          "inline-flex items-center justify-center rounded-md text-sm",
          "hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900",
          "transition-colors"
        ),
        range_start: "day-range-start rounded-l-md",
        range_end: "day-range-end rounded-r-md",
        selected: cn(
          "bg-[#2853aa] text-white hover:bg-[#2853aa] hover:text-white",
          "focus:bg-[#2853aa] focus:text-white"
        ),
        today: "bg-gray-100 text-gray-900 font-semibold",
        outside: "text-gray-400 opacity-50",
        disabled: "text-gray-400 opacity-50 cursor-not-allowed",
        range_middle: "aria-selected:bg-gray-100 aria-selected:text-gray-900",
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation }) => {
          const Icon = orientation === "left" ? ChevronLeft : ChevronRight
          return <Icon className="h-4 w-4" />
        },
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
