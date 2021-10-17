import { createSelector } from "reselect";

import { filtersStoreName } from "./actions";
import { FiltersState } from "./reducer";

export const AllRunesSelector = createSelector(
  (state: any) => state,
  (state): { [key: string]: boolean } => state[filtersStoreName].runes
);

export const AllItemsTypeSelector = createSelector(
  (state: any) => state,
  (state): { [key: string]: boolean } => state[filtersStoreName].itemTypes
);

export const SocketsSelector = createSelector(
  (state: any) => state,
  (state): number => state[filtersStoreName].sockets
);

export const AllFiltersTypeSelector = createSelector(
  (state: any) => state,
  (state): FiltersState => state[filtersStoreName]
);
