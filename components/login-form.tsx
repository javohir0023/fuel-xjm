"use client"

import type React from "react"

import { useState } from "react"
import { getTranslation, type Language } from "@/lib/translations"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface LoginFormProps {
  language: Language
  onSubmit?: (data: { email: string; password: string }) => void
}

export function LoginForm({ language, onSubmit }: LoginFormProps) {
  const t = (key: any) => getTranslation(language, key)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit?.({ email, password })
  }

  return (
    <Card className="p-6 max-w-md mx-auto my-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">{t("login")}</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t("email")}</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t("password")}</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
            required
          />
        </div>

        <div className="flex items-center">
          <input type="checkbox" id="remember" className="w-4 h-4" />
          <label htmlFor="remember" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
            {t("remember_me")}
          </label>
        </div>

        <Button type="submit" className="w-full">
          {t("sign_in")}
        </Button>

        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          {t("dont_have_account")}{" "}
          <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
            {t("signup")}
          </a>
        </p>
      </form>
    </Card>
  )
}
