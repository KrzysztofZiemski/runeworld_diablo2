import React from "react";
import { runeItems } from "../../utils/runes";
import Filters from "./Filters";
import TypeItemsListFilter from "./TypeItemsListFilter/TypeItemsListFilter";
import RuneListFilter from "./RuneListFilter/RuneListFilter";

export default function Panel() {
  return (
    <div>
      <RuneListFilter list={runeItems} />
      <TypeItemsListFilter />
      <Filters />
    </div>
  );
}
