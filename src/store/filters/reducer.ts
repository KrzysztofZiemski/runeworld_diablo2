import { Action } from "../createActions";
import actions from "./actions";
import { FilterLocalStorage, initialRunes } from "./helpers";

export type Settings = {
  runes: { [key: string]: boolean };
};
export type RuneFilter = {
  name: string;
  value: boolean;
};

export const initialState: Settings = {
  runes: initialRunes(),
};

export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actions.GET_RUNES:
      return state;
    case actions.UPDATE:
      const runes = { ...state.runes };
      runes[action.payload.name] = action.payload.value;
      new FilterLocalStorage().setRune(action.payload);

      return { ...state, runes };
    default: {
      return state;
    }
  }
};
