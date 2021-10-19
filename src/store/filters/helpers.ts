import { ArmorType, WeaponName, WeaponType } from "../../types/items";
import { Rune } from "../../types/rune";
import { FilterLocalStorage, FilterRunesLocalStorage } from "../localStorage";

export const initialRunes = () => {
  const arrRune = Object.values(Rune);
  const output: any = {};

  arrRune.forEach((rune) => {
    if (!rune) return;
    const x = new FilterRunesLocalStorage(FilterLocalStorage.runes);
    const itemFromStorage = x.getItem(rune);

    output[rune] = itemFromStorage === undefined ? true : itemFromStorage;
  });
  return output;
};

export const initialItems = () => {
  const arrItems = [
    ...Object.values(ArmorType),
    ...Object.values(WeaponName),
    ...Object.values(WeaponType),
  ];
  const output: { [key: string]: boolean } = {};

  arrItems.forEach((item) => {
    const x = new FilterRunesLocalStorage(FilterLocalStorage.items);
    const itemFromStorage = x.getItem(item);
    output[item] = itemFromStorage === undefined ? true : itemFromStorage;
  });
  return output;
};

export const initialSockets = (): number => {
  const value = new FilterRunesLocalStorage(
    FilterLocalStorage.sockets
  ).getStorage();

  return value ? value : 0;
};
