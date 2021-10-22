import { Items } from "../../utils/items";

export class ItemFilters {
  items;
  constructor(items: Items[]) {
    this.items = items;
  }

  public filterItemType(filterItemTypes: { [key: string]: boolean }) {
    const allowedFilters = this.convertTrueValuesToArray(filterItemTypes);
    return this.items.filter(
      (item) =>
        !!item.allowed.find((allowedSingleItem) => {
          const isFindedBassicalyFilter = !!allowedFilters.find(
            (allowedFilter) => {
              return allowedFilter === allowedSingleItem;
            }
          );
          return isFindedBassicalyFilter;
        })
    );
  }
  public filterItemSocket(value: number) {
    if (!value) return this.items;

    return this.items.filter((item) => item.runes.length === value);
  }

  public filterRune(filterRunes: { [key: string]: boolean }) {
    const pickedRunes = this.convertTrueValuesToArray(filterRunes);

    return this.items.filter((el) => {
      return el.runes.every((rune) => {
        const x = pickedRunes.find((filterRune) => filterRune === rune);
        return x;
      });
    });
  }

  private convertTrueValuesToArray(filterRunes: { [key: string]: boolean }) {
    const keys = Object.keys(filterRunes);
    return keys.filter((key) => filterRunes[key]);
  }
}
