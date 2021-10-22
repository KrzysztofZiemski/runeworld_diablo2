import { Hidden } from "@mui/material";
import { useMemo } from "react";
import { useIntl } from "react-intl";
import useSort from "../../hooks/useSort";
import { items } from "../../utils/items";
import ItemsListMobile from "./ItemsListMobile";
import ItemsTableDesktop from "./ItemsTableDesktop";

export type Row = {
  name: string;
  allowed: string;
  reqLvl: string;
  stats: string[];
  runes: string;
  sockets: number;
};

export default function ItemsBody() {
  const intl = useIntl();

  const { list, setConfig, config } = useSort(items);

  const rows: Row[] = useMemo(() => {
    return list.map((el) => {
      const allowed = el.allowed
        .map((itemType: any, index: number) =>
          intl.formatMessage({
            id: `ItemType.${itemType}`,
          })
        )
        .join(", ");

      const runes = el.runes.join(", ");
      const name = intl.formatMessage({
        id: `items.${el.name}`,
      });

      const reqLvl = `${intl.formatMessage({
        id: `tableHeaders.reqLvl`,
      })}: ${el.reqLvl}`;

      const stats = el.stats.map((stat) =>
        intl.formatMessage({
          ...stat,
        })
      );
      return {
        name,
        allowed,
        runes,
        sockets: el.runes.length,
        reqLvl,
        stats,
      };
    });
  }, [list, intl]);

  return (
    <>
      <Hidden mdDown>
        <ItemsTableDesktop rows={rows} config={config} setConfig={setConfig} />
      </Hidden>
      <Hidden mdUp>
        <ItemsListMobile rows={rows} config={config} setConfig={setConfig} />
      </Hidden>
    </>
  );
}
