import { combineReducers } from "@reduxjs/toolkit";
import { createStore, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { reducer as appSettingsReducer } from "./app/reducer";
import { appSettingsStoreName } from "./app/actions";

const reducers = combineReducers({
  [appSettingsStoreName]: appSettingsReducer,
});

export default createStore(reducers, composeWithDevTools());
