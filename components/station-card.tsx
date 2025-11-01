"use client"

import { getTranslation, type Language } from "@/lib/translations"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

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

interface StationCardProps {
  station: Station
  language: Language
}

export function StationCard({ station, language }: StationCardProps) {
  const t = (key: any) => getTranslation(language, key)

  const avgPrice = Object.values(station.prices).reduce((a, b) => a + b, 0) / Object.keys(station.prices).length

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-4">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-bold text-lg text-gray-900 dark:text-white">{station.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{station.address}</p>
          </div>
          <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
            ⭐ {station.rating}
          </Badge>
        </div>

        <div className="space-y-3 mb-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 dark:text-gray-400">{t("price_per_liter")}</span>
            <span className="font-bold text-lg text-blue-600 dark:text-blue-400">{Math.round(avgPrice)} so'm</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 dark:text-gray-400">{t("distance")}</span>
            <span className="font-bold">
              {station.distance} {t("km")}
            </span>
          </div>

          <div className="flex flex-wrap gap-1">
            {station.fuelTypes.map((fuel) => (
              <Badge key={fuel} variant="outline" className="text-xs">
                {fuel}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1 bg-transparent">
            {t("get_directions")}
          </Button>
          <Button size="sm" className="flex-1">
            {t("write_review")}
          </Button>
        </div>
      </div>
    </Card>
  )
}
