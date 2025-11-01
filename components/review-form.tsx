"use client"

import type React from "react"

import { useState } from "react"
import { getTranslation, type Language } from "@/lib/translations"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface ReviewFormProps {
  stationId: number
  language: Language
  onSubmit?: (review: { rating: number; comment: string }) => void
}

export function ReviewForm({ stationId, language, onSubmit }: ReviewFormProps) {
  const t = (key: any) => getTranslation(language, key)
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit?.({ rating, comment })
    setRating(0)
    setComment("")
  }

  return (
    <Card className="p-4 mb-4">
      <h3 className="font-bold mb-4 text-gray-900 dark:text-white">{t("write_review")}</h3>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">{t("rating")}</label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className={`text-3xl transition-colors ${
                  star <= rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"
                }`}
              >
                ★
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">{t("comment")}</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-slate-800 text-gray-900 dark:text-white resize-none h-24"
            placeholder="Fikringizni yozing..."
          />
        </div>

        <div className="flex gap-2">
          <Button type="submit" disabled={rating === 0} className="flex-1">
            {t("submit")}
          </Button>
          <Button type="button" variant="outline" className="flex-1 bg-transparent">
            {t("cancel")}
          </Button>
        </div>
      </form>
    </Card>
  )
}
