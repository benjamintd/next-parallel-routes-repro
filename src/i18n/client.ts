"use client";

import { useEffect } from "react";
import i18next from "i18next";
import {
  UseTranslationOptions,
  initReactI18next,
  useTranslation as useTranslationOrg,
} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {
  Locale,
  getOptions,
  locales,
  useResourcesToBackend,
} from "@/i18n/settings";
import { useParams } from "next/navigation";

const runsOnServerSide = typeof window === "undefined";

//
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(useResourcesToBackend)
  .init({
    ...getOptions(),
    lng: undefined, // let detect the language on client side
    fallbackLng: "en",
    detection: {
      order: ["path", "htmlTag", "cookie", "navigator"],
    },
    preload: runsOnServerSide ? locales : [],
  });

export function useTranslation(
  ns: string = "translation",
  options: UseTranslationOptions<any> = {}
) {
  const { lang } = useParams<{ lang: Locale }>();

  useEffect(() => {
    if (i18next.resolvedLanguage === lang) return;
    i18next.changeLanguage(lang);
  }, [lang]);

  return useTranslationOrg(ns, { lng: lang, ...options });
}
