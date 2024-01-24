import resourcesToBackend from "i18next-resources-to-backend";

export const defaultLocale = "en";
export const locales = [defaultLocale, "fr"] as const;

export type Locale = (typeof locales)[number];
export const defaultNS = "translation";

export function getOptions(lng = defaultLocale, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: locales,
    fallbackLng: defaultLocale,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}

export const useResourcesToBackend = resourcesToBackend((lang: string) => {
  switch (lang) {
    case "en":
      return import("@/i18n/locales/en/translation.json");
    case "fr":
      return import("@/i18n/locales/fr/translation.json");
    default:
      return import("@/i18n/locales/en/translation.json");
  }
});
