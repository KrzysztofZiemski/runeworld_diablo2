import { createAction } from "../createActions";

export const appSettingsStoreName = `APP_SETTINGS`;

export const GET = `${appSettingsStoreName} GET`;
export const UPDATE = `${appSettingsStoreName} UPDATE`;

export const getAlSettings = () => createAction(GET);

const actions = {
  GET,
  UPDATE,
  getAlSettings,
};

export default actions;
