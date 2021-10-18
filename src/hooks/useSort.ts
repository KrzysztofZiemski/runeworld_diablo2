import { useCallback, useEffect, useState } from "react";
import { Order } from "../types/order";

type Config = {
  field: any;
  order: Order;
};

export default function useSort(list: any[]) {
  const [config, setConfig] = useState<Config | null>(null);
  const [sortedList, setSorted] = useState(list);

  const sort = useCallback(
    (a: any, b: any) => {
      if (config !== null) {
        if (a[config.field] < b[config.field]) {
          return config.order === Order.asc ? -1 : 1;
        } else if (a[config.field] > b[config.field]) {
          return config.order === Order.asc ? 1 : -1;
        }
        return 0;
      }
      return 0;
    },
    [config]
  );

  useEffect(() => {
    setSorted((prev) => {
      return [...prev].sort(sort);
    });
  }, [config, setSorted, sort]);

  const handleChangeOrder = useCallback(
    (config: Config) => {
      setConfig(config);
    },
    [setConfig]
  );

  return { list: sortedList, setConfig: handleChangeOrder, config };
}
