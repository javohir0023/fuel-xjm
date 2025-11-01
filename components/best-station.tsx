import { Star, MapPin, Fuel, DollarSign } from "lucide-react"

export default function BestStation({
  station,
  language,
  t,
}: {
  station: any
  language: string
  t: any
}) {
  return (
    <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl p-6 md:p-8">
      <p className="text-sm font-semibold opacity-90 mb-2">{t.bestStation}</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-6">{station.name}</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 mb-1">
            <Star size={20} className="fill-current" />
            <span className="font-semibold">{station.rating}</span>
          </div>
          <p className="text-sm opacity-90">{t.rating}</p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 mb-1">
            <DollarSign size={20} />
            <span className="font-semibold">{station.price.toLocaleString()}</span>
          </div>
          <p className="text-sm opacity-90">{t.price}</p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 mb-1">
            <MapPin size={20} />
            <span className="font-semibold">{station.distance} km</span>
          </div>
          <p className="text-sm opacity-90">{t.distance}</p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 mb-1">
            <Fuel size={20} />
            <span className="font-semibold">{station.fuelTypes.length}</span>
          </div>
          <p className="text-sm opacity-90">{t.available}</p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {station.fuelTypes.map((fuel: string, idx: number) => (
          <span key={idx} className="bg-primary-foreground/30 px-3 py-1 rounded-full text-sm font-medium">
            {fuel}
          </span>
        ))}
      </div>
    </div>
  )
}
