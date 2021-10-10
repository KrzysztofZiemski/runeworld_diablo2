import { combineReducers } from "@reduxjs/toolkit";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { reducer as appSettingsReducer } from "./appConfig/reducer";
import { appConfigStoreName } from "./appConfig/actions";

import { reducer as filterReducer } from "./filters/reducer";
import { filtersStoreName } from "./filters/actions";

const reducers = combineReducers({
  [appConfigStoreName]: appSettingsReducer,
  [filtersStoreName]: filterReducer,
});

export default createStore(reducers, composeWithDevTools());
