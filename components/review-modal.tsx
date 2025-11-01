"use client"

import type React from "react"

import { useState } from "react"
import { Star, X } from "lucide-react"

export default function ReviewModal({
  station,
  language,
  t,
  onClose,
}: {
  station: any
  language: string
  t: any
  onClose: () => void
}) {
  const [rating, setRating] = useState(5)
  const [comment, setComment] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ station: station.id, rating, comment })
    setRating(5)
    setComment("")
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-card rounded-lg shadow-xl max-w-md w-full">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h3 className="text-xl font-bold">{t.writeReview}</h3>
            <p className="text-sm text-muted-foreground mt-1">{station.name}</p>
          </div>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Rating Input */}
          <div>
            <label className="text-sm font-medium block mb-3">{t.rating_label}</label>
            <div className="flex gap-2 justify-center">
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setRating(num)}
                  className="transition-transform transform hover:scale-110"
                >
                  <Star
                    size={32}
                    className={`${num <= rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Comment Input */}
          <div>
            <label className="text-sm font-medium block mb-2">{t.comment}</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder={t.comment}
              rows={4}
              className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 bg-muted text-muted-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              {t.cancel}
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              {t.submitReview}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
