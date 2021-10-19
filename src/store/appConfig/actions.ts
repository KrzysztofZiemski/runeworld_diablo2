import { Language } from "../../types/language";
import { createAction } from "../createActions";

export const appConfigStoreName = `APP_CONFIG`;

export const UPDATE_LANGUAGE = `${appConfigStoreName} UPDATE`;

export const changeLanguage = (payload: Language) =>
  createAction(UPDATE_LANGUAGE, payload);

const actions = {
  UPDATE_LANGUAGE,
  changeLanguage,
};

export default actions;
