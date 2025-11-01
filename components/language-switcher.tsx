"use client"

import type { Language } from "@/lib/translations"

export default function LanguageSwitcher({
  language,
  onLanguageChange,
}: {
  language: Language
  onLanguageChange: (lang: Language) => void
}) {
  const languages: { code: Language; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "ru", label: "RU" },
    { code: "uz", label: "UZ" },
  ]

  return (
    <div className="flex gap-2 bg-primary-foreground/20 rounded-lg p-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => onLanguageChange(lang.code)}
          className={`px-4 py-1 rounded font-semibold transition-all ${
            language === lang.code
              ? "bg-primary-foreground text-primary"
              : "text-primary-foreground hover:bg-primary-foreground/20"
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  )
}
