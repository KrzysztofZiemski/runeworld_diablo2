import { AppConfig } from "./reducer";
import { createSelector } from "reselect";

import { appConfigStoreName } from "./actions";

export const AllSettingsStoreSelector = createSelector(
  (state) => state,
  (state: any): AppConfig => state[appConfigStoreName]
);
