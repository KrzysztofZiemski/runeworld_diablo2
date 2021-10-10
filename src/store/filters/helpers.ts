import { Rune } from "../../types/rune";

const localStorageName = "runes";

export class FilterLocalStorage {
  public getAllRunes() {
    const result = localStorage.getItem(localStorageName);
    return result ? JSON.parse(result) : {};
  }

  public getRune(name: string) {
    const allRunes = this.getAllRunes();
    return typeof allRunes[name] === "boolean" ? allRunes[name] : false;
  }

  public setRune({ value, name }: { value: boolean; name: string }) {
    const allRunes = this.getAllRunes();
    allRunes[name] = value;
    localStorage.setItem(localStorageName, JSON.stringify(allRunes));
  }
}



export const initialRunes = () => {
    const arrRune = Object.keys(Rune);
    const output: any = {};
    arrRune.forEach((rune) => {
      if (rune) output[rune] = new FilterLocalStorage().getRune(rune);
    });
    return output;
  };