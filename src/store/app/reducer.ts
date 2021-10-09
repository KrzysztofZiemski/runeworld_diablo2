import { Language } from "../../types/language";
import { Action } from "../createActions";
import actions from "./actions";

export interface Settings {
  language: Language;
}
export const initialState: Settings = {
  language: Language.PL,
};

export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actions.GET:
      return state;

    default: {
      return state;
    }
  }
};
