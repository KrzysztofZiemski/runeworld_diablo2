import { Rune } from "./../../types/rune";
import { createAction } from "../createActions";
import { ArmorType, WeaponName, WeaponType } from "../../types/items";

export const filtersStoreName = `FILTERS`;

export const GET_RUNES = `${filtersStoreName} GET_RUNES`;
export const UPDATE_RUNES = `${filtersStoreName} UPDATE_RUNES`;
export const UPDATE_ITEM_TYPE = `${filtersStoreName} UPDATE_ITEM_TYPE`;

export const getAllRunes = () => createAction(GET_RUNES);

export const updateRune = (payload: { name: Rune; value: boolean }) =>
  createAction(UPDATE_RUNES, payload);

export const updateItemType = (payload: {
  name: ArmorType | WeaponName | WeaponType;
  value: boolean;
}) => createAction(UPDATE_ITEM_TYPE, payload);

const actions = {
  GET_RUNES,
  UPDATE_RUNES,
  UPDATE_ITEM_TYPE,
  getAllRunes,
  updateItemType,
};

export default actions;
