export enum FilterLocalStorage {
  runes = "runes",
  items = "items",
  sockets = "sockets",
  appConfig = "appConfig",
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

  public getItem(name: string) {
    const all = this.getAll();
    return all[name];
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
