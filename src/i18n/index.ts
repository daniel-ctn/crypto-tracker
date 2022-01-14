import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import en from 'locales/en.json'
import vi from 'locales/vi.json'

export const resources = {
  en: {
    translation: en
  },
  vi: {
    translation: vi
  },
}

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources,
  fallbackLng: "vi",
  debug: true,
  interpolation: {
    escapeValue: false
  }
})

export default i18n