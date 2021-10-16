import { Action } from "../createActions";
import actions from "./actions";
import {
  FilterLocalStorage,
  FilterRunesLocalStorage,
  initialItems,
  initialRunes,
} from "./helpers";

export type FiltersState = {
  runes: { [key: string]: boolean };
  itemTypes: { [key: string]: boolean };
};
export type RuneFilter = {
  name: string;
  value: boolean;
};

export const initialState: FiltersState = {
  runes: initialRunes(),
  itemTypes: initialItems(),
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
      const itemTypes = { ...state.itemTypes };
      itemTypes[action.payload.name] = action.payload.value;
      new FilterRunesLocalStorage(FilterLocalStorage.items).setItem(
        action.payload
      );
      return { ...state, itemTypes };

    default: {
      return state;
    }
  }
};
