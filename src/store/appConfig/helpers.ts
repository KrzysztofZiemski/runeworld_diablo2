import { Cookies } from "../../helpers/cookies";
import { Language } from "../../types/language";
import { FilterLocalStorage, FilterRunesLocalStorage } from "../localStorage";
import { AppConfigStorage } from "./reducer";

const validateCookiesValue = (value: any): boolean | undefined => {
  switch (value) {
    case "true":
      return true;
    case "false":
      return false;
    default:
      return undefined;
  }
};

const validateLanguageValue = (value: any) => {
  return value === Language.PL || value === Language.EN
    ? value
    : navigator.language === "pl-PL"
    ? Language.PL
    : Language.EN;
};

export const initSetting = () => {
  const localStorageHandler = new FilterRunesLocalStorage(
    FilterLocalStorage.appConfig
  );

  const language = validateLanguageValue(
    localStorageHandler.getItem(AppConfigStorage.language)
  );

  let agreeCookies = validateCookiesValue(
    Cookies.get(AppConfigStorage.agreeCookies)
  );

  return {
    language,
    agreeCookies,
  };
};
