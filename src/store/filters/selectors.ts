import { runes } from "./../../assests/images/runes/index";
import { Settings } from "./reducer";
import { createSelector } from "reselect";

import { filtersStoreName } from "./actions";

export const AllRunesSelector = createSelector(
  (state) => state,
  (state: any): Settings => state[filtersStoreName].runes
);
