"use client"

import { getTranslation, type Language } from "@/lib/translations"
import { Card } from "@/components/ui/card"

interface Review {
  id: number
  author: string
  rating: number
  comment: string
  date: string
}

interface ReviewsListProps {
  reviews: Review[]
  language: Language
}

export function ReviewsList({ reviews, language }: ReviewsListProps) {
  const t = (key: any) => getTranslation(language, key)

  if (reviews.length === 0) {
    return <Card className="p-6 text-center text-gray-600 dark:text-gray-400">{t("no_reviews")}</Card>
  }

  return (
    <div className="space-y-3">
      {reviews.map((review) => (
        <Card key={review.id} className="p-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">{review.author}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{review.date}</p>
            </div>
            <div className="text-yellow-400 text-lg">
              {"★".repeat(review.rating)}
              {"☆".repeat(5 - review.rating)}
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300">{review.comment}</p>
        </Card>
      ))}
    </div>
  )
}
