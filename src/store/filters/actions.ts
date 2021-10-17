import { Rune } from "./../../types/rune";
import { createAction } from "../createActions";
import { ArmorType, WeaponName, WeaponType } from "../../types/items";

export const filtersStoreName = `FILTERS`;

export const UPDATE_RUNE = `${filtersStoreName} UPDATE_RUNE`;
export const UPDATE_MANY_RUNES = `${filtersStoreName} UPDATE_MANY_RUNES`;
export const UPDATE_ITEM_TYPE = `${filtersStoreName} UPDATE_ITEM_TYPE`;
export const UPDATE_MANY_ITEM_TYPES = `${filtersStoreName} UPDATE_MANY_ITEM_TYPES`;
export const UPDATE_SOCKETS = `${filtersStoreName} UPDATE_SOCKETS`;

export const updateRune = (payload: { name: Rune; value: boolean }) =>
  createAction(UPDATE_RUNE, payload);

export const updateManyRunes = (
  payload: Array<{ name: Rune; value: boolean }>
) => createAction(UPDATE_MANY_RUNES, payload);

export const updateManyItemTypes = (
  payload: Array<{ name: ArmorType | WeaponType | WeaponName; value: boolean }>
) => createAction(UPDATE_MANY_ITEM_TYPES, payload);

export const updateSockets = (payload: number | null) =>
  createAction(UPDATE_SOCKETS, payload);

export const updateItemType = (payload: {
  name: ArmorType | WeaponName | WeaponType;
  value: boolean;
}) => createAction(UPDATE_ITEM_TYPE, payload);

const actions = {
  UPDATE_SOCKETS,
  UPDATE_RUNE,
  UPDATE_MANY_RUNES,
  UPDATE_ITEM_TYPE,
  UPDATE_MANY_ITEM_TYPES,
  updateItemType,
  updateSockets,
};

export default actions;
