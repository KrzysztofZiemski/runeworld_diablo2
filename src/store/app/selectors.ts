import { Settings } from "./reducer";
import { createSelector } from "reselect";

import { appSettingsStoreName } from "./actions";

export const AllSettingsStoreSelector = createSelector(
  (state) => state,
  (state: any): Settings => state[appSettingsStoreName]
);
