import { Action } from "../createActions";
import { FilterRunesLocalStorage, FilterLocalStorage } from "../localStorage";
import actions from "./actions";
import { initialItems, initialRunes, initialSockets } from "./helpers";

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
  const filterRunesLocalStorage = new FilterRunesLocalStorage(
    FilterLocalStorage.runes
  );
  const filterItemsLocalStorage = new FilterRunesLocalStorage(
    FilterLocalStorage.items
  );

  switch (action.type) {
    case actions.UPDATE_SOCKETS:
      new FilterRunesLocalStorage(FilterLocalStorage.sockets).setItem({
        value: action.payload,
      });
      return { ...state, sockets: action.payload };

    case actions.UPDATE_RUNE:
      const runes = { ...state.runes };
      runes[action.payload.name] = action.payload.value;
      filterRunesLocalStorage.setItem(action.payload);
      return { ...state, runes };

    case actions.UPDATE_MANY_RUNES:
      const newValueRunes: { [key: string]: boolean } = {};

      action.payload.forEach(
        ({ name, value }: { name: string; value: boolean }) => {
          filterRunesLocalStorage.setItem({ name, value });
          newValueRunes[name] = value;
        }
      );

      return { ...state, runes: { ...state.runes, ...newValueRunes } };

    case actions.UPDATE_MANY_ITEM_TYPES:
      const newValueItemTypes: { [key: string]: boolean } = {};
      action.payload.forEach(
        ({ name, value }: { name: string; value: boolean }) => {
          filterItemsLocalStorage.setItem({ name, value });
          newValueItemTypes[name] = value;
        }
      );

      return {
        ...state,
        itemTypes: { ...state.itemTypes, ...newValueItemTypes },
      };

    case actions.UPDATE_ITEM_TYPE:
      const itemTypes = { ...state.itemTypes };
      itemTypes[action.payload.name] = action.payload.value;
      filterItemsLocalStorage.setItem(action.payload);
      return { ...state, itemTypes };

    default: {
      return state;
    }
  }
};
