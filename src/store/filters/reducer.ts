import { Action } from "../createActions";
import actions from "./actions";
import {
  FilterLocalStorage,
  FilterRunesLocalStorage,
  initialItems,
  initialRunes,
  initialSockets,
} from "./helpers";

export type FiltersState = {
  runes: { [key: string]: boolean };
  itemTypes: { [key: string]: boolean };
  sockets: number;
};

export const initialState: FiltersState = {
  runes: initialRunes(),
  itemTypes: initialItems(),
  sockets: initialSockets(),
};

export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actions.GET_RUNES:
      return state;

    case actions.UPDATE_SOCKETS:
      new FilterRunesLocalStorage(FilterLocalStorage.sockets).setItem({
        value: action.payload,
      });
      return { ...state, sockets: action.payload };

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
