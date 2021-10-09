import { createSelector } from "reselect";

import { appSettingsStoreName } from "./actions";

export const AllSettingsStoreSelector = createSelector(
  (state) => state,
  (state: any) => state[appSettingsStoreName]
);
