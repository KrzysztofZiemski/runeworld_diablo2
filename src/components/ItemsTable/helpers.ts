import { Items } from "./../../utils/items";

export class ItemFilters {
  items;
  constructor(items: Items[]) {
    this.items = items;
  }

  public filterItemType(filterItemTypes: { [key: string]: boolean }) {
    const allowedFilters = this.convertTrueValuesToArray(filterItemTypes);
    return this.items.filter(
      (item) =>
        !!item.allowed.find(
          (allowesItem) =>
            !!allowedFilters.find(
              (allowedFilter) =>
                allowedFilter === allowesItem ||
                allowesItem.includes(allowesItem)
            )
        )
    );
  }

  public filterRune(filterRunes: { [key: string]: boolean }) {
    const pickedRunes = this.convertTrueValuesToArray(filterRunes);
    return this.items.filter((el) =>
      el.runes.every((rune) =>
        pickedRunes.find((filterRune) => filterRune === rune)
      )
    );
  }

  private convertTrueValuesToArray(filterRunes: { [key: string]: boolean }) {
    const keys = Object.keys(filterRunes);
    return keys.filter((key) => filterRunes[key]);
  }
}
