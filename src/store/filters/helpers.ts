import { ItemType } from "../../types/items";
import { Rune } from "../../types/rune";

export enum FilterLocalStorage {
  runes = "runes",
  items = "items",
}
export class FilterRunesLocalStorage {
  private localStorage: FilterLocalStorage;

  constructor(localStorageName: FilterLocalStorage) {
    this.localStorage = localStorageName;
  }
  public getAll() {
    const result = localStorage.getItem(this.localStorage);
    return result ? JSON.parse(result) : {};
  }

  public getItem(name: string) {
    const allRunes = this.getAll();
    return typeof allRunes[name] === "boolean" ? allRunes[name] : false;
  }

  public setItem({ value, name }: { value: boolean; name: string }) {
    const allRunes = this.getAll();
    allRunes[name] = value;
    localStorage.setItem(this.localStorage, JSON.stringify(allRunes));
  }
}

export const initialRunes = () => {
  const arrRune = Object.values(Rune);
  const output: any = {};
  arrRune.forEach((rune) => {
    if (rune)
      output[rune] = new FilterRunesLocalStorage(
        FilterLocalStorage.runes
      ).getItem(rune);
  });
  return output;
};

export const initialItems = () => {
  const arrItems = Object.values(ItemType);
  const output: any = {};
  arrItems.forEach((item) => {
    if (item)
      output[item] = new FilterRunesLocalStorage(
        FilterLocalStorage.items
      ).getItem(item);
  });
  return output;
};
