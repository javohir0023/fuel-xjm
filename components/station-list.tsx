"use client"

import type { Language } from "@/lib/translations"
import { StationCard } from "@/components/station-card"

interface Station {
  id: number
  name: string
  address: string
  fuelTypes: string[]
  prices: Record<string, number>
  rating: number
  reviews: number
  distance: number
}

interface StationListProps {
  stations: Station[]
  language: Language
}

export function StationList({ stations, language }: StationListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {stations.map((station) => (
        <StationCard key={station.id} station={station} language={language} />
      ))}
    </div>
  )
}
