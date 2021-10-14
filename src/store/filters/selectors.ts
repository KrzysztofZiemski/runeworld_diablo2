import { createSelector } from "reselect";

import { filtersStoreName } from "./actions";

export const AllRunesSelector = createSelector(
  (state: any) => state,
  (state): { [key: string]: boolean } => state[filtersStoreName].runes
);

export const AllItemsTypeSelector = createSelector(
  (state: any) => state,
  (state): { [key: string]: boolean } => state[filtersStoreName].items
);
