"use client"

import { LanguageSwitcher } from "@/components/language-switcher"
import { getTranslation, type Language } from "@/lib/translations"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  language: Language
  onLanguageChange: (lang: Language) => void
}

export function Header({ language, onLanguageChange }: HeaderProps) {
  const t = (key: any) => getTranslation(language, key)

  return (
    <header className="bg-white dark:bg-slate-950 shadow-sm border-b border-gray-200 dark:border-slate-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">⛽ {t("app_name")}</h1>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex gap-2">
            <Button variant="ghost" size="sm">
              {t("login")}
            </Button>
            <Button size="sm">{t("signup")}</Button>
          </div>

          <LanguageSwitcher currentLanguage={language} onLanguageChange={onLanguageChange} />
        </div>
      </div>
    </header>
  )
}
