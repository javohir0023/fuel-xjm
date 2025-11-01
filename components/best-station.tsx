"use client"

import { getTranslation, type Language } from "@/lib/translations"
import { Card } from "@/components/ui/card"
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

interface BestStationProps {
  station: Station
  language: Language
}

export function BestStation({ station, language }: BestStationProps) {
  const t = (key: any) => getTranslation(language, key)

  return (
    <Card className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-6 mb-8">
      <div className="flex items-start justify-between">
        <div>
          <Badge className="mb-3 bg-white/20 text-white hover:bg-white/30">⭐ {t("best_station")}</Badge>
          <h2 className="text-3xl font-bold mb-2">{station.name}</h2>
          <p className="text-blue-100 mb-4">{station.address}</p>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-blue-100 text-sm mb-1">{t("price_per_liter")}</p>
              <p className="text-2xl font-bold">{station.prices["AI-95"] || station.prices["AI-92"]} so'm</p>
            </div>
            <div>
              <p className="text-blue-100 text-sm mb-1">{t("rating")}</p>
              <p className="text-2xl font-bold">
                ⭐ {station.rating} ({station.reviews})
              </p>
            </div>
          </div>
        </div>

        <div className="text-right">
          <p className="text-4xl font-bold">
            {station.distance} {t("km")}
          </p>
          <p className="text-blue-100">{t("distance")}</p>
        </div>
      </div>
    </Card>
  )
}
