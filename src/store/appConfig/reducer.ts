import { Cookies } from "../../helpers/cookies";
import { Language } from "../../types/language";
import { Action } from "../createActions";
import { FilterRunesLocalStorage, FilterLocalStorage } from "../localStorage";
import actions from "./actions";
import { initSetting } from "./helpers";

export enum AppConfigStorage {
  language = "language",
  agreeCookies = "agreeCookies",
}

export interface AppConfig {
  language: Language;
  agreeCookies: boolean | undefined;
}
export const initialState: AppConfig = initSetting();

export const reducer = (state = initialState, action: Action) => {
  const appConfigStorage = new FilterRunesLocalStorage(
    FilterLocalStorage.appConfig
  );

  switch (action.type) {
    case actions.UPDATE_LANGUAGE:
      appConfigStorage.setItem({
        name: AppConfigStorage.language,
        value: action.payload,
      });

      return { ...state, language: action.payload };

    case actions.AGREE_COOKIES:
      Cookies.set({
        name: AppConfigStorage.agreeCookies,
        value: action.payload,
        days: action.payload ? 30000 : 1,
      });

      return { ...state, agreeCookies: action.payload };

    default: {
      return state;
    }
  }
};
