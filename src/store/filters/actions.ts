import { Rune } from "./../../types/rune";
import { createAction } from "../createActions";

export const filtersStoreName = `FILTERS`;

export const GET_RUNES = `${filtersStoreName} GET_RUNES`;
export const UPDATE = `${filtersStoreName} UPDATE`;

export const getAllRunes = () => createAction(GET_RUNES);
export const updateRune = (payload: { name: Rune; value: boolean }) =>
  createAction(GET_RUNES, payload);

const actions = {
  GET_RUNES,
  UPDATE,
  getAllRunes,
};

export default actions;
