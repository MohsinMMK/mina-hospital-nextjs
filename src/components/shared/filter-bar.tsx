"use client"

import * as React from "react"
import { Search, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export interface FilterOption {
  value: string
  label: string
  count?: number
}

export interface FilterConfig {
  id: string
  label: string
  icon?: React.ReactNode
  options: FilterOption[]
  placeholder?: string
}

interface FilterBarProps {
  filters: FilterConfig[]
  values: Record<string, string>
  onFilterChange: (filterId: string, value: string) => void
  onClearAll: () => void
  searchValue?: string
  onSearchChange?: (value: string) => void
  searchPlaceholder?: string
  showSearch?: boolean
  resultsCount?: number
  resultsLabel?: string
  className?: string
}

export function FilterBar({
  filters,
  values,
  onFilterChange,
  onClearAll,
  searchValue = "",
  onSearchChange,
  searchPlaceholder = "Search...",
  showSearch = true,
  resultsCount,
  resultsLabel = "results",
  className,
}: FilterBarProps) {
  // Get active filters (non-empty values that aren't 'all')
  const activeFilters = Object.entries(values).filter(
    ([, value]) => value && value !== "all"
  )

  const hasActiveFilters = activeFilters.length > 0 || searchValue.length > 0

  return (
    <div className={cn("space-y-4", className)}>
      {/* Main Filter Row */}
      <div className="bg-white border rounded-xl p-4 shadow-sm">
        <div className="flex flex-col gap-4">
          {/* Search + Filters Row */}
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Input */}
            {showSearch && onSearchChange && (
              <div className="relative flex-1 min-w-0 lg:max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  value={searchValue}
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder={searchPlaceholder}
                  className="pl-10 h-11 bg-gray-50 border-gray-200"
                />
                {searchValue && (
                  <button
                    onClick={() => onSearchChange("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            )}

            {/* Filter Dropdowns */}
            <div className="flex flex-wrap gap-2 flex-1">
              {filters.map((filter) => (
                <Select
                  key={filter.id}
                  value={values[filter.id] || "all"}
                  onValueChange={(value) => onFilterChange(filter.id, value)}
                >
                  <SelectTrigger className="h-11 min-w-[140px] max-w-[200px] bg-gray-50 border-gray-200">
                    <div className="flex items-center gap-2">
                      {filter.icon && (
                        <span className="text-gray-500">{filter.icon}</span>
                      )}
                      <SelectValue placeholder={filter.placeholder || filter.label} />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">
                      <span className="flex items-center justify-between w-full">
                        All {filter.label}
                      </span>
                    </SelectItem>
                    {filter.options.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        <span className="flex items-center justify-between w-full gap-2">
                          {option.label}
                          {option.count !== undefined && (
                            <span className="text-xs text-gray-400">
                              ({option.count})
                            </span>
                          )}
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ))}

              {/* Clear All Button */}
              {hasActiveFilters && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClearAll}
                  className="h-11 text-gray-500 hover:text-gray-700"
                >
                  <X className="h-4 w-4 mr-1" />
                  Clear All
                </Button>
              )}
            </div>
          </div>

          {/* Active Filters Pills + Results Count */}
          {(hasActiveFilters || resultsCount !== undefined) && (
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t">
              {/* Active Filter Pills */}
              {activeFilters.map(([filterId, value]) => {
                const filter = filters.find((f) => f.id === filterId)
                const option = filter?.options.find((o) => o.value === value)
                if (!filter || !option) return null

                return (
                  <Badge
                    key={filterId}
                    variant="secondary"
                    className="bg-[#003366]/10 text-[#003366] hover:bg-[#003366]/20 cursor-pointer px-3 py-1.5"
                    onClick={() => onFilterChange(filterId, "all")}
                  >
                    <span className="font-medium">{filter.label}:</span>
                    <span className="ml-1">{option.label}</span>
                    <X className="h-3 w-3 ml-2" />
                  </Badge>
                )
              })}

              {/* Search Pill */}
              {searchValue && (
                <Badge
                  variant="secondary"
                  className="bg-[#003366]/10 text-[#003366] hover:bg-[#003366]/20 cursor-pointer px-3 py-1.5"
                  onClick={() => onSearchChange?.("")}
                >
                  <span className="font-medium">Search:</span>
                  <span className="ml-1">&quot;{searchValue}&quot;</span>
                  <X className="h-3 w-3 ml-2" />
                </Badge>
              )}

              {/* Results Count */}
              {resultsCount !== undefined && (
                <span className="text-sm text-gray-500 ml-auto">
                  {resultsCount} {resultsLabel}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
