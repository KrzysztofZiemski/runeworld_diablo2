import { ItemType, Weapon } from "../types/items";
import { Rune } from "../types/rune";

type Allowed = ItemType | Weapon;
type Stat = {
  id: string;
  value: string;
  defaultMessage: string;
};

export type Items = {
  name: string;
  allowed: Allowed[];
  runes: Rune[];
  reqLvl: number;
  stats: Stat[];
};
export const items: Items[] = [
  {
    name: "items.Fortitude",
    allowed: [ItemType.weapon, ItemType.chest],
    runes: [Rune.dol, Rune.eld, Rune.hel, Rune.ist, Rune.tir, Rune.vex],
    reqLvl: 55,
    stats: [
      {
        id: "stats.EnhancedDamage",
        value: "200%",
        defaultMessage: "",
      },
      {
        id: "stats.DamageToUndead",
        value: "75%",
        defaultMessage: "",
      },
      {
        id: "stats.Requirements",
        value: "20%",
        defaultMessage: "",
      },
      {
        id: "stats.IncreasedAttackSpeed",
        value: "20%",
        defaultMessage: "",
      },
      {
        id: "stats.ToAttackRatingAgainstUndead",
        value: "+50",
        defaultMessage: "",
      },
      {
        id: "stats.ToAllSkills",
        value: "+2",
        defaultMessage: "",
      },
      {
        id: "stats.AllResistances",
        value: "+75",
        defaultMessage: "",
      },
      {
        id: "stats.ManaStolenPerHit",
        value: "20%",
        defaultMessage: "",
      },
      {
        id: "stats.HitBlindsTarget",
        value: "+33",
        defaultMessage: "",
      },
      {
        id: "stats.ToManaAfterEachKill",
        value: "+2",
        defaultMessage: "",
      },
      {
        id: "stats.BetterChanceOfGettingMagicItems",
        value: "30%",
        defaultMessage: "",
      },
    ],
  },
];
