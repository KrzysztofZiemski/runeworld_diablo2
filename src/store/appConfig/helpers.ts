import { Language } from "../../types/language";
import { FilterLocalStorage, FilterRunesLocalStorage } from "../localStorage";
import { AppConfigStorage } from "./reducer";

export const initSetting = () => {
  const savedLanguage = new FilterRunesLocalStorage(
    FilterLocalStorage.appConfig
  ).getItem(AppConfigStorage.language);

  if (savedLanguage) return savedLanguage as Language;

  return navigator.language === "pl-PL" ? Language.PL : Language.EN;
};
