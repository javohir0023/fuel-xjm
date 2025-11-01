"use client"

import { Star, MapPin, DollarSign, Eye } from "lucide-react"

export default function StationCard({
  station,
  language,
  t,
  onReview,
}: {
  station: any
  language: string
  t: any
  onReview: () => void
}) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      {/* Card Header with Background */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-4 border-b border-border">
        <h3 className="text-lg font-bold mb-1">{station.name}</h3>
        <p className="text-sm text-muted-foreground flex items-center gap-2">
          <MapPin size={16} />
          {station.address}
        </p>
      </div>

      {/* Card Body */}
      <div className="p-4">
        {/* Rating and Reviews */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={`${
                    i < Math.floor(station.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <span className="font-semibold">{station.rating}</span>
          </div>
          <span className="text-sm text-muted-foreground flex items-center gap-1">
            <Eye size={14} />
            {station.reviews}
          </span>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-background p-3 rounded">
            <p className="text-xs text-muted-foreground mb-1">{t.price}</p>
            <p className="font-bold text-primary flex items-center gap-1">
              <DollarSign size={14} />
              {station.price.toLocaleString()}
            </p>
          </div>

          <div className="bg-background p-3 rounded">
            <p className="text-xs text-muted-foreground mb-1">{t.distance}</p>
            <p className="font-bold text-primary flex items-center gap-1">
              <MapPin size={14} />
              {station.distance} km
            </p>
          </div>
        </div>

        {/* Fuel Types */}
        <div className="mb-4">
          <p className="text-xs text-muted-foreground mb-2">{t.fuelTypes}</p>
          <div className="flex flex-wrap gap-2">
            {station.fuelTypes.map((fuel: string, idx: number) => (
              <span key={idx} className="bg-primary/20 text-primary text-xs font-medium px-2 py-1 rounded">
                {fuel}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2">
          <button className="bg-primary text-primary-foreground py-2 px-4 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
            <MapPin size={16} />
            {t.getDirections}
          </button>
          <button
            onClick={onReview}
            className="bg-accent text-accent-foreground py-2 px-4 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            <Star size={16} />
            {t.leaveReview}
          </button>
        </div>
      </div>
    </div>
  )
}
