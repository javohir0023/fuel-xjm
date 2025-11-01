"use client"

import { Button } from "@/components/ui/button"
import type { Language } from "@/lib/translations"

interface LanguageSwitcherProps {
  currentLanguage: Language
  onLanguageChange: (lang: Language) => void
}

export function LanguageSwitcher({ currentLanguage, onLanguageChange }: LanguageSwitcherProps) {
  const languages: { code: Language; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "ru", label: "RU" },
    { code: "uz", label: "UZ" },
  ]

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <Button
          key={lang.code}
          onClick={() => onLanguageChange(lang.code)}
          variant={currentLanguage === lang.code ? "default" : "outline"}
          size="sm"
          className="w-12"
        >
          {lang.label}
        </Button>
      ))}
    </div>
  )
}
