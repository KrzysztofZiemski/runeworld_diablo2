import { useCallback, useMemo, useState } from "react";
import { Order } from "../types/order";
import { Item } from "../utils/items";
import useFilter from "./useFilter";

type Config = {
  field: any;
  order: Order;
};

export type SortConfig = Config | null;

const sorter = (config: SortConfig) => (a: any, b: any) => {
  if (config !== null) {
    if (a[config.field] < b[config.field]) {
      return config.order === Order.asc ? -1 : 1;
    } else if (a[config.field] > b[config.field]) {
      return config.order === Order.asc ? 1 : -1;
    }
    return 0;
  }
  return 0;
};

export default function useSort(list: Item[]) {
  const [config, setConfig] = useState<SortConfig | null>(null);

  const listAfterFilter = useFilter(list);

  const afterSort = useMemo(() => {
    return [...listAfterFilter].sort(sorter(config));
  }, [listAfterFilter, config]);

  const handleChangeOrder = useCallback(
    (config: SortConfig) => {
      setConfig(config);
    },
    [setConfig]
  );

  return { list: afterSort, setConfig: handleChangeOrder, config };
}
