import { ArmorType, WeaponName, WeaponType } from "../../types/items";
import { Rune } from "../../types/rune";

export enum FilterLocalStorage {
  runes = "runes",
  items = "items",
  sockets = "sockets",
}
export class FilterRunesLocalStorage {
  private localStorage: FilterLocalStorage;

  constructor(localStorageName: FilterLocalStorage) {
    this.localStorage = localStorageName;
  }

  public getStorage() {
    const storage = localStorage.getItem(this.localStorage);
    return storage ? JSON.parse(storage) : null;
  }
  public getAll() {
    const result = this.getStorage();
    return result !== null ? result : {};
  }

  public getItem(name: string): boolean | undefined {
    const all = this.getAll();
    return typeof all[name] === "boolean" ? all[name] : undefined;
  }

  public setItem({ value, name }: { value: boolean; name?: string }) {
    if (name === undefined) {
      localStorage.setItem(this.localStorage, JSON.stringify(value));
    } else {
      const all = this.getAll();
      all[name] = value;
      localStorage.setItem(this.localStorage, JSON.stringify(all));
    }
  }
}

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
