import { Fuel } from "lucide-react"
import LanguageSwitcher from "./language-switcher"
import type { Language } from "@/lib/translations"

export default function Header({
  language,
  onLanguageChange,
}: {
  language: Language
  onLanguageChange: (lang: Language) => void
}) {
  return (
    <header className="bg-primary text-primary-foreground shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Fuel size={32} />
          <h1 className="text-2xl font-bold">Smart Fuel Finder</h1>
        </div>
        <LanguageSwitcher language={language} onLanguageChange={onLanguageChange} />
      </div>
    </header>
  )
}
