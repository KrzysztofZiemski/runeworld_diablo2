import { Language } from "../../types/language";
import { createAction } from "../createActions";

export const appConfigStoreName = `APP_CONFIG`;

export const UPDATE_LANGUAGE = `${appConfigStoreName} UPDATE`;
export const AGREE_COOKIES = `${appConfigStoreName} AGREE_COOKIES`;

export const changeLanguage = (payload: Language) =>
  createAction(UPDATE_LANGUAGE, payload);

export const setAgreeCookies = (payload: boolean) =>
  createAction(AGREE_COOKIES, payload);

const actions = {
  UPDATE_LANGUAGE,
  AGREE_COOKIES,
  changeLanguage,
  setAgreeCookies,
};

export default actions;
