import React from "react";
import { runeItems } from "../../assests/images/runes";
import Filters from "./Filters";
import RunesList from "./RunesList";

export default function Panel() {
  return (
    <div style={{ display: "flex" }}>
      <RunesList list={runeItems} />
      <Filters />
    </div>
  );
}
