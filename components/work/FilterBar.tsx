"use client"

import { WorkCategory } from "../../lib/workData"

type FilterValue = WorkCategory | "all"

interface FilterBarProps {
  active: FilterValue
  onChange: (v: FilterValue) => void
}

const PILLS: { label: string; value: FilterValue }[] = [
  { label: "All",     value: "all"     },
  { label: "Email",   value: "email"   },
  { label: "Catalog", value: "catalog" },
  { label: "Social",  value: "social"  },
  { label: "Video",   value: "video"   },
  { label: "Web",     value: "web"     },
]

export default function FilterBar({ active, onChange }: FilterBarProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide mb-10">
      {PILLS.map(({ label, value }) => {
        const isActive = active === value
        return (
          <button
            key={value}
            onClick={() => onChange(value)}
            aria-pressed={isActive}
            className={[
              "rounded-full px-4 py-1.5 text-sm whitespace-nowrap flex-shrink-0",
              isActive
                ? "bg-white text-[#0a0a0a] font-bold"
                : "border border-white/20 text-gray-400 hover:border-white/40 hover:text-white transition-all duration-200",
            ].join(" ")}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}
