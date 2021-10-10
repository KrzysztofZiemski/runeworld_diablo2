import { ItemType, Weapon } from "../types/items";
import { Rune } from "../types/rune";

type Allowed = ItemType | Weapon;

export type Items = {
  name: string;
  allowed: Allowed[];
  runes: Rune[];
  reqLvl: number;
  stats: string[];
};
export const items: Items[] = [
  {
    name: "Fortitude",
    allowed: [ItemType.weapon, ItemType.chest],
    runes: [Rune.dol, Rune.eld, Rune.hel, Rune.ist, Rune.tir, Rune.vex],
    reqLvl: 55,
    stats: [
      "200% Enhanced Damage",
      "+75% Damage To Undead",
      "Requirements -20%",
      "20% Increased Attack Speed",
      "+50 To Attack Rating Against Undead",
      "+2 To All Skills",
      "All Resistances +75",
      "20% Faster Hit Recovery",
      "11% Mana Stolen Per Hit",
      "Hit Causes Monster To Flee 25%",
      "Hit Blinds Target +33",
      "+2 To Mana After Each Kill",
      "30% Better Chance Of Getting Magic Items",
    ],
  },
  {
    name: "Breath of the Dying",
    allowed: [ItemType.weapon],
    runes: [Rune.vex, Rune.hel, Rune.el, Rune.eld, Rune.zod, Rune.eth],
    reqLvl: 69,
    stats: [
      "50% Chance To Cast Level 20 Poison Nova When You Kill An Enemy",
      "Indestructible",
      "+60% Increased Attack Speed",
      "+350-400% Enhanced Damage",
      "+200% Damage To Undead",
      "-25% Target Defense",
      "+50 To Attack Rating",
      "+50 To Attack Rating Against Undead",
      "7% Mana Stolen Per Hit",
      "12-15% Life Stolen Per Hit",
      "Prevent Monster Heal",
      "+30 To All Attributes",
      "+1 To Light Radius",
      "Requirements -20%",
    ],
  },
  {
    name: "Rift",
    allowed: [Weapon.polearms, Weapon.scepters],
    runes: [Rune.hel, Rune.ko, Rune.lem, Rune.gul],
    reqLvl: 53,
    stats: [
      "20% Chance To Cast Level 16 Tornado On Striking",
      "16% Chance To Cast Level 21 Frozen Orb On Attack",
      "20% Bonus To Attack Rating",
      "Adds 160-250 Magic Damage",
      "Adds 60-180 Fire Damage",
      "+5-10 To All Stats",
      "+10 To Dexterity",
      "38% Damage Taken Goes To Mana",
      "75% Extra Gold From Monsters",
      "Level 15 Iron Maiden (40 Charges)",
      "Requirements -20%",
    ],
  },
];
