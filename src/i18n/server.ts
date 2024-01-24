import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next/initReactI18next";
import { Locale, getOptions, useResourcesToBackend } from "./settings";
import { UseTranslationOptions } from "react-i18next";

const initI18next = async (lng: Locale, ns: string) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(useResourcesToBackend)
    .init(getOptions(lng, ns));
  return i18nInstance;
};

export const translation = async (
  lng: Locale,
  ns: string = "translation",
  options: UseTranslationOptions<any> = {}
) => {
  const i18nextInstance = await initI18next(lng, ns);

  return {
    t: i18nextInstance.getFixedT(lng, ns, options.keyPrefix),
    i18n: i18nextInstance,
  };
};

export async function fixedT(lng: Locale, ns: string = "translation") {
  const i18nextInstance = await initI18next(lng, ns);
  return i18nextInstance.getFixedT(lng, ns);
}

export async function useTranslation(lng: Locale, ns: string = "translation") {
  return { t: await fixedT(lng, ns) };
}
