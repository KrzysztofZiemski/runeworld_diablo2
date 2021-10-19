import { Language } from "../../types/language";
import { Action } from "../createActions";
import { FilterRunesLocalStorage, FilterLocalStorage } from "../localStorage";
import actions from "./actions";
import { initSetting } from "./helpers";

export enum AppConfigStorage {
  language = "language",
}

export interface AppConfig {
  language: Language;
}
export const initialState: AppConfig = {
  language: initSetting(),
};

export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actions.UPDATE_LANGUAGE:
      new FilterRunesLocalStorage(FilterLocalStorage.appConfig).setItem({
        name: AppConfigStorage.language,
        value: action.payload,
      });

      const newState = { ...state, language: action.payload };
      return newState;
    default: {
      return state;
    }
  }
};
