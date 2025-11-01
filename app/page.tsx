"use client"

import { useState } from "react"
import { translations, type Language } from "@/lib/translations"
import Header from "@/components/header"
import BestStation from "@/components/best-station"
import StationCard from "@/components/station-card"
import ReviewModal from "@/components/review-modal"

const mockStations = [
  {
    id: 1,
    name: "Green Energy Station",
    address: "123 Main St, Downtown",
    distance: 0.5,
    price: 12500,
    rating: 4.8,
    fuelTypes: ["AI-92", "AI-95", "Diesel"],
    reviews: 245,
    lat: 41.2995,
    lng: 69.2401,
  },
  {
    id: 2,
    name: "Quick Fill Hub",
    address: "456 Oak Ave, Midtown",
    distance: 1.2,
    price: 12300,
    rating: 4.5,
    fuelTypes: ["AI-80", "AI-92", "AI-95"],
    reviews: 189,
    lat: 41.3015,
    lng: 69.2451,
  },
  {
    id: 3,
    name: "Express Fuel",
    address: "789 Elm Rd, Uptown",
    distance: 2.1,
    price: 12450,
    rating: 4.3,
    fuelTypes: ["AI-92", "Diesel"],
    reviews: 156,
    lat: 41.2975,
    lng: 69.2351,
  },
  {
    id: 4,
    name: "Premium Petrol",
    address: "321 Pine Ln, Westside",
    distance: 3.0,
    price: 12600,
    rating: 4.2,
    fuelTypes: ["AI-95", "Diesel", "Premium"],
    reviews: 127,
    lat: 41.2945,
    lng: 69.2301,
  },
]

export default function Page() {
  const [language, setLanguage] = useState<Language>("en")
  const [sortBy, setSortBy] = useState("distance")
  const [selectedStation, setSelectedStation] = useState<(typeof mockStations)[0] | null>(null)
  const [showReviewModal, setShowReviewModal] = useState(false)

  const t = translations[language]

  const sortedStations = [...mockStations].sort((a, b) => {
    switch (sortBy) {
      case "price_low":
        return a.price - b.price
      case "price_high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      case "distance":
      default:
        return a.distance - b.distance
    }
  })

  const bestStation = mockStations.reduce((prev, current) => {
    const prevScore = current.rating * 10 - current.distance - current.price / 1000
    const currentScore = prev.rating * 10 - prev.distance - prev.price / 1000
    return prevScore > currentScore ? current : prev
  })

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} onLanguageChange={setLanguage} />

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
        {/* Best Station Section */}
        <BestStation station={bestStation} language={language} t={t} />

        {/* Filters and Sort Section */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <h2 className="text-2xl font-bold text-text-balance">{t.viewAll}</h2>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="distance">{t.distance_near}</option>
            <option value="price_low">{t.price_low}</option>
            <option value="price_high">{t.price_high}</option>
            <option value="rating">{t.rating_high}</option>
          </select>
        </div>

        {/* Stations Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedStations.map((station) => (
            <StationCard
              key={station.id}
              station={station}
              language={language}
              t={t}
              onReview={() => {
                setSelectedStation(station)
                setShowReviewModal(true)
              }}
            />
          ))}
        </div>

        {/* Stations Grid End */}
        {sortedStations.length === 0 && <div className="text-center py-12 text-muted-foreground">{t.noStations}</div>}
      </main>

      {/* Review Modal */}
      {showReviewModal && selectedStation && (
        <ReviewModal station={selectedStation} language={language} t={t} onClose={() => setShowReviewModal(false)} />
      )}
    </div>
  )
}
