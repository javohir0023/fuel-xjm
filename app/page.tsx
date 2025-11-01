"use client"

import { useState } from "react"
import { getTranslation, type Language } from "@/lib/translations"
import { Header } from "@/components/header"
import { StationList } from "@/components/station-list"
import { BestStation } from "@/components/best-station"
import { MapSection } from "@/components/map-section"

// Mock data for gas stations
const mockStations = [
  {
    id: 1,
    name: "Premium Fuel Station",
    address: "123 Main Street",
    latitude: 41.3775,
    longitude: 69.2797,
    fuelTypes: ["AI-92", "AI-95", "Diesel"],
    prices: { "AI-92": 12000, "AI-95": 14000, Diesel: 13000 },
    rating: 4.8,
    reviews: 45,
    distance: 2.3,
  },
  {
    id: 2,
    name: "EconoDrive Station",
    address: "456 Park Avenue",
    latitude: 41.2856,
    longitude: 69.2042,
    fuelTypes: ["AI-92", "Diesel"],
    prices: { "AI-92": 11500, Diesel: 12500 },
    rating: 4.3,
    reviews: 32,
    distance: 3.1,
  },
  {
    id: 3,
    name: "QuickFill Center",
    address: "789 Oak Road",
    latitude: 41.3195,
    longitude: 69.3035,
    fuelTypes: ["AI-80", "AI-92", "AI-95", "Diesel"],
    prices: { "AI-80": 10500, "AI-92": 12200, "AI-95": 13800, Diesel: 12800 },
    rating: 4.6,
    reviews: 58,
    distance: 1.8,
  },
]

export default function Home() {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: any) => getTranslation(language, key)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 dark:from-slate-950 dark:to-slate-900">
      {/* Header with Language Switcher */}
      <Header language={language} onLanguageChange={setLanguage} />

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2 text-balance">{t("welcome")}</h1>
          <p className="text-gray-600 dark:text-gray-400">
            {t("app_name")} - {t("welcome")}
          </p>
        </div>

        {/* Best Station Section */}
        <BestStation station={mockStations[2]} language={language} />

        {/* Map Section */}
        <MapSection stations={mockStations} language={language} />

        {/* Stations List */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t("near_me")}</h2>
          <StationList stations={mockStations} language={language} />
        </div>
      </main>
    </div>
  )
}
