"use client"

import { getTranslation, type Language } from "@/lib/translations"
import { Card } from "@/components/ui/card"

interface Station {
  id: number
  name: string
  address: string
  latitude: number
  longitude: number
  fuelTypes: string[]
  prices: Record<string, number>
  rating: number
  reviews: number
  distance: number
}

interface MapSectionProps {
  stations: Station[]
  language: Language
}

export function MapSection({ stations, language }: MapSectionProps) {
  const t = (key: any) => getTranslation(language, key)

  return (
    <Card className="overflow-hidden mb-8 h-96">
      <div className="relative w-full h-full bg-gradient-to-br from-blue-100 to-green-100 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center">
        <iframe
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDxT82GyZiM9rWO-6MYY5F5Y-Y5Y5Y5Y5Y&q=${stations[0].latitude},${stations[0].longitude}`}
        />
      </div>
      <div className="p-4 bg-white dark:bg-slate-900">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          📍 {stations.length} {t("near_me")}
        </p>
      </div>
    </Card>
  )
}
