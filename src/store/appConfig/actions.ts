import { createAction } from "../createActions";

export const appConfigStoreName = `APP_CONFIG`;

export const GET = `${appConfigStoreName} GET`;
export const UPDATE = `${appConfigStoreName} UPDATE`;

export const getAllSettings = () => createAction(GET);

const actions = {
  GET,
  UPDATE,
  getAllSettings,
};

export default actions;
