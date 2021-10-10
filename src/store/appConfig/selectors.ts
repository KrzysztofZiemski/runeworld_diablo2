import { Settings } from "./reducer";
import { createSelector } from "reselect";

import { appConfigStoreName } from "./actions";

export const AllSettingsStoreSelector = createSelector(
  (state) => state,
  (state: any): Settings => state[appConfigStoreName]
);
