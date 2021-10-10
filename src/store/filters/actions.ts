import { Rune } from "./../../types/rune";
import { createAction } from "../createActions";

export const filtersStoreName = `FILTERS`;

export const GET_RUNES = `${filtersStoreName} GET_RUNES`;
export const UPDATE_RUNES = `${filtersStoreName} UPDATE_RUNES`;

export const getAllRunes = () => createAction(GET_RUNES);
export const updateRune = (payload: { name: Rune; value: boolean }) =>
  createAction(UPDATE_RUNES, payload);

const actions = {
  GET_RUNES,
  UPDATE_RUNES,
  getAllRunes,
};

export default actions;
