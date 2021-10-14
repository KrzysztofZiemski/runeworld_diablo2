import { Action } from "../createActions";
import actions from "./actions";
import {
  FilterLocalStorage,
  FilterRunesLocalStorage,
  initialItems,
  initialRunes,
} from "./helpers";

export type Settings = {
  runes: { [key: string]: boolean };
  items: { [key: string]: boolean };
};
export type RuneFilter = {
  name: string;
  value: boolean;
};

export const initialState: Settings = {
  runes: initialRunes(),
  items: initialItems(),
};

export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actions.GET_RUNES:
      return state;

    case actions.UPDATE_RUNES:
      const runes = { ...state.runes };
      runes[action.payload.name] = action.payload.value;
      new FilterRunesLocalStorage(FilterLocalStorage.runes).setItem(
        action.payload
      );
      return { ...state, runes };

    case actions.UPDATE_ITEM_TYPE:
      const items = { ...state.items };
      items[action.payload.name] = action.payload.value;
      new FilterRunesLocalStorage(FilterLocalStorage.items).setItem(
        action.payload
      );
      return { ...state, items };

    default: {
      return state;
    }
  }
};
