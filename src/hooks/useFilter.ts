import { useMemo } from "react";
import { useSelector } from "react-redux";
import { ItemFilters } from "../components/ItemsBody/helpers";
import { AllFiltersTypeSelector } from "../store/filters/selectors";
import { Item } from "../utils/items";

export default function useFilter(list: Item[]) {
  const { runes, itemTypes, sockets } = useSelector(AllFiltersTypeSelector);

  const listAfterFilter = useMemo(() => {
    const resultRunes = new ItemFilters(list as Item[]).filterRune(runes);
    const resultItemtypes = new ItemFilters(resultRunes).filterItemType(
      itemTypes
    );
    const endResult = new ItemFilters(resultItemtypes).filterItemSocket(
      sockets
    );
    return endResult;
  }, [runes, sockets, itemTypes, list]);

  return listAfterFilter;
}
