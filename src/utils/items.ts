import { ArmorType, WeaponName, WeaponType } from "../types/items";
import { Rune } from "../types/rune";

type Allowed = ArmorType | WeaponName | WeaponType;
type Stat = {
  id: string;
  defaultMessage: string;
};

export type Item = {
  name: string;
  allowed: Allowed[] | string[];
  runes: Rune[] | string[];
  reqLvl: number;
  stats: Stat[];
};
export const items: Item[] = [
  {
    name: "Splendor",
    reqLvl: 37,
    allowed: ["Shields"],
    stats: [
      {
        id: "stats.1ToAllSkills",
        defaultMessage: "+1 To All Skills",
      },
      {
        id: "stats.10%FasterCastRate",
        defaultMessage: "+10% Faster Cast Rate",
      },
      {
        id: "stats.20%FasterBlockRate",
        defaultMessage: "+20% Faster Block Rate",
      },
      {
        id: "stats.60100%EnhancedDefense",
        defaultMessage: "+60-100% Enhanced Defense",
      },
      {
        id: "stats.10ToEnergy",
        defaultMessage: "+10 To Energy",
      },
      {
        id: "stats.RegenerateMana15%",
        defaultMessage: "Regenerate Mana 15%",
      },
      {
        id: "stats.50%ExtraGoldFromMonsters",
        defaultMessage: "50% Extra Gold From Monsters",
      },
      {
        id: "stats.20%BetterChanceofGettingMagicItems",
        defaultMessage: "20% Better Chance of Getting Magic Items",
      },
      {
        id: "stats.3ToLightRadius",
        defaultMessage: "+3 To Light Radius",
      },
    ],
    runes: ["Eth", "Lum"],
  },
  {
    name: "Lore",
    reqLvl: 27,
    allowed: ["Helms"],
    stats: [
      {
        id: "stats.1ToAllSkills",
        defaultMessage: "+1 To All Skills",
      },
      {
        id: "stats.10ToEnergy",
        defaultMessage: "+10 To Energy",
      },
      {
        id: "stats.2ToManaAfterEachKill",
        defaultMessage: "+2 To Mana After Each Kill",
      },
      {
        id: "stats.LightningResist30%",
        defaultMessage: "Lightning Resist +30%",
      },
      {
        id: "stats.DamageReducedBy7",
        defaultMessage: "Damage Reduced By 7",
      },
      {
        id: "stats.2ToLightRadius",
        defaultMessage: "+2 To Light Radius",
      },
    ],
    runes: ["Ort", "Sol"],
  },
  {
    name: "Insight",
    reqLvl: 27,
    allowed: ["Polearms", "Staves"],
    stats: [
      {
        id: "stats.Level1217MeditationAuraWhenEquipped",
        defaultMessage: "Level 12-17 Meditation Aura When Equipped",
      },
      {
        id: "stats.35%FasterCastRate",
        defaultMessage: "+35% Faster Cast Rate",
      },
      {
        id: "stats.200260%EnhancedDamage",
        defaultMessage: "+200-260% Enhanced Damage",
      },
      {
        id: "stats.9ToMinimumDamage",
        defaultMessage: "+9 To Minimum Damage",
      },
      {
        id: "stats.180250%BonustoAttackRating",
        defaultMessage: "180-250% Bonus to Attack Rating",
      },
      {
        id: "stats.Adds530FireDamage",
        defaultMessage: "Adds 5-30 Fire Damage",
      },
      {
        id: "stats.75PoisonDamageOver5Seconds",
        defaultMessage: "+75 Poison Damage Over 5 Seconds",
      },
      {
        id: "stats.16ToCriticalStrike",
        defaultMessage: "+1-6 To Critical Strike",
      },
      {
        id: "stats.5ToAllAttributes",
        defaultMessage: "+5 To All Attributes",
      },
      {
        id: "stats.2ToManaAfterEachKill",
        defaultMessage: "+2 To Mana After Each Kill",
      },
      {
        id: "stats.23%BetterChanceofGettingMagicItems",
        defaultMessage: "23% Better Chance of Getting Magic Items",
      },
    ],
    runes: ["Ral", "Tir", "Tal", "Sol"],
  },
  {
    name: "Enigma",
    reqLvl: 65,
    allowed: ["BodyArmor"],
    stats: [
      {
        id: "stats.2ToAllSkills",
        defaultMessage: "+2 To All Skills",
      },
      {
        id: "stats.45%FasterRunWalk",
        defaultMessage: "+45% Faster Run/Walk",
      },
      {
        id: "stats.1ToTeleport",
        defaultMessage: "+1 To Teleport",
      },
      {
        id: "stats.750775Defense",
        defaultMessage: "+750-775 Defense",
      },
      {
        id: "stats.075PerCharacterLevel074ToStrengthBasedOnCharacterLevel",
        defaultMessage:
          "+ (0.75 Per Character Level) +0-74 To Strength (Based On Character Level)",
      },
      {
        id: "stats.IncreaseMaximumLife5%",
        defaultMessage: "Increase Maximum Life 5%",
      },
      {
        id: "stats.DamageReducedBy8%",
        defaultMessage: "Damage Reduced By 8%",
      },
      {
        id: "stats.14LifeAfterEachKill",
        defaultMessage: "+14 Life After Each Kill",
      },
      {
        id: "stats.15%DamageTakenGoesToMana",
        defaultMessage: "15% Damage Taken Goes To Mana",
      },
      {
        id: "stats.1PerCharacterLevel199%BetterChanceofGettingMagicItemsBasedOnCharacterLevel",
        defaultMessage:
          "+ (1 Per Character Level) +1-99% Better Chance of Getting Magic Items (Based On Character Level)",
      },
    ],
    runes: ["Jah", "Ith", "Ber"],
  },
  {
    name: "Brand",
    reqLvl: 65,
    allowed: ["MissileWeapons"],
    stats: [
      {
        id: "stats.35%ChanceToCastLevel14AmplifyDamageWhenStruck",
        defaultMessage:
          "35% Chance To Cast Level 14 Amplify Damage When Struck",
      },
      {
        id: "stats.100%ChanceToCastLevel18BoneSpearOnStriking",
        defaultMessage: "100% Chance To Cast Level 18 Bone Spear On Striking",
      },
      {
        id: "stats.260340%EnhancedDamage",
        defaultMessage: "+260-340% Enhanced Damage",
      },
      {
        id: "stats.IgnoresTargetsDefense",
        defaultMessage: "Ignores Target's Defense",
      },
      {
        id: "stats.20%BonustoAttackRating",
        defaultMessage: "20% Bonus to Attack Rating",
      },
      {
        id: "stats.280330%DamageToDemons",
        defaultMessage: "+280-330% Damage To Demons",
      },
      {
        id: "stats.20%DeadlyStrike",
        defaultMessage: "20% Deadly Strike",
      },
      {
        id: "stats.PreventMonsterHeal",
        defaultMessage: "Prevent Monster Heal",
      },
      {
        id: "stats.Knockback",
        defaultMessage: "Knockback",
      },
      {
        id: "stats.FiresExplosiveArrowsorBolts[level15]",
        defaultMessage: "Fires Explosive Arrows or Bolts [level 15]",
      },
    ],
    runes: ["Jah", "Lo", "Mal", "Gul"],
  },
  {
    name: "Ice",
    reqLvl: 65,
    allowed: ["MissileWeapons"],
    stats: [
      {
        id: "stats.100%ChanceToCastLevel40BlizzardWhenYouLevelup",
        defaultMessage:
          "100% Chance To Cast Level 40 Blizzard When You Level-up",
      },
      {
        id: "stats.25%ChanceToCastLevel22FrostNovaOnStriking",
        defaultMessage: "25% Chance To Cast Level 22 Frost Nova On Striking",
      },
      {
        id: "stats.Level18HolyFreezeAuraWhenEquipped",
        defaultMessage: "Level 18 Holy Freeze Aura When Equipped",
      },
      {
        id: "stats.20%IncreasedAttackSpeed",
        defaultMessage: "+20% Increased Attack Speed",
      },
      {
        id: "stats.140210%EnhancedDamage",
        defaultMessage: "+140-210% Enhanced Damage",
      },
      {
        id: "stats.IgnoreTargetsDefense",
        defaultMessage: "Ignore Target's Defense",
      },
      {
        id: "stats.2530%ToColdSkillDamage",
        defaultMessage: "+25-30% To Cold Skill Damage",
      },
      {
        id: "stats.20%ToEnemyColdResist",
        defaultMessage: "-20% To Enemy Cold Resist",
      },
      {
        id: "stats.7%LifeStolenPerHit",
        defaultMessage: "7% Life Stolen Per Hit",
      },
      {
        id: "stats.20%DeadlyStrike",
        defaultMessage: "20% Deadly Strike",
      },
      {
        id: "stats.3125309375%ExtraGoldFromMonstersBasedonCharacterLevel",
        defaultMessage:
          "3.125-309.375% Extra Gold From Monsters (Based on Character Level)",
      },
    ],
    runes: ["Amn", "Shael", "Jah", "Lo"],
  },
  {
    name: "Infinity",
    reqLvl: 63,
    allowed: ["Polearms"],
    stats: [
      {
        id: "stats.50%ChanceToCastLevel20ChainLightningWhenYouKillAnEnemy",
        defaultMessage:
          "50% Chance To Cast Level 20 Chain Lightning When You Kill An Enemy",
      },
      {
        id: "stats.Level12ConvictionAuraWhenEquipped",
        defaultMessage: "Level 12 Conviction Aura When Equipped",
      },
      {
        id: "stats.35%FasterRunWalk",
        defaultMessage: "+35% Faster Run/Walk",
      },
      {
        id: "stats.255325%EnhancedDamage",
        defaultMessage: "+255-325% Enhanced Damage",
      },
      {
        id: "stats.4555%ToEnemyLightningResist",
        defaultMessage: "-(45-55)% To Enemy Lightning Resist",
      },
      {
        id: "stats.40%ChanceofCrushingBlow",
        defaultMessage: "40% Chance of Crushing Blow",
      },
      {
        id: "stats.PreventMonsterHeal",
        defaultMessage: "Prevent Monster Heal",
      },
      {
        id: "stats.05495ToVitalityBasedonCharacterLevel",
        defaultMessage: "0.5-49.5 To Vitality (Based on Character Level)",
      },
      {
        id: "stats.30%BetterChanceofGettingMagicItems",
        defaultMessage: "30% Better Chance of Getting Magic Items",
      },
      {
        id: "stats.Level21CycloneArmor30Charges",
        defaultMessage: "Level 21 Cyclone Armor (30 Charges)",
      },
    ],
    runes: ["Ber", "Mal", "Ber", "Ist"],
  },
  {
    name: "Sanctuary",
    reqLvl: 49,
    allowed: ["Shields"],
    stats: [
      {
        id: "stats.20%FasterHitRecovery",
        defaultMessage: "+20% Faster Hit Recovery",
      },
      {
        id: "stats.20%FasterBlockRate",
        defaultMessage: "+20% Faster Block Rate",
      },
      {
        id: "stats.20%IncreasedChanceofBlocking",
        defaultMessage: "20% Increased Chance of Blocking",
      },
      {
        id: "stats.130160%EnhancedDefense",
        defaultMessage: "+130-160% Enhanced Defense",
      },
      {
        id: "stats.250DefensevsMissile",
        defaultMessage: "+250 Defense vs. Missile",
      },
      {
        id: "stats.20ToDexterity",
        defaultMessage: "+20 To Dexterity",
      },
      {
        id: "stats.AllResistances5070",
        defaultMessage: "All Resistances +50-70",
      },
      {
        id: "stats.MagicDamageReducedBy7",
        defaultMessage: "Magic Damage Reduced By 7",
      },
      {
        id: "stats.Level12SlowMissiles60Charges",
        defaultMessage: "Level 12 Slow Missiles (60 Charges)",
      },
    ],
    runes: ["Ko", "Ko", "Mal"],
  },
  {
    name: "Treachery",
    reqLvl: 43,
    allowed: ["BodyArmor"],
    stats: [
      {
        id: "stats.5%ChanceToCastLevel15FadeWhenStruck",
        defaultMessage: "5% Chance To Cast Level 15 Fade When Struck",
      },
      {
        id: "stats.25%ChanceToCastlevel15VenomOnStriking",
        defaultMessage: "25% Chance To Cast level 15 Venom On Striking",
      },
      {
        id: "stats.2ToAssassinSkillLevels",
        defaultMessage: "+2 To Assassin Skill Levels",
      },
      {
        id: "stats.45%IncreasedAttackSpeed",
        defaultMessage: "+45% Increased Attack Speed",
      },
      {
        id: "stats.20%FasterHitRecovery",
        defaultMessage: "+20% Faster Hit Recovery",
      },
      {
        id: "stats.ColdResist30%",
        defaultMessage: "Cold Resist +30%",
      },
      {
        id: "stats.50%ExtraGoldFromMonsters",
        defaultMessage: "50% Extra Gold From Monsters",
      },
    ],
    runes: ["Shael", "Thul", "Lem"],
  },
  {
    name: "Peace",
    reqLvl: 29,
    allowed: ["BodyArmor"],
    stats: [
      {
        id: "stats.4%ChanceToCastLevel5SlowMissilesWhenStruck",
        defaultMessage: "4% Chance To Cast Level 5 Slow Missiles When Struck",
      },
      {
        id: "stats.2%ChanceToCastlevel15ValkyrieOnStriking",
        defaultMessage: "2% Chance To Cast level 15 Valkyrie On Striking",
      },
      {
        id: "stats.2ToAmazonSkillLevels",
        defaultMessage: "+2 To Amazon Skill Levels",
      },
      {
        id: "stats.20%FasterHitRecovery",
        defaultMessage: "+20% Faster Hit Recovery",
      },
      {
        id: "stats.2ToCriticalStrike",
        defaultMessage: "+2 To Critical Strike",
      },
      {
        id: "stats.ColdResist30%",
        defaultMessage: "Cold Resist +30%",
      },
      {
        id: "stats.AttackerTakesDamageof14",
        defaultMessage: "Attacker Takes Damage of 14",
      },
    ],
    runes: ["Shael", "Thul", "Amn"],
  },
  {
    name: "Leaf",
    reqLvl: 19,
    allowed: ["Staves"],
    stats: [
      {
        id: "stats.Adds530FireDamage",
        defaultMessage: "Adds 5-30 Fire Damage",
      },
      {
        id: "stats.3ToFireSkills",
        defaultMessage: "+3 To Fire Skills",
      },
      {
        id: "stats.3ToFireBoltSorceressOnly",
        defaultMessage: "+3 To Fire Bolt (Sorceress Only)",
      },
      {
        id: "stats.3ToInfernoSorceressOnly",
        defaultMessage: "+3 To Inferno (Sorceress Only)",
      },
      {
        id: "stats.3ToWarmthSorceressOnly",
        defaultMessage: "+3 To Warmth (Sorceress Only)",
      },
      {
        id: "stats.2ToManaAfterEachKill",
        defaultMessage: "+2 To Mana After Each Kill",
      },
      {
        id: "stats.2PerCharacterLevel2198ToDefenseBasedOnCharacterLevel",
        defaultMessage:
          "+ (2 Per Character Level) +2-198 To Defense (Based On Character Level)",
      },
      {
        id: "stats.ColdResist33%",
        defaultMessage: "Cold Resist +33%",
      },
    ],
    runes: ["Tir", "Ral"],
  },
  {
    name: "CallToArms",
    reqLvl: 57,
    allowed: ["Weapons"],
    stats: [
      {
        id: "stats.1ToAllSkills",
        defaultMessage: "+1 To All Skills",
      },
      {
        id: "stats.40%IncreasedAttackSpeed",
        defaultMessage: "+40% Increased Attack Speed",
      },
      {
        id: "stats.250290%EnhancedDamage",
        defaultMessage: "+250-290% Enhanced Damage",
      },
      {
        id: "stats.Adds530FireDamage",
        defaultMessage: "Adds 5-30 Fire Damage",
      },
      {
        id: "stats.7%LifeStolenPerHit",
        defaultMessage: "7% Life Stolen Per Hit",
      },
      {
        id: "stats.26ToBattleCommand",
        defaultMessage: "+2-6 To Battle Command",
      },
      {
        id: "stats.16ToBattleOrders",
        defaultMessage: "+1-6 To Battle Orders",
      },
      {
        id: "stats.14ToBattleCry",
        defaultMessage: "+1-4 To Battle Cry",
      },
      {
        id: "stats.PreventMonsterHeal",
        defaultMessage: "Prevent Monster Heal",
      },
      {
        id: "stats.ReplenishLife12",
        defaultMessage: "Replenish Life +12",
      },
      {
        id: "stats.30%BetterChanceofGettingMagicItems",
        defaultMessage: "30% Better Chance of Getting Magic Items",
      },
    ],
    runes: ["Amn", "Ral", "Mal", "Ist", "Ohm"],
  },
  {
    name: "Lawbringer",
    reqLvl: 43,
    allowed: ["Swords", "Hammers", "Scepters"],
    stats: [
      {
        id: "stats.20%ChanceToCastLevel15DecrepifyOnStriking",
        defaultMessage: "20% Chance To Cast Level 15 Decrepify On Striking",
      },
      {
        id: "stats.Level1618SanctuaryAuraWhenEquipped",
        defaultMessage: "Level 16-18 Sanctuary Aura When Equipped",
      },
      {
        id: "stats.50%TargetDefense",
        defaultMessage: "-50% Target Defense",
      },
      {
        id: "stats.Adds150210FireDamage",
        defaultMessage: "Adds 150-210 Fire Damage",
      },
      {
        id: "stats.Adds130180ColdDamage",
        defaultMessage: "Adds 130-180 Cold Damage",
      },
      {
        id: "stats.7%LifeStolenPerHit",
        defaultMessage: "7% Life Stolen Per Hit",
      },
      {
        id: "stats.SlainMonstersRestInPeace",
        defaultMessage: "Slain Monsters Rest In Peace",
      },
      {
        id: "stats.200250DefenseVsMissile",
        defaultMessage: "+200-250 Defense Vs. Missile",
      },
      {
        id: "stats.10ToDexterity",
        defaultMessage: "+10 To Dexterity",
      },
      {
        id: "stats.75%ExtraGoldFromMonsters",
        defaultMessage: "75% Extra Gold From Monsters",
      },
    ],
    runes: ["Amn", "Lem", "Ko"],
  },
  {
    name: "Spirit",
    reqLvl: 25,
    allowed: ["Shields"],
    stats: [
      {
        id: "stats.2ToAllSkills",
        defaultMessage: "+2 To All Skills",
      },
      {
        id: "stats.2535%FasterCastRate",
        defaultMessage: "+25-35% Faster Cast Rate",
      },
      {
        id: "stats.55%FasterHitRecovery",
        defaultMessage: "+55% Faster Hit Recovery",
      },
      {
        id: "stats.ColdResist35",
        defaultMessage: "Cold Resist +35%",
      },
      {
        id: "stats.LightningResist35",
        defaultMessage: "Lightning Resist +35%",
      },
      {
        id: "stats.PoisonResist35",
        defaultMessage: "Poison Resist +35%",
      },
      {
        id: "stats.250DefenseVsMissile",
        defaultMessage: "+250 Defense Vs. Missile",
      },
      {
        id: "stats.22ToVitality",
        defaultMessage: "+22 To Vitality",
      },
      {
        id: "stats.89112ToMana",
        defaultMessage: "+89-112 To Mana",
      },
      {
        id: "stats.38MagicAbsorb",
        defaultMessage: "+3-8 Magic Absorb",
      },
      {
        id: "stats.AttackerTakesDamageof14",
        defaultMessage: "Attacker Takes Damage of 14",
      },
    ],
    runes: ["Tal", "Thul", "Ort", "Amn"],
  },
  {
    name: "Spirit",
    reqLvl: 25,
    allowed: ["Swords"],
    stats: [
      {
        id: "stats.2ToAllSkills",
        defaultMessage: "+2 To All Skills",
      },
      {
        id: "stats.2535%FasterCastRate",
        defaultMessage: "+25-35% Faster Cast Rate",
      },
      {
        id: "stats.55%FasterHitRecovery",
        defaultMessage: "+55% Faster Hit Recovery",
      },
      {
        id: "stats.Adds150LightningDamage",
        defaultMessage: "Adds 1-50 Lightning Damage",
      },
      {
        id: "stats.Adds314ColdDamage3SecondDuration",
        defaultMessage: "Adds 3-14 Cold Damage 3 Second Duration",
      },
      {
        id: "stats.75PoisonDamageOver5Seconds",
        defaultMessage: "+75 Poison Damage Over 5 Seconds",
      },
      {
        id: "stats.7%LifeStolenPerHit",
        defaultMessage: "7% Life Stolen Per Hit",
      },
      {
        id: "stats.250DefenseVsMissile",
        defaultMessage: "+250 Defense Vs. Missile",
      },
      {
        id: "stats.22ToVitality",
        defaultMessage: "+22 To Vitality",
      },
      {
        id: "stats.89112ToMana",
        defaultMessage: "+89-112 To Mana",
      },
      {
        id: "stats.38MagicAbsorb",
        defaultMessage: "+3-8 Magic Absorb",
      },
      // {
      //   id: "stats.AttackerTakesDamageof14",
      //   defaultMessage: "Attacker Takes Damage of 14",
      // },
    ],
    runes: ["Tal", "Thul", "Ort", "Amn"],
  },
  {
    name: "Rhyme",
    reqLvl: 29,
    allowed: ["Shields"],
    stats: [
      {
        id: "stats.20%IncreasedChanceofBlocking",
        defaultMessage: "20% Increased Chance of Blocking",
      },
      {
        id: "stats.40%FasterBlockRate",
        defaultMessage: "40% Faster Block Rate",
      },
      {
        id: "stats.25toAllResistances",
        defaultMessage: "+25 to All Resistances",
      },
      {
        id: "stats.RegenerateMana15%",
        defaultMessage: "Regenerate Mana 15%",
      },
      {
        id: "stats.CannotBeFrozen",
        defaultMessage: "Cannot Be Frozen",
      },
      {
        id: "stats.50%ExtraGoldFromMonsters",
        defaultMessage: "50% Extra Gold From Monsters",
      },
      {
        id: "stats.25%BetterChanceOfGettingMagicItems",
        defaultMessage: "25% Better Chance Of Getting Magic Items",
      },
    ],
    runes: ["Shael", "Eth"],
  },
  {
    name: "Dream",
    reqLvl: 65,
    allowed: ["Shields"],
    stats: [
      {
        id: "stats.10%ChanceToCastLevel15ConfuseWhenStruck",
        defaultMessage: "10% Chance To Cast Level 15 Confuse When Struck",
      },
      {
        id: "stats.Level15HolyShockAuraWhenEquipped",
        defaultMessage: "Level 15 Holy Shock Aura When Equipped",
      },
      {
        id: "stats.2030%FasterHitRecovery",
        defaultMessage: "+20-30% Faster Hit Recovery",
      },
      {
        id: "stats.30%EnhancedDefense",
        defaultMessage: "+30% Enhanced Defense",
      },
      {
        id: "stats.150220Defense",
        defaultMessage: "+150-220 Defense",
      },
      {
        id: "stats.10ToVitality",
        defaultMessage: "+10 To Vitality",
      },
      {
        id: "stats.50ToLifeShieldsOnly",
        defaultMessage: "+50 To Life (Shields Only)",
      },
      {
        id: "stats.062561875ToManaBasedOnCharacterLevel",
        defaultMessage: "+0.625-61.875 To Mana (Based On Character Level)",
      },
      {
        id: "stats.AllResistances520",
        defaultMessage: "All Resistances +5-20",
      },
      {
        id: "stats.1225%BetterChanceofGettingMagicItems",
        defaultMessage: "12-25% Better Chance of Getting Magic Items",
      },
    ],
    runes: ["Io", "Jah", "Pul"],
  },
  {
    name: "Dream",
    reqLvl: 65,
    allowed: ["Helms"],
    stats: [
      {
        id: "stats.10%ChanceToCastLevel15ConfuseWhenStruck",
        defaultMessage: "10% Chance To Cast Level 15 Confuse When Struck",
      },
      {
        id: "stats.Level15HolyShockAuraWhenEquipped",
        defaultMessage: "Level 15 Holy Shock Aura When Equipped",
      },
      {
        id: "stats.2030%FasterHitRecovery",
        defaultMessage: "+20-30% Faster Hit Recovery",
      },
      {
        id: "stats.30%EnhancedDefense",
        defaultMessage: "+30% Enhanced Defense",
      },
      {
        id: "stats.150220Defense",
        defaultMessage: "+150-220 Defense",
      },
      {
        id: "stats.10ToVitality",
        defaultMessage: "+10 To Vitality",
      },
      {
        id: "stats.IncreaseMaximumLife5%HelmsOnly",
        defaultMessage: "Increase Maximum Life 5% (Helms Only)",
      },
      {
        id: "stats.062561875ToManaBasedOnCharacterLevel",
        defaultMessage: "+0.625-61.875 To Mana (Based On Character Level)",
      },
      {
        id: "stats.AllResistances520",
        defaultMessage: "All Resistances +5-20",
      },
      {
        id: "stats.1225%BetterChanceofGettingMagicItems",
        defaultMessage: "12-25% Better Chance of Getting Magic Items",
      },
    ],
    runes: ["Io", "Jah", "Pul"],
  },
  {
    name: "Fortitude",
    reqLvl: 59,
    allowed: ["Weapons"],
    stats: [
      {
        id: "stats.20%ChanceToCastLevel15ChillingArmorwhenStruck",
        defaultMessage:
          "20% Chance To Cast Level 15 Chilling Armor when Struck",
      },
      {
        id: "stats.25%FasterCastRate",
        defaultMessage: "+25% Faster Cast Rate",
      },
      {
        id: "stats.300%EnhancedDamage",
        defaultMessage: "+300% Enhanced Damage",
      },
      {
        id: "stats.9ToMinimumDamage",
        defaultMessage: "+9 To Minimum Damage",
      },
      {
        id: "stats.50ToAttackRating",
        defaultMessage: "+50 To Attack Rating",
      },
      {
        id: "stats.20%DeadlyStrike",
        defaultMessage: "20% Deadly Strike",
      },
      {
        id: "stats.HitCausesMonsterToFlee25%",
        defaultMessage: "Hit Causes Monster To Flee 25%",
      },
      {
        id: "stats.200%EnhancedDefense",
        defaultMessage: "+200% Enhanced Defense",
      },
      {
        id: "stats.XToLifeBasedonCharacterLevel",
        defaultMessage: "+X To Life (Based on Character Level)",
      },
      {
        id: "stats.AllResistances2530",
        defaultMessage: "All Resistances +25-30",
      },
      {
        id: "stats.12%DamageTakenGoesToMana",
        defaultMessage: "12% Damage Taken Goes To Mana",
      },
      {
        id: "stats.1ToLightRadius",
        defaultMessage: "+1 To Light Radius",
      },
    ],
    runes: ["El", "Sol", "Dol", "Lo"],
  },
  {
    name: "Fortitude",
    reqLvl: 59,
    allowed: ["BodyArmor"],
    stats: [
      {
        id: "stats.20%ChanceToCastLevel15ChillingArmorwhenStruck",
        defaultMessage:
          "20% Chance To Cast Level 15 Chilling Armor when Struck",
      },
      {
        id: "stats.25%FasterCastRate",
        defaultMessage: "+25% Faster Cast Rate",
      },
      {
        id: "stats.300%EnhancedDamage",
        defaultMessage: "+300% Enhanced Damage",
      },
      {
        id: "stats.200%EnhancedDefense",
        defaultMessage: "+200% Enhanced Defense",
      },
      {
        id: "stats.XToLifeBasedonCharacterLevel",
        defaultMessage: "+X To Life (Based on Character Level)",
      },
      {
        id: "stats.AllResistances2530",
        defaultMessage: "All Resistances +25-30",
      },
      {
        id: "stats.12%DamageTakenGoesToMana",
        defaultMessage: "12% Damage Taken Goes To Mana",
      },
      {
        id: "stats.1ToLightRadius",
        defaultMessage: "+1 To Light Radius",
      },
      {
        id: "stats.15Defense",
        defaultMessage: "+15 Defense",
      },
      {
        id: "stats.ReplenishLife7",
        defaultMessage: "Replenish Life +7",
      },
      {
        id: "stats.5ToMaximumLightningResist",
        defaultMessage: "+5% To Maximum Lightning Resist",
      },
      {
        id: "stats.DamageReducedBy7",
        defaultMessage: "Damage Reduced By 7",
      },
    ],
    runes: ["El", "Sol", "Dol", "Lo"],
  },
  {
    name: "Phoenix",
    reqLvl: 65,
    allowed: ["Weapons", "Shields"],
    stats: [
      {
        id: "stats.100%ChanceToCastlevel40BlazeWhenYouLevelup",
        defaultMessage: "100% Chance To Cast level 40 Blaze When You Level-up",
      },
      {
        id: "stats.40%ChanceToCastLevel22FirestormOnStriking",
        defaultMessage: "40% Chance To Cast Level 22 Firestorm On Striking",
      },
      {
        id: "stats.Level1015RedemptionAuraWhenEquipped",
        defaultMessage: "Level 10-15 Redemption Aura When Equipped",
      },
      {
        id: "stats.350400%EnhancedDamage",
        defaultMessage: "+350-400% Enhanced Damage",
      },
      {
        id: "stats.IgnoresTargetsDefense",
        defaultMessage: "Ignores Target's Defense",
      },
      {
        id: "stats.14%ManaStolenPerHit",
        defaultMessage: "14% Mana Stolen Per Hit",
      },
      {
        id: "stats.28%ToEnemyFireResistance",
        defaultMessage: "-28% To Enemy Fire Resistance",
      },
      {
        id: "stats.20%DeadlyStrike",
        defaultMessage: "20% Deadly Strike",
      },
      {
        id: "stats.350400DefenseVsMissile",
        defaultMessage: "+350-400 Defense Vs. Missile",
      },
      {
        id: "stats.1521FireAbsorb",
        defaultMessage: "+15-21 Fire Absorb",
      },
    ],
    runes: ["Vex", "Vex", "Lo", "Jah"],
  },
  {
    name: "HeartoftheOak",
    reqLvl: 55,
    allowed: ["Maces", "Staves"],
    stats: [
      {
        id: "stats.3ToAllSkills",
        defaultMessage: "+3 To All Skills",
      },
      {
        id: "stats.40%FasterCastRate",
        defaultMessage: "+40% Faster Cast Rate",
      },
      {
        id: "stats.75%DamageToDemons",
        defaultMessage: "+75% Damage To Demons",
      },
      {
        id: "stats.100ToAttackRatingAgainstDemons",
        defaultMessage:
          "+100 To Attack Rating Against DemonsAdds 3-14 Cold Damage, 3 sec.Duration",
      },
      {
        id: "stats.Adds314ColdDamage3secDuration",
        defaultMessage: "Adds 3-14 Cold Damage, 3 sec.Duration",
      },
      {
        id: "stats.7%ManaStolenPerHit",
        defaultMessage: "7% Mana Stolen Per Hit",
      },
      {
        id: "stats.10ToDexterity",
        defaultMessage: "+10 To Dexterity",
      },
      {
        id: "stats.ReplenishLife20",
        defaultMessage: "Replenish Life +20",
      },
      {
        id: "stats.IncreaseMaximumMana15%",
        defaultMessage: "Increase Maximum Mana 15%",
      },
      {
        id: "stats.AllResistances3040",
        defaultMessage: "All Resistances +30-40",
      },
      {
        id: "stats.Level4OakSage25Charges",
        defaultMessage: "Level 4 Oak Sage (25 Charges)",
      },
      {
        id: "stats.Level14Raven60Charges",
        defaultMessage: "Level 14 Raven (60 Charges)",
      },
    ],
    runes: ["Ko", "Vex", "Pul", "Thul"],
  },
  {
    name: "CrescentMoon",
    reqLvl: 47,
    allowed: ["Polearms", "Axes", "Swords"],
    stats: [
      {
        id: "stats.10%ChanceToCastLevel17ChainLightningOnStriking",
        defaultMessage:
          "10% Chance To Cast Level 17 Chain Lightning On Striking",
      },
      {
        id: "stats.7%ChanceToCastLevel13StaticFieldOnStriking",
        defaultMessage: "7% Chance To Cast Level 13 Static Field On Striking",
      },
      {
        id: "stats.20%IncreasedAttackSpeed",
        defaultMessage: "+20% Increased Attack Speed",
      },
      {
        id: "stats.180220%EnhancedDamage",
        defaultMessage: "+180-220% Enhanced Damage",
      },
      {
        id: "stats.IgnoreTargetsDefense",
        defaultMessage: "Ignore Target's Defense",
      },
      {
        id: "stats.35%ToEnemyLightningResist",
        defaultMessage: "-35% To Enemy Lightning Resist",
      },
      {
        id: "stats.25%ChanceofOpenWounds",
        defaultMessage: "25% Chance of Open Wounds",
      },
      {
        id: "stats.911MagicAbsorb",
        defaultMessage: "+9-11 Magic Absorb",
      },
      {
        id: "stats.2ToManaAfterEachKill",
        defaultMessage: "+2 To Mana After Each Kill",
      },
      {
        id: "stats.Level18SummonSpiritWolf30Charges",
        defaultMessage: "Level 18 Summon Spirit Wolf (30 Charges)",
      },
    ],
    runes: ["Shael", "Um", "Tir"],
  },
  {
    name: "Rift",
    reqLvl: 53,
    allowed: ["Polearms", "Scepters"],
    stats: [
      {
        id: "stats.20%ChanceToCastLevel16TornadoOnStriking",
        defaultMessage: "20% Chance To Cast Level 16 Tornado On Striking",
      },
      {
        id: "stats.16%ChanceToCastLevel21FrozenOrbOnAttack",
        defaultMessage: "16% Chance To Cast Level 21 Frozen Orb On Attack",
      },
      {
        id: "stats.20%BonusToAttackRating",
        defaultMessage: "20% Bonus To Attack Rating",
      },
      {
        id: "stats.Adds160250MagicDamage",
        defaultMessage: "Adds 160-250 Magic Damage",
      },
      {
        id: "stats.Adds60180FireDamage",
        defaultMessage: "Adds 60-180 Fire Damage",
      },
      {
        id: "stats.510ToAllStats",
        defaultMessage: "+5-10 To All Stats",
      },
      {
        id: "stats.10ToDexterity",
        defaultMessage: "+10 To Dexterity",
      },
      {
        id: "stats.38%DamageTakenGoesToMana",
        defaultMessage: "38% Damage Taken Goes To Mana",
      },
      {
        id: "stats.75%ExtraGoldFromMonsters",
        defaultMessage: "75% Extra Gold From Monsters",
      },
      {
        id: "stats.Level15IronMaiden40Charges",
        defaultMessage: "Level 15 Iron Maiden (40 Charges)",
      },
      {
        id: "stats.Requirements20%",
        defaultMessage: "Requirements -20%",
      },
    ],
    runes: ["Hel", "Ko", "Lem", "Gul"],
  },
  {
    name: "Malice",
    reqLvl: 15,
    allowed: ["MeleeWeapons"],
    stats: [
      {
        id: "stats.33%EnhancedDamage",
        defaultMessage: "+33% Enhanced Damage",
      },
      {
        id: "stats.9ToMaximumDamage",
        defaultMessage: "+9 To Maximum Damage",
      },
      {
        id: "stats.100%ChanceOfOpenWounds",
        defaultMessage: "100% Chance Of Open Wounds",
      },
      {
        id: "stats.25%TargetDefense",
        defaultMessage: "-25% Target Defense",
      },
      {
        id: "stats.100ToMonsterDefenseperHit",
        defaultMessage: "-100 To Monster Defense per Hit",
      },
      {
        id: "stats.PreventMonsterHeal",
        defaultMessage: "Prevent Monster Heal",
      },
      {
        id: "stats.50ToAttackRating",
        defaultMessage: "+50 To Attack Rating",
      },
      {
        id: "stats.DrainLife5",
        defaultMessage: "Drain Life -5",
      },
    ],
    runes: ["Ith", "El", "Eth"],
  },
  {
    name: "Oath",
    reqLvl: 49,
    allowed: ["Swords", "Axes", "Maces"],
    stats: [
      {
        id: "stats.30%ChanceToCastLevel20BoneSpiritOnStriking",
        defaultMessage: "30% Chance To Cast Level 20 Bone Spirit On Striking",
      },
      {
        id: "stats.Indestructible",
        defaultMessage: "Indestructible",
      },
      {
        id: "stats.50%IncreasedAttackSpeed",
        defaultMessage: "+50% Increased Attack Speed",
      },
      {
        id: "stats.210340%EnhancedDamage",
        defaultMessage: "+210-340% Enhanced Damage",
      },
      {
        id: "stats.75%DamageToDemons",
        defaultMessage: "+75% Damage To Demons",
      },
      {
        id: "stats.100ToAttackRatingAgainstDemons",
        defaultMessage: "+100 To Attack Rating Against Demons",
      },
      {
        id: "stats.PreventMonsterHeal",
        defaultMessage: "Prevent Monster Heal",
      },
      {
        id: "stats.10ToEnergy",
        defaultMessage: "+10 To Energy",
      },
      {
        id: "stats.1015MagicAbsorb",
        defaultMessage: "+10-15 Magic Absorb",
      },
      {
        id: "stats.Level16HeartofWolverine20Charges",
        defaultMessage: "Level 16 Heart of Wolverine (20 Charges)",
      },
      {
        id: "stats.Level17IronGolem14Charges",
        defaultMessage: "Level 17 Iron Golem (14 Charges)",
      },
    ],
    runes: ["Shael", "Pul", "Mal", "Lum"],
  },
  {
    name: "AncientsPledge",
    reqLvl: 21,
    allowed: ["Shields"],
    stats: [
      {
        id: "stats.50%EnhancedDefense",
        defaultMessage: "+50% Enhanced Defense",
      },
      {
        id: "stats.ColdResist43%",
        defaultMessage: "Cold Resist +43%",
      },
      {
        id: "stats.FireResist48%",
        defaultMessage: "Fire Resist +48%",
      },
      {
        id: "stats.LightningResist48%",
        defaultMessage: "Lightning Resist +48%",
      },
      {
        id: "stats.PoisonResist48%",
        defaultMessage: "Poison Resist +48%",
      },
      {
        id: "stats.10%DamageGoesToMana",
        defaultMessage: "10% Damage Goes To Mana",
      },
    ],
    runes: ["Ral", "Ort", "Tal"],
  },
  {
    name: "Steel",
    reqLvl: 13,
    allowed: ["Swords", "Axes", "Maces"],
    stats: [
      {
        id: "stats.20%EnhancedDamage",
        defaultMessage: "20% Enhanced Damage",
      },
      {
        id: "stats.3ToMinimumDamage",
        defaultMessage: "+3 To Minimum Damage",
      },
      {
        id: "stats.3ToMaximumDamage",
        defaultMessage: "+3 To Maximum Damage",
      },
      {
        id: "stats.50ToAttackRating",
        defaultMessage: "+50 To Attack Rating",
      },
      {
        id: "stats.50%ChanceOfOpenWounds",
        defaultMessage: "50% Chance Of Open Wounds",
      },
      {
        id: "stats.25%IncreasedAttackSpeed",
        defaultMessage: "25% Increased Attack Speed",
      },
      {
        id: "stats.2ToManaAfterEachKill",
        defaultMessage: "+2 To Mana After Each Kill",
      },
      {
        id: "stats.1ToLightRadius",
        defaultMessage: "+1 To Light Radius",
      },
    ],
    runes: ["Tir", "El"],
  },
  {
    name: "Delirium",
    reqLvl: 51,
    allowed: ["Helms"],
    stats: [
      {
        id: "stats.1%ChanceToCastLevel50DeliriummorphWhenStruck",
        defaultMessage:
          "1% Chance To Cast Level 50 Delirium (morph) When Struck",
      },
      {
        id: "stats.6%ChanceToCastLevel14MindBlastWhenStruck",
        defaultMessage: "6% Chance To Cast Level 14 Mind Blast When Struck",
      },
      {
        id: "stats.14%ChanceToCastLevel13TerrorWhenStruck",
        defaultMessage: "14% Chance To Cast Level 13 Terror When Struck",
      },
      {
        id: "stats.11%ChanceToCastLevel18ConfuseOnStriking",
        defaultMessage: "11% Chance To Cast Level 18 Confuse On Striking",
      },
      {
        id: "stats.2ToAllSkills",
        defaultMessage: "+2 To All Skills",
      },
      {
        id: "stats.261Defense",
        defaultMessage: "+261 Defense",
      },
      {
        id: "stats.10ToVitality",
        defaultMessage: "+10 To Vitality",
      },
      {
        id: "stats.50%ExtraGoldFromMonsters",
        defaultMessage: "50% Extra Gold From Monsters",
      },
      {
        id: "stats.25%BetterChanceofGettingMagicItems",
        defaultMessage: "25% Better Chance of Getting Magic Items",
      },
      {
        id: "stats.Level17Attract60Charges",
        defaultMessage: "Level 17 Attract (60 Charges)",
      },
    ],
    runes: ["Lem", "Ist", "Io"],
  },
  {
    name: "Chaos",
    reqLvl: 57,
    allowed: ["Katars"],
    stats: [
      {
        id: "stats.9%ChanceToCastLevel11FrozenOrbOnStriking",
        defaultMessage: "9% Chance To Cast Level 11 Frozen Orb On Striking",
      },
      {
        id: "stats.11%ChanceToCastLevel9ChargedBoltOnStriking",
        defaultMessage: "11% Chance To Cast Level 9 Charged Bolt On Striking",
      },
      {
        id: "stats.35%IncreasedAttackSpeed",
        defaultMessage: "+35% Increased Attack Speed",
      },
      {
        id: "stats.290340%EnhancedDamage",
        defaultMessage: "+290-340% Enhanced Damage",
      },
      {
        id: "stats.Adds216471MagicDamage",
        defaultMessage: "Adds 216-471 Magic Damage",
      },
      {
        id: "stats.25%ChanceofOpenWounds",
        defaultMessage: "25% Chance of Open Wounds",
      },
      {
        id: "stats.1ToWhirlwind",
        defaultMessage: "+1 To Whirlwind",
      },
      {
        id: "stats.10ToStrength",
        defaultMessage: "+10 To Strength",
      },
      {
        id: "stats.15LifeAfterEachDemonKill",
        defaultMessage: "+15 Life After Each Demon Kill",
      },
    ],
    runes: ["Fal", "Ohm", "Um"],
  },
  {
    name: "Faith",
    reqLvl: 65,
    allowed: ["MissileWeapons"],
    stats: [
      {
        id: "stats.Level1215FanaticismAuraWhenEquipped",
        defaultMessage: "Level 12-15 Fanaticism Aura When Equipped",
      },
      {
        id: "stats.12ToAllSkills",
        defaultMessage: "+1-2 To All Skills",
      },
      {
        id: "stats.330%EnhancedDamage",
        defaultMessage: "+330% Enhanced Damage",
      },
      {
        id: "stats.IgnoreTargetsDefense",
        defaultMessage: "Ignore Target's Defense",
      },
      {
        id: "stats.300%BonusToAttackRating",
        defaultMessage: "300% Bonus To Attack Rating",
      },
      {
        id: "stats.75%DamageToUndead",
        defaultMessage: "+75% Damage To Undead",
      },
      {
        id: "stats.50ToAttackRatingAgainstUndead",
        defaultMessage: "+50 To Attack Rating Against Undead",
      },
      {
        id: "stats.120FireDamage",
        defaultMessage: "+120 Fire Damage",
      },
      {
        id: "stats.AllResistances15",
        defaultMessage: "All Resistances +15",
      },
      {
        id: "stats.10%ReanimateAs:Returned",
        defaultMessage: "10% Reanimate As: Returned",
      },
      {
        id: "stats.75%ExtraGoldFromMonsters",
        defaultMessage: "75% Extra Gold From Monsters",
      },
    ],
    runes: ["Ohm", "Jah", "Lem", "Eld"],
  },
  {
    name: "Exile",
    reqLvl: 57,
    allowed: ["PaladinShields"],
    stats: [
      {
        id: "stats.15%ChanceToCastLevel5LifeTapOnStriking",
        defaultMessage: "15% Chance To Cast Level 5 Life Tap On Striking",
      },
      {
        id: "stats.Level1316DefianceAuraWhenEquipped",
        defaultMessage: "Level 13-16 Defiance Aura When Equipped",
      },
      {
        id: "stats.2ToOffensiveAurasPaladinOnly",
        defaultMessage: "+2 To Offensive Auras (Paladin Only)",
      },
      {
        id: "stats.30%FasterBlockRate",
        defaultMessage: "+30% Faster Block Rate",
      },
      {
        id: "stats.FreezesTarget",
        defaultMessage: "Freezes Target",
      },
      {
        id: "stats.220260%EnhancedDefense",
        defaultMessage: "+220-260% Enhanced Defense",
      },
      {
        id: "stats.ReplenishLife7",
        defaultMessage: "Replenish Life +7",
      },
      {
        id: "stats.5%ToMaximumColdResist",
        defaultMessage: "+5% To Maximum Cold Resist",
      },
      {
        id: "stats.5%ToMaximumFireResist",
        defaultMessage: "+5% To Maximum Fire Resist",
      },
      {
        id: "stats.25%BetterChanceOfGettingMagicItems",
        defaultMessage: "25% Better Chance Of Getting Magic Items",
      },
      {
        id: "stats.Repairs1Durabilityin4Seconds",
        defaultMessage: "Repairs 1 Durability in 4 Seconds",
      },
    ],
    runes: ["Vex", "Ohm", "Ist", "Dol"],
  },
  {
    name: "Eternity",
    reqLvl: 63,
    allowed: ["MeleeWeapons"],
    stats: [
      {
        id: "stats.Indestructible",
        defaultMessage: "Indestructible",
      },
      {
        id: "stats.260310%EnhancedDamage",
        defaultMessage: "+260-310% Enhanced Damage",
      },
      {
        id: "stats.9ToMinimumDamage",
        defaultMessage: "+9 To Minimum Damage",
      },
      {
        id: "stats.7%LifeStolenPerHit",
        defaultMessage: "7% Life Stolen Per Hit",
      },
      {
        id: "stats.20%ChanceofCrushingBlow",
        defaultMessage: "20% Chance of Crushing Blow",
      },
      {
        id: "stats.HitBlindsTarget",
        defaultMessage: "Hit Blinds Target",
      },
      {
        id: "stats.SlowsTargetBy33%",
        defaultMessage: "Slows Target By 33%",
      },
      {
        id: "stats.RegenerateMana16%",
        defaultMessage: "Regenerate Mana 16%",
      },
      {
        id: "stats.ReplenishLife16",
        defaultMessage: "Replenish Life +16",
      },
      {
        id: "stats.CannotBeFrozen",
        defaultMessage: "Cannot Be Frozen",
      },
      {
        id: "stats.30%BetterChanceOfGettingMagicItems",
        defaultMessage: "30% Better Chance Of Getting Magic Items",
      },
      {
        id: "stats.Level8Revive88Charges",
        defaultMessage: "Level 8 Revive (88 Charges)",
      },
    ],
    runes: ["Amn", "Ber", "Ist", "Sol", "Sur"],
  },
  {
    name: "LastWish",
    reqLvl: 65,
    allowed: ["Swords", "Hammers", "Axes"],
    stats: [
      {
        id: "stats.6%ChanceToCastLevel11FadeWhenStruck",
        defaultMessage: "6% Chance To Cast Level 11 Fade When Struck",
      },
      {
        id: "stats.10%ChanceToCastLevel18LifeTapOnStriking",
        defaultMessage: "10% Chance To Cast Level 18 Life Tap On Striking",
      },
      {
        id: "stats.20%ChanceToCastLevel20ChargedBoltOnAttack",
        defaultMessage: "20% Chance To Cast Level 20 Charged Bolt On Attack",
      },
      {
        id: "stats.Level17MightAuraWhenEquipped",
        defaultMessage: "Level 17 Might Aura When Equipped",
      },
      {
        id: "stats.330375%EnhancedDamage",
        defaultMessage: "+330-375% Enhanced Damage",
      },
      {
        id: "stats.IgnoreTargetsDefense",
        defaultMessage: "Ignore Target's Defense",
      },
      {
        id: "stats.6070%ChanceofCrushingBlow",
        defaultMessage: "60-70% Chance of Crushing Blow",
      },
      {
        id: "stats.PreventMonsterHeal",
        defaultMessage: "Prevent Monster Heal",
      },
      {
        id: "stats.HitBlindsTarget",
        defaultMessage: "Hit Blinds Target",
      },
      {
        id: "stats.05percharacterlevel05495%ChanceofGettingMagicItemsBasedonCharacterLevel",
        defaultMessage:
          "+(0.5 per character level) 0.5-49.5% Chance of Getting Magic Items (Based on Character Level)",
      },
    ],
    runes: ["Jah", "Mal", "Jah", "Sur", "Jah", "Ber"],
  },
  {
    name: "Stealth",
    reqLvl: 17,
    allowed: ["BodyArmor"],
    stats: [
      {
        id: "stats.MagicDamageReducedBy3",
        defaultMessage: "Magic Damage Reduced By 3",
      },
      {
        id: "stats.6ToDexterity",
        defaultMessage: "+6 To Dexterity",
      },
      {
        id: "stats.15ToMaximumStamina",
        defaultMessage: "+15 To Maximum Stamina",
      },
      {
        id: "stats.PoisonResist30%",
        defaultMessage: "Poison Resist +30%",
      },
      {
        id: "stats.RegenerateMana15%",
        defaultMessage: "Regenerate Mana 15%",
      },
      {
        id: "stats.25%FasterRunWalk",
        defaultMessage: "25% Faster Run/Walk",
      },
      {
        id: "stats.25%FasterCastRate",
        defaultMessage: "25% Faster Cast Rate",
      },
      {
        id: "stats.25%FasterHitRecovery",
        defaultMessage: "25% Faster Hit Recovery",
      },
    ],
    runes: ["Tal", "Eth"],
  },
  {
    name: "Stone",
    reqLvl: 47,
    allowed: ["BodyArmor"],
    stats: [
      {
        id: "stats.60%FasterHitRecovery",
        defaultMessage: "+60% Faster Hit Recovery",
      },
      {
        id: "stats.250290%EnhancedDefense",
        defaultMessage: "+250-290% Enhanced Defense",
      },
      {
        id: "stats.300DefensevsMissile",
        defaultMessage: "+300 Defense vs. Missile",
      },
      {
        id: "stats.16ToStrength",
        defaultMessage: "+16 To Strength",
      },
      {
        id: "stats.16ToVitality",
        defaultMessage: "+16 To Vitality",
      },
      {
        id: "stats.10ToEnergy",
        defaultMessage: "+10 To Energy",
      },
      {
        id: "stats.AllResistances15",
        defaultMessage: "All Resistances +15",
      },
      {
        id: "stats.Level16MoltenBoulder80Charges",
        defaultMessage: "Level 16 Molten Boulder (80 Charges)",
      },
      {
        id: "stats.Level16ClayGolem16Charges",
        defaultMessage: "Level 16 Clay Golem (16 Charges)",
      },
    ],
    runes: ["Shael", "Um", "Pul", "Lum"],
  },
  {
    name: "Melody",
    reqLvl: 39,
    allowed: ["MissileWeapons"],
    stats: [
      {
        id: "stats.50%EnhancedDamage",
        defaultMessage: "+50% Enhanced Damage",
      },
      {
        id: "stats.300%DamageToUndead",
        defaultMessage: "+300% Damage To Undead",
      },
      {
        id: "stats.3ToBowandCrossbowSkillsAmazonOnly",
        defaultMessage: "+3 To Bow and Crossbow Skills (Amazon Only)",
      },
      {
        id: "stats.3ToCriticalStrikeAmazonOnly",
        defaultMessage: "+3 To Critical Strike (Amazon Only)",
      },
      {
        id: "stats.3ToDodgeAmazonOnly",
        defaultMessage: "+3 To Dodge (Amazon Only)",
      },
      {
        id: "stats.3ToSlowMissilesAmazonOnly",
        defaultMessage: "+3 To Slow Missiles (Amazon Only)",
      },
      {
        id: "stats.20%IncreasedAttackSpeed",
        defaultMessage: "20% Increased Attack Speed",
      },
      {
        id: "stats.10ToDexterity",
        defaultMessage: "+10 To Dexterity",
      },
      {
        id: "stats.Knockback",
        defaultMessage: "Knockback",
      },
    ],
    runes: ["Shael", "Ko", "Nef"],
  },
  {
    name: "Rain",
    reqLvl: 49,
    allowed: ["BodyArmor"],
    stats: [
      {
        id: "stats.5%ChanceToCastLevel15CycloneArmorWhenStruck",
        defaultMessage: "5% Chance To Cast Level 15 Cyclone Armor When Struck",
      },
      {
        id: "stats.5%ChanceToCastLevel15TwisterOnStriking",
        defaultMessage: "5% Chance To Cast Level 15 Twister On Striking",
      },
      {
        id: "stats.2ToDruidSkills",
        defaultMessage: "+2 To Druid Skills",
      },
      {
        id: "stats.100150ToMana",
        defaultMessage: "+100-150 To Mana",
      },
      {
        id: "stats.LightningResist30%",
        defaultMessage: "Lightning Resist +30%",
      },
      {
        id: "stats.MagicDamageReducedBy7",
        defaultMessage: "Magic Damage Reduced By 7",
      },
      {
        id: "stats.15%DamageTakenGoestoMana",
        defaultMessage: "15% Damage Taken Goes to Mana",
      },
    ],
    runes: ["Ort", "Mal", "Ith"],
  },
  {
    name: "Principle",
    reqLvl: 53,
    allowed: ["BodyArmor"],
    stats: [
      {
        id: "stats.100%ChanceToCastLevel5HolyBoltOnStriking",
        defaultMessage: "100% Chance To Cast Level 5 Holy Bolt On Striking",
      },
      {
        id: "stats.2ToPaladinSkillLevels",
        defaultMessage: "+2 To Paladin Skill Levels",
      },
      {
        id: "stats.50%DamagetoUndead",
        defaultMessage: "+50% Damage to Undead",
      },
      {
        id: "stats.100150ToLife",
        defaultMessage: "+100-150 To Life",
      },
      {
        id: "stats.15%SlowerStaminaDrain",
        defaultMessage: "15% Slower Stamina Drain",
      },
      {
        id: "stats.5%ToMaximumPoisonResist",
        defaultMessage: "+5% To Maximum Poison Resist",
      },
      {
        id: "stats.FireResist30%",
        defaultMessage: "Fire Resist +30%",
      },
    ],
    runes: ["Ral", "Gul", "Eld"],
  },
  {
    name: "Myth",
    reqLvl: 32,
    allowed: ["BodyArmor"],
    stats: [
      {
        id: "stats.3%ChanceToCastLevel1HowlWhenStruck",
        defaultMessage: "3% Chance To Cast Level 1 Howl When Struck",
      },
      {
        id: "stats.10%ChanceToCastLevel1TauntOnStriking",
        defaultMessage: "10% Chance To Cast Level 1 Taunt On Striking",
      },
      {
        id: "stats.2ToBarbarianSkillLevels",
        defaultMessage: "+2 To Barbarian Skill Levels",
      },
      {
        id: "stats.30DefenseVsMissile",
        defaultMessage: "+30 Defense Vs. Missile",
      },
      {
        id: "stats.ReplenishLife10",
        defaultMessage: "Replenish Life +10",
      },
      {
        id: "stats.AttackerTakesDamageof14",
        defaultMessage: "Attacker Takes Damage of 14",
      },
      {
        id: "stats.Requirements15%",
        defaultMessage: "Requirements -15%",
      },
    ],
    runes: ["Hel", "Amn", "Nef"],
  },
  {
    name: "Enlightenment",
    reqLvl: 45,
    allowed: ["BodyArmor"],
    stats: [
      {
        id: "stats.5%ChanceToCastLevel15BlazeWhenStruck",
        defaultMessage: "5% Chance To Cast Level 15 Blaze When Struck",
      },
      {
        id: "stats.5%ChanceToCastlevel15FireBallOnStriking",
        defaultMessage: "5% Chance To Cast level 15 Fire Ball On Striking",
      },
      {
        id: "stats.2ToSorceressSkillLevels",
        defaultMessage: "+2 To Sorceress Skill Levels",
      },
      {
        id: "stats.1ToWarmth",
        defaultMessage: "+1 To Warmth",
      },
      {
        id: "stats.30%EnhancedDefense",
        defaultMessage: "+30% Enhanced Defense",
      },
      {
        id: "stats.FireResist30%",
        defaultMessage: "Fire Resist +30%",
      },
      {
        id: "stats.DamageReducedBy7",
        defaultMessage: "Damage Reduced By 7",
      },
    ],
    runes: ["Pul", "Ral", "Sol"],
  },
  {
    name: "Bone",
    reqLvl: 47,
    allowed: ["BodyArmor"],
    stats: [
      {
        id: "stats.15%ChanceToCastlevel10BoneArmorWhenStruck",
        defaultMessage: "15% Chance To Cast level 10 Bone Armor When Struck",
      },
      {
        id: "stats.15%ChanceToCastlevel10BoneSpearOnStriking",
        defaultMessage: "15% Chance To Cast level 10 Bone Spear On Striking",
      },
      {
        id: "stats.2ToNecromancerSkillLevels",
        defaultMessage: "+2 To Necromancer Skill Levels",
      },
      {
        id: "stats.100150ToMana",
        defaultMessage: "+100-150 To Mana",
      },
      {
        id: "stats.AllResistances30",
        defaultMessage: "All Resistances +30",
      },
      {
        id: "stats.DamageReducedBy7",
        defaultMessage: "Damage Reduced By 7",
      },
    ],
    runes: ["Sol", "Um", "Um"],
  },
  {
    name: "Wrath",
    reqLvl: 63,
    allowed: ["MissileWeapons"],
    stats: [
      {
        id: "stats.30%ChanceToCastLevel1DecrepifyOnStriking",
        defaultMessage: "30% Chance To Cast Level 1 Decrepify On Striking",
      },
      {
        id: "stats.5%ChanceToCastLevel10LifeTapOnStriking",
        defaultMessage: "5% Chance To Cast Level 10 Life Tap On Striking",
      },
      {
        id: "stats.375%DamageToDemons",
        defaultMessage: "+375% Damage To Demons",
      },
      {
        id: "stats.100ToAttackRatingAgainstDemons",
        defaultMessage: "+100 To Attack Rating Against Demons",
      },
      {
        id: "stats.250300%DamageToUndead",
        defaultMessage: "+250-300% Damage To Undead",
      },
      {
        id: "stats.Adds85120MagicDamage",
        defaultMessage: "Adds 85-120 Magic Damage",
      },
      {
        id: "stats.Adds41240LightningDamage",
        defaultMessage: "Adds 41-240 Lightning Damage",
      },
      {
        id: "stats.20%ChanceofCrushingBlow",
        defaultMessage: "20% Chance of Crushing Blow",
      },
      {
        id: "stats.PreventMonsterHeal",
        defaultMessage: "Prevent Monster Heal",
      },
      {
        id: "stats.10ToEnergy",
        defaultMessage: "+10 To Energy",
      },
      {
        id: "stats.CannotBeFrozen",
        defaultMessage: "Cannot Be Frozen",
      },
    ],
    runes: ["Pul", "Lum", "Ber", "Mal"],
  },
  {
    name: "VoiceofReason",
    reqLvl: 43,
    allowed: ["Swords", "Maces"],
    stats: [
      {
        id: "stats.15%ChanceToCastLevel13FrozenOrbOnStriking",
        defaultMessage: "15% Chance To Cast Level 13 Frozen Orb On Striking",
      },
      {
        id: "stats.18%ChanceToCastLevel20IceBlastOnStriking",
        defaultMessage: "18% Chance To Cast Level 20 Ice Blast On Striking",
      },
      {
        id: "stats.50ToAttackRating",
        defaultMessage: "+50 To Attack Rating",
      },
      {
        id: "stats.220350%DamageToDemons",
        defaultMessage: "+220-350% Damage To Demons",
      },
      {
        id: "stats.355375%DamageToUndead",
        defaultMessage: "+355-375% Damage To Undead",
      },
      {
        id: "stats.50ToAttackRatingAgainstUndead",
        defaultMessage: "+50 To Attack Rating Against Undead",
      },
      {
        id: "stats.Adds100220ColdDamage",
        defaultMessage: "Adds 100-220 Cold Damage",
      },
      {
        id: "stats.24%ToEnemyColdResistance",
        defaultMessage: "-24% To Enemy Cold Resistance",
      },
      {
        id: "stats.10ToDexterity",
        defaultMessage: "+10 To Dexterity",
      },
      {
        id: "stats.CannotBeFrozen",
        defaultMessage: "Cannot Be Frozen",
      },
      {
        id: "stats.75%ExtraGoldFromMonsters",
        defaultMessage: "75% Extra Gold From Monsters",
      },
      {
        id: "stats.1ToLightRadius",
        defaultMessage: "+1 To Light Radius",
      },
    ],
    runes: ["Lem", "Ko", "El", "Eld"],
  },
  {
    name: "Pride",
    reqLvl: 67,
    allowed: ["Polearms"],
    stats: [
      {
        id: "stats.25%ChanceToCastLevel17FireWallWhenStruck",
        defaultMessage: "25% Chance To Cast Level 17 Fire Wall When Struck",
      },
      {
        id: "stats.Level1620ConcentrationAuraWhenEquipped",
        defaultMessage: "Level 16-20 Concentration Aura When Equipped",
      },
      {
        id: "stats.260300%BonusToAttackRating",
        defaultMessage: "260-300% Bonus To Attack Rating",
      },
      {
        id: "stats.199%DamageToDemonsBasedonCharacterLevel",
        defaultMessage: "+1-99% Damage To Demons (Based on Character Level)",
      },
      {
        id: "stats.Adds50280LightningDamage",
        defaultMessage: "Adds 50-280 Lightning Damage",
      },
      {
        id: "stats.20%DeadlyStrike",
        defaultMessage: "20% Deadly Strike",
      },
      {
        id: "stats.HitBlindsTarget",
        defaultMessage: "Hit Blinds Target",
      },
      {
        id: "stats.FreezesTarget3",
        defaultMessage: "Freezes Target +3",
      },
      {
        id: "stats.10ToVitality",
        defaultMessage: "+10 To Vitality",
      },
      {
        id: "stats.ReplenishLife8",
        defaultMessage: "Replenish Life +8",
      },
      {
        id: "stats.1875185625%ExtraGoldFromMonstersBasedonCharacterLevel",
        defaultMessage:
          "1.875-185.625% Extra Gold From Monsters (Based on Character Level)",
      },
    ],
    runes: ["Cham", "Sur", "Io", "Lo"],
  },
  {
    name: "Obedience",
    reqLvl: 41,
    allowed: ["Polearms"],
    stats: [
      {
        id: "stats.30%ChanceToCastLevel21EnchantWhenYouKillAnEnemy",
        defaultMessage:
          "30% Chance To Cast Level 21 Enchant When You Kill An Enemy",
      },
      {
        id: "stats.40%FasterHitRecovery",
        defaultMessage: "40% Faster Hit Recovery",
      },
      {
        id: "stats.370%EnhancedDamage",
        defaultMessage: "+370% Enhanced Damage",
      },
      {
        id: "stats.25%TargetDefense",
        defaultMessage: "-25% Target Defense",
      },
      {
        id: "stats.Adds314ColdDamage3SecondDuration",
        defaultMessage: "Adds 3-14 Cold Damage 3 Second Duration",
      },
      {
        id: "stats.25%ToEnemyFireResist",
        defaultMessage: "-25% To Enemy Fire Resist",
      },
      {
        id: "stats.40%ChanceofCrushingBlow",
        defaultMessage: "40% Chance of Crushing Blow",
      },
      {
        id: "stats.200300Defense",
        defaultMessage: "+200-300 Defense",
      },
      {
        id: "stats.10ToStrength",
        defaultMessage: "+10 To Strength",
      },
      {
        id: "stats.10ToDexterity",
        defaultMessage: "+10 To Dexterity",
      },
      {
        id: "stats.AllResistances2030",
        defaultMessage: "All Resistances +20-30",
      },
      {
        id: "stats.Requirements20%",
        defaultMessage: "Requirements -20%",
      },
    ],
    runes: ["Hel", "Ko", "Thul", "Eth", "Fal"],
  },
  {
    name: "Harmony",
    reqLvl: 39,
    allowed: ["MissileWeapons"],
    stats: [
      {
        id: "stats.Level10VigorAuraWhenEquipped",
        defaultMessage: "Level 10 Vigor Aura When Equipped",
      },
      {
        id: "stats.200275%EnhancedDamage",
        defaultMessage: "+200-275% Enhanced Damage",
      },
      {
        id: "stats.9ToMinimumDamage",
        defaultMessage: "+9 To Minimum Damage",
      },
      {
        id: "stats.9ToMaximumDamage",
        defaultMessage: "+9 To Maximum Damage",
      },
      {
        id: "stats.Adds55160LightningDamage",
        defaultMessage: "Adds 55-160 Lightning Damage",
      },
      {
        id: "stats.Adds55160FireDamage",
        defaultMessage: "Adds 55-160 Fire Damage",
      },
      {
        id: "stats.Adds55160ColdDamage",
        defaultMessage: "Adds 55-160 Cold Damage",
      },
      {
        id: "stats.26ToValkyrie",
        defaultMessage: "+2-6 To Valkyrie",
      },
      {
        id: "stats.10ToDexterity",
        defaultMessage: "+10 To Dexterity",
      },
      {
        id: "stats.RegenerateMana20%",
        defaultMessage: "Regenerate Mana 20%",
      },
      {
        id: "stats.2ToManaAfterEachKill",
        defaultMessage: "+2 To Mana After Each Kill",
      },
      {
        id: "stats.2ToLightRadius",
        defaultMessage: "+2 To Light Radius",
      },
      {
        id: "stats.Level20Revive25Charges",
        defaultMessage: "Level 20 Revive (25 Charges)",
      },
    ],
    runes: ["Tir", "Ith", "Sol", "Ko"],
  },
  {
    name: "Grief",
    reqLvl: 59,
    allowed: ["Axes", "Swords"],
    stats: [
      {
        id: "stats.35%ChanceToCastLevel15VenomOnStriking",
        defaultMessage: "35% Chance To Cast Level 15 Venom On Striking",
      },
      {
        id: "stats.3040%IncreasedAttackSpeed",
        defaultMessage: "+30-40% Increased Attack Speed",
      },
      {
        id: "stats.Damage340400",
        defaultMessage: "Damage +340-400",
      },
      {
        id: "stats.IgnoreTargetsDefense",
        defaultMessage: "Ignore Target's Defense",
      },
      {
        id: "stats.25%TargetDefense",
        defaultMessage: "-25% Target Defense",
      },
      {
        id: "stats.1875percharacterlevel1875185625%DamageToDemonsBasedonCharacterLevel",
        defaultMessage:
          "+(1.875 per character level) 1.875-185.625% Damage To Demons (Based on Character Level)",
      },
      {
        id: "stats.Adds530FireDamage",
        defaultMessage: "Adds 5-30 Fire Damage",
      },
      {
        id: "stats.2025%ToEnemyPoisonResist",
        defaultMessage: "-20-25% To Enemy Poison Resist",
      },
      {
        id: "stats.20%DeadlyStrike",
        defaultMessage: "20% Deadly Strike",
      },
      {
        id: "stats.PreventMonsterHeal",
        defaultMessage: "Prevent Monster Heal",
      },
      {
        id: "stats.2ToManaAfterEachKill",
        defaultMessage: "+2 To Mana After Each Kill",
      },
      {
        id: "stats.1015LifeAfterEachKill",
        defaultMessage: "+10-15 Life After Each Kill",
      },
    ],
    runes: ["Eth", "Tir", "Lo", "Mal", "Ral"],
  },
  {
    name: "Edge",
    reqLvl: 25,
    allowed: ["MissileWeapons"],
    stats: [
      {
        id: "stats.Level15ThornsAuraWhenEquipped",
        defaultMessage: "Level 15 Thorns Aura When Equipped",
      },
      {
        id: "stats.35%IncreasedAttackSpeed",
        defaultMessage: "+35% Increased Attack Speed",
      },
      {
        id: "stats.320380%DamageToDemons",
        defaultMessage: "+320-380% Damage To Demons",
      },
      {
        id: "stats.280%DamageToUndead",
        defaultMessage: "+280% Damage To Undead",
      },
      {
        id: "stats.75PoisonDamageOver5Seconds",
        defaultMessage: "+75 Poison Damage Over 5 Seconds",
      },
      {
        id: "stats.7%LifeStolenPerHit",
        defaultMessage: "7% Life Stolen Per Hit",
      },
      {
        id: "stats.PreventMonsterHeal",
        defaultMessage: "Prevent Monster Heal",
      },
      {
        id: "stats.510ToAllAttributes",
        defaultMessage: "+5-10 To All Attributes",
      },
      {
        id: "stats.2ToManaAfterEachKill",
        defaultMessage: "+2 To Mana After Each Kill",
      },
      {
        id: "stats.ReducesAllVendorPrices15%",
        defaultMessage: "Reduces All Vendor Prices 15%",
      },
    ],
    runes: ["Tir", "Tal", "Amn"],
  },
  {
    name: "Dragon",
    reqLvl: 61,
    allowed: ["BodyArmor"],
    stats: [
      {
        id: "stats.20%ChancetoCastLevel18VenomWhenStruck",
        defaultMessage: "20% Chance to Cast Level 18 Venom When Struck",
      },
      {
        id: "stats.12%ChanceToCastLevel15HydraOnStriking",
        defaultMessage: "12% Chance To Cast Level 15 Hydra On Striking",
      },
      {
        id: "stats.Level14HolyFireAuraWhenEquipped",
        defaultMessage: "Level 14 Holy Fire Aura When Equipped",
      },
      {
        id: "stats.360Defense",
        defaultMessage: "+360 Defense",
      },
      {
        id: "stats.230DefensevsMissile",
        defaultMessage: "+230 Defense vs. Missile",
      },
      {
        id: "stats.35ToAllAttributes",
        defaultMessage: "+3-5 To All Attributes",
      },
      {
        id: "stats.037537125ToStrengthBasedonCharacterLevel",
        defaultMessage: "+0.375-37.125 To Strength (Based on Character Level)",
      },
      {
        id: "stats.IncreaseMaximumMana5%ArmorOnly",
        defaultMessage: "Increase Maximum Mana 5% (Armor Only)",
      },
      {
        id: "stats.5%ToMaximumLightningResist",
        defaultMessage: "+5% To Maximum Lightning Resist",
      },
      {
        id: "stats.DamageReducedby7",
        defaultMessage: "Damage Reduced by 7",
      },
    ],
    runes: ["Sur", "Lo", "Sol"],
  },
  {
    name: "Dragon",
    reqLvl: 61,
    allowed: ["Shields"],
    stats: [
      {
        id: "stats.20%ChancetoCastLevel18VenomWhenStruck",
        defaultMessage: "20% Chance to Cast Level 18 Venom When Struck",
      },
      {
        id: "stats.12%ChanceToCastLevel15HydraOnStriking",
        defaultMessage: "12% Chance To Cast Level 15 Hydra On Striking",
      },
      {
        id: "stats.Level14HolyFireAuraWhenEquipped",
        defaultMessage: "Level 14 Holy Fire Aura When Equipped",
      },
      {
        id: "stats.360Defense",
        defaultMessage: "+360 Defense",
      },
      {
        id: "stats.230DefensevsMissile",
        defaultMessage: "+230 Defense vs. Missile",
      },
      {
        id: "stats.35ToAllAttributes",
        defaultMessage: "+3-5 To All Attributes",
      },
      {
        id: "stats.037537125ToStrengthBasedonCharacterLevel",
        defaultMessage: "+0.375-37.125 To Strength (Based on Character Level)",
      },
      {
        id: "stats.50ToManaShieldsOnly",
        defaultMessage: "+50 To Mana (Shields Only)",
      },
      {
        id: "stats.5%ToMaximumLightningResist",
        defaultMessage: "+5% To Maximum Lightning Resist",
      },
      {
        id: "stats.DamageReducedby7",
        defaultMessage: "Damage Reduced by 7",
      },
    ],
    runes: ["Sur", "Lo", "Sol"],
  },
  {
    name: "Destruction",
    reqLvl: 65,
    allowed: ["Polearms", "Swords"],
    stats: [
      {
        id: "stats.23%ChanceToCastLevel12VolcanoOnStriking",
        defaultMessage: "23% Chance To Cast Level 12 Volcano On Striking",
      },
      {
        id: "stats.5%ChanceToCastLevel23MoltenBoulderOnStriking",
        defaultMessage: "5% Chance To Cast Level 23 Molten Boulder On Striking",
      },
      {
        id: "stats.100%ChanceToCastlevel45MeteorWhenYouDie",
        defaultMessage: "100% Chance To Cast level 45 Meteor When You Die",
      },
      {
        id: "stats.15%ChanceToCastLevel22NovaOnAttack",
        defaultMessage: "15% Chance To Cast Level 22 Nova On Attack",
      },
      {
        id: "stats.350%EnhancedDamage",
        defaultMessage: "+350% Enhanced Damage",
      },
      {
        id: "stats.IgnoreTargetsDefense",
        defaultMessage: "Ignore Target's Defense",
      },
      {
        id: "stats.Adds100180MagicDamage",
        defaultMessage: "Adds 100-180 Magic Damage",
      },
      {
        id: "stats.7%ManaStolenPerHit",
        defaultMessage: "7% Mana Stolen Per Hit",
      },
      {
        id: "stats.20%ChanceOfCrushingBlow",
        defaultMessage: "20% Chance Of Crushing Blow",
      },
      {
        id: "stats.20%DeadlyStrike",
        defaultMessage: "20% Deadly Strike",
      },
      {
        id: "stats.PreventMonsterHeal",
        defaultMessage: "Prevent Monster Heal",
      },
      {
        id: "stats.10ToDexterity",
        defaultMessage: "+10 To Dexterity",
      },
    ],
    runes: ["Vex", "Lo", "Ber", "Jah", "Ko"],
  },
  {
    name: "Death",
    reqLvl: 55,
    allowed: ["Swords", "Axes"],
    stats: [
      {
        id: "stats.100%ChanceToCastLevel44ChainLightningWhenYouDie",
        defaultMessage:
          "100% Chance To Cast Level 44 Chain Lightning When You Die",
      },
      {
        id: "stats.25%ChanceToCastLevel18GlacialSpikeOnAttack",
        defaultMessage: "25% Chance To Cast Level 18 Glacial Spike On Attack",
      },
      {
        id: "stats.Indestructible",
        defaultMessage: "Indestructible",
      },
      {
        id: "stats.300385%EnhancedDamage",
        defaultMessage: "+300-385% Enhanced Damage",
      },
      {
        id: "stats.20%BonusToAttackRating",
        defaultMessage: "20% Bonus To Attack Rating",
      },
      {
        id: "stats.50ToAttackRating",
        defaultMessage: "+50 To Attack Rating",
      },
      {
        id: "stats.Adds150LightningDamage",
        defaultMessage: "Adds 1-50 Lightning Damage",
      },
      {
        id: "stats.7%ManaStolenPerHit",
        defaultMessage: "7% Mana Stolen Per Hit",
      },
      {
        id: "stats.50%ChanceofCrushingBlow",
        defaultMessage: "50% Chance of Crushing Blow",
      },
      {
        id: "stats.05perCharacterLevel05495%DeadlyStrikeBasedonCharacterLevel",
        defaultMessage:
          "+(0.5 per Character Level) 0.5-49.5% Deadly Strike (Based on Character Level)",
      },
      {
        id: "stats.1ToLightRadius",
        defaultMessage: "+1 To Light Radius",
      },
      {
        id: "stats.Level22BloodGolem15Charges",
        defaultMessage: "Level 22 Blood Golem (15 Charges)",
      },
      {
        id: "stats.Requirements20%",
        defaultMessage: "Requirements -20%",
      },
    ],
    runes: ["Hel", "El", "Vex", "Ort", "Gul"],
  },
  {
    name: "Wind",
    reqLvl: 61,
    allowed: ["MeleeWeapons"],
    stats: [
      {
        id: "stats.10%ChanceToCastLevel9TornadoOnStriking",
        defaultMessage: "10% Chance To Cast Level 9 Tornado On Striking",
      },
      {
        id: "stats.20%FasterRunWalk",
        defaultMessage: "+20% Faster Run/Walk",
      },
      {
        id: "stats.40%IncreasedAttackSpeed",
        defaultMessage: "+40% Increased Attack Speed",
      },
      {
        id: "stats.15%FasterHitRecovery",
        defaultMessage: "+15% Faster Hit Recovery",
      },
      {
        id: "stats.120160%EnhancedDamage",
        defaultMessage: "+120-160% Enhanced Damage",
      },
      {
        id: "stats.50%TargetDefense",
        defaultMessage: "-50% Target Defense",
      },
      {
        id: "stats.50ToAttackRating",
        defaultMessage: "+50 To Attack Rating",
      },
      {
        id: "stats.HitBlindsTarget",
        defaultMessage: "Hit Blinds Target",
      },
      {
        id: "stats.1ToLightRadius",
        defaultMessage: "+1 To Light Radius",
      },
      {
        id: "stats.Level13Twister127Charges",
        defaultMessage: "Level 13 Twister (127 Charges)",
      },
    ],
    runes: ["Sur", "El"],
  },
  {
    name: "Prudence",
    reqLvl: 49,
    allowed: ["BodyArmor"],
    stats: [
      {
        id: "stats.25%FasterHitRecovery",
        defaultMessage: "+25% Faster Hit Recovery",
      },
      {
        id: "stats.140170%EnhancedDefense",
        defaultMessage: "+140-170% Enhanced Defense",
      },
      {
        id: "stats.AllResistances2535",
        defaultMessage: "All Resistances +25-35",
      },
      {
        id: "stats.DamageReducedby3",
        defaultMessage: "Damage Reduced by 3",
      },
      {
        id: "stats.MagicDamageReducedby17",
        defaultMessage: "Magic Damage Reduced by 17",
      },
      {
        id: "stats.2ToManaAfterEachKill",
        defaultMessage: "+2 To Mana After Each Kill",
      },
      {
        id: "stats.1ToLightRadius",
        defaultMessage: "+1 To Light Radius",
      },
      {
        id: "stats.RepairsDurability1In4Seconds",
        defaultMessage: "Repairs Durability 1 In 4 Seconds",
      },
    ],
    runes: ["Mal", "Tir"],
  },
  {
    name: "Passion",
    reqLvl: 43,
    allowed: ["Weapons"],
    stats: [
      {
        id: "stats.25%IncreasedAttackSpeed",
        defaultMessage: "+25% Increased Attack Speed",
      },
      {
        id: "stats.160210%EnhancedDamage",
        defaultMessage: "+160-210% Enhanced Damage",
      },
      {
        id: "stats.5080%BonusToAttackRating",
        defaultMessage: "50-80% Bonus To Attack Rating",
      },
      {
        id: "stats.75%DamageToUndead",
        defaultMessage: "+75% Damage To Undead",
      },
      {
        id: "stats.50ToAttackRatingAgainstUndead",
        defaultMessage: "+50 To Attack Rating Against Undead",
      },
      {
        id: "stats.Adds150LightningDamage",
        defaultMessage: "Adds 1-50 Lightning Damage",
      },
      {
        id: "stats.1ToBerserk",
        defaultMessage: "+1 To Berserk",
      },
      {
        id: "stats.1ToZeal",
        defaultMessage: "+1 To Zeal",
      },
      {
        id: "stats.HitBlindsTarget10",
        defaultMessage: "Hit Blinds Target +10",
      },
      {
        id: "stats.HitCausesMonsterToFlee25%",
        defaultMessage: "Hit Causes Monster To Flee 25%",
      },
      {
        id: "stats.75%ExtraGoldFromMonsters",
        defaultMessage: "75% Extra Gold From Monsters",
      },
      {
        id: "stats.Level3HeartofWolverine12Charges",
        defaultMessage: "Level 3 Heart of Wolverine (12 Charges)",
      },
    ],
    runes: ["Dol", "Ort", "Eld", "Lem"],
  },
  {
    name: "Kingslayer",
    reqLvl: 53,
    allowed: ["Swords", "Axes"],
    stats: [
      {
        id: "stats.30%IncreasedAttackSpeed",
        defaultMessage: "+30% Increased Attack Speed",
      },
      {
        id: "stats.230270%EnhancedDamage",
        defaultMessage: "+230-270% Enhanced Damage",
      },
      {
        id: "stats.25%TargetDefense",
        defaultMessage: "-25% Target Defense",
      },
      {
        id: "stats.20%BonusToAttackRating",
        defaultMessage: "20% Bonus To Attack Rating",
      },
      {
        id: "stats.33%ChanceofCrushingBlow",
        defaultMessage: "33% Chance of Crushing Blow",
      },
      {
        id: "stats.50%ChanceofOpenWounds",
        defaultMessage: "50% Chance of Open Wounds",
      },
      {
        id: "stats.1ToVengeance",
        defaultMessage: "+1 To Vengeance",
      },
      {
        id: "stats.PreventMonsterHeal",
        defaultMessage: "Prevent Monster Heal",
      },
      {
        id: "stats.10ToStrength",
        defaultMessage: "+10 To Strength",
      },
      {
        id: "stats.40%ExtraGoldFromMonsters",
        defaultMessage: "40% Extra Gold From Monsters",
      },
    ],
    runes: ["Mal", "Um", "Gul", "Fal"],
  },
  {
    name: "HandofJustice",
    reqLvl: 67,
    allowed: ["Weapons"],
    stats: [
      {
        id: "stats.100%ChanceToCastLevel36BlazeWhenYouLevelUp",
        defaultMessage: "100% Chance To Cast Level 36 Blaze When You Level-Up",
      },
      {
        id: "stats.100%ChanceToCastLevel48MeteorWhenYouDie",
        defaultMessage: "100% Chance To Cast Level 48 Meteor When You Die",
      },
      {
        id: "stats.Level16HolyFireAuraWhenEquipped",
        defaultMessage: "Level 16 Holy Fire Aura When Equipped",
      },
      {
        id: "stats.33%IncreasedAttackSpeed",
        defaultMessage: "+33% Increased Attack Speed",
      },
      {
        id: "stats.280330%EnhancedDamage",
        defaultMessage: "+280-330% Enhanced Damage",
      },
      {
        id: "stats.IgnoreTargetsDefense",
        defaultMessage: "Ignore Target's Defense",
      },
      {
        id: "stats.7%LifeStolenPerHit",
        defaultMessage: "7% Life Stolen Per Hit",
      },
      {
        id: "stats.20%ToEnemyFireResist",
        defaultMessage: "-20% To Enemy Fire Resist",
      },
      {
        id: "stats.20%DeadlyStrike",
        defaultMessage: "20% Deadly Strike",
      },
      {
        id: "stats.HitBlindsTarget",
        defaultMessage: "Hit Blinds Target",
      },
      {
        id: "stats.FreezesTarget3",
        defaultMessage: "Freezes Target +3",
      },
    ],
    runes: ["Sur", "Cham", "Amn", "Lo"],
  },
  {
    name: "Gloom",
    reqLvl: 47,
    allowed: ["BodyArmor"],
    stats: [
      {
        id: "stats.15%ChanceToCastLevel3DimVisionWhenStruck",
        defaultMessage: "15% Chance To Cast Level 3 Dim Vision When Struck",
      },
      {
        id: "stats.10%FasterHitRecovery",
        defaultMessage: "+10% Faster Hit Recovery",
      },
      {
        id: "stats.200260%EnhancedDefense",
        defaultMessage: "+200-260% Enhanced Defense",
      },
      {
        id: "stats.10ToStrength",
        defaultMessage: "+10 To Strength",
      },
      {
        id: "stats.AllResistances45",
        defaultMessage: "All Resistances +45",
      },
      {
        id: "stats.HalfFreezeDuration",
        defaultMessage: "Half Freeze Duration",
      },
      {
        id: "stats.5%DamageTakenGoesToMana",
        defaultMessage: "5% Damage Taken Goes To Mana",
      },
      {
        id: "stats.3ToLightRadius",
        defaultMessage: "-3 To Light Radius",
      },
    ],
    runes: ["Fal", "Um", "Pul"],
  },
  {
    name: "Famine",
    reqLvl: 65,
    allowed: ["Axes", "Hammers"],
    stats: [
      {
        id: "stats.30%IncreasedAttackSpeed",
        defaultMessage: "30% Increased Attack Speed",
      },
      {
        id: "stats.320370%EnhancedDamage",
        defaultMessage: "+320-370% Enhanced Damage",
      },
      {
        id: "stats.IgnoreTargetsDefense",
        defaultMessage: "Ignore Target's Defense",
      },
      {
        id: "stats.Adds180200MagicDamage",
        defaultMessage: "Adds 180-200 Magic Damage",
      },
      {
        id: "stats.Adds50200FireDamage",
        defaultMessage: "Adds 50-200 Fire Damage",
      },
      {
        id: "stats.Adds51250LightningDamage",
        defaultMessage: "Adds 51-250 Lightning Damage",
      },
      {
        id: "stats.Adds50200ColdDamage",
        defaultMessage: "Adds 50-200 Cold Damage",
      },
      {
        id: "stats.12%LifeStolenPerHit",
        defaultMessage: "12% Life Stolen Per Hit",
      },
      {
        id: "stats.PreventMonsterHeal",
        defaultMessage: "Prevent Monster Heal",
      },
      {
        id: "stats.10ToStrength",
        defaultMessage: "+10 To Strength",
      },
    ],
    runes: ["Fal", "Ohm", "Ort", "Jah"],
  },
  {
    name: "Duress",
    reqLvl: 47,
    allowed: ["BodyArmor"],
    stats: [
      {
        id: "stats.40%FasterHitRecovery",
        defaultMessage: "+40% Faster Hit Recovery",
      },
      {
        id: "stats.1020%EnhancedDamage",
        defaultMessage: "+10-20% Enhanced Damage",
      },
      {
        id: "stats.Adds37133ColdDamage2secDuration",
        defaultMessage: "Adds 37-133 Cold Damage 2 sec. Duration",
      },
      {
        id: "stats.15%ChanceofCrushingBlow",
        defaultMessage: "15% Chance of Crushing Blow",
      },
      {
        id: "stats.33%ChanceofOpenWounds",
        defaultMessage: "33% Chance of Open Wounds",
      },
      {
        id: "stats.150200%EnhancedDefense",
        defaultMessage: "+150-200% Enhanced Defense",
      },
      {
        id: "stats.20%SlowerStaminaDrain",
        defaultMessage: "-20% Slower Stamina Drain",
      },
      {
        id: "stats.ColdResist45%",
        defaultMessage: "Cold Resist +45%",
      },
      {
        id: "stats.LightningResist15%",
        defaultMessage: "Lightning Resist +15%",
      },
      {
        id: "stats.FireResist15%",
        defaultMessage: "Fire Resist +15%",
      },
      {
        id: "stats.PoisonResist15%",
        defaultMessage: "Poison Resist +15%",
      },
    ],
    runes: ["Shael", "Um", "Thul"],
  },
  {
    name: "Doom",
    reqLvl: 67,
    allowed: ["Axes", "Polearms", "Hammers"],
    stats: [
      {
        id: "stats.5%ChanceToCastLevel18VolcanoOnStriking",
        defaultMessage: "5% Chance To Cast Level 18 Volcano On Striking",
      },
      {
        id: "stats.Level12HolyFreezeAuraWhenEquipped",
        defaultMessage: "Level 12 Holy Freeze Aura When Equipped",
      },
      {
        id: "stats.2ToAllSkills",
        defaultMessage: "+2 To All Skills",
      },
      {
        id: "stats.45%IncreasedAttackSpeed",
        defaultMessage: "+45% Increased Attack Speed",
      },
      {
        id: "stats.330370%EnhancedDamage",
        defaultMessage: "+330-370% Enhanced Damage",
      },
      {
        id: "stats.4060%ToEnemyColdResist",
        defaultMessage: "-(40-60)% To Enemy Cold Resist",
      },
      {
        id: "stats.20%DeadlyStrike",
        defaultMessage: "20% Deadly Strike",
      },
      {
        id: "stats.25%ChanceofOpenWounds",
        defaultMessage: "25% Chance of Open Wounds",
      },
      {
        id: "stats.PreventMonsterHeal",
        defaultMessage: "Prevent Monster Heal",
      },
      {
        id: "stats.FreezesTarget3",
        defaultMessage: "Freezes Target +3",
      },
      {
        id: "stats.Requirements20%",
        defaultMessage: "Requirements -20%",
      },
    ],
    runes: ["Hel", "Ohm", "Um", "Lo", "Cham"],
  },
  {
    name: "ChainsofHonor",
    reqLvl: 63,
    allowed: ["BodyArmor"],
    stats: [
      {
        id: "stats.2ToAllSkills",
        defaultMessage: "+2 To All Skills",
      },
      {
        id: "stats.200%DamageToDemons",
        defaultMessage: "+200% Damage To Demons",
      },
      {
        id: "stats.100%DamageToUndead",
        defaultMessage: "+100% Damage To Undead",
      },
      {
        id: "stats.8%LifeStolenPerHit",
        defaultMessage: "8% Life Stolen Per Hit",
      },
      {
        id: "stats.70%EnhancedDefense",
        defaultMessage: "+70% Enhanced Defense",
      },
      {
        id: "stats.20ToStrength",
        defaultMessage: "+20 To Strength",
      },
      {
        id: "stats.ReplenishLife7",
        defaultMessage: "Replenish Life +7",
      },
      {
        id: "stats.AllResistances65",
        defaultMessage: "All Resistances +65",
      },
      {
        id: "stats.DamageReducedBy8%",
        defaultMessage: "Damage Reduced By 8%",
      },
      {
        id: "stats.25%BetterChanceofGettingMagicItems",
        defaultMessage: "25% Better Chance of Getting Magic Items",
      },
    ],
    runes: ["Dol", "Um", "Ber", "Ist"],
  },
  {
    name: "BreathoftheDying",
    reqLvl: 69,
    allowed: ["Weapons"],
    stats: [
      {
        id: "stats.50%ChanceToCastLevel20PoisonNovaWhenYouKillAnEnemy",
        defaultMessage:
          "50% Chance To Cast Level 20 Poison Nova When You Kill An Enemy",
      },
      {
        id: "stats.Indestructible",
        defaultMessage: "Indestructible",
      },
      {
        id: "stats.60%IncreasedAttackSpeed",
        defaultMessage: "+60% Increased Attack Speed",
      },
      {
        id: "stats.350400%EnhancedDamage",
        defaultMessage: "+350-400% Enhanced Damage",
      },
      {
        id: "stats.200%DamageToUndead",
        defaultMessage: "+200% Damage To Undead",
      },
      {
        id: "stats.25%TargetDefense",
        defaultMessage: "-25% Target Defense",
      },
      {
        id: "stats.50ToAttackRating",
        defaultMessage: "+50 To Attack Rating",
      },
      {
        id: "stats.50ToAttackRatingAgainstUndead",
        defaultMessage: "+50 To Attack Rating Against Undead",
      },
      {
        id: "stats.7%ManaStolenperHit",
        defaultMessage: "7% Mana Stolen per Hit",
      },
      {
        id: "stats.1215%LifeStolenperHit",
        defaultMessage: "12-15% Life Stolen per Hit",
      },
      {
        id: "stats.PreventMonsterHeal",
        defaultMessage: "Prevent Monster Heal",
      },
      {
        id: "stats.30ToAllAttributes",
        defaultMessage: "+30 To All Attributes",
      },
      {
        id: "stats.1ToLightRadius",
        defaultMessage: "+1 To Light Radius",
      },
      {
        id: "stats.Requirements20%",
        defaultMessage: "Requirements -20%",
      },
    ],
    runes: ["Vex", "Hel", "El", "Eld", "Zod", "Eth"],
  },
  {
    name: "Bramble",
    reqLvl: 61,
    allowed: ["BodyArmor"],
    stats: [
      {
        id: "stats.Level1521ThornsAuraWhenEquipped",
        defaultMessage: "Level 15-21 Thorns Aura When Equipped",
      },
      {
        id: "stats.50%FasterHitRecovery",
        defaultMessage: "+50% Faster Hit Recovery",
      },
      {
        id: "stats.2550%ToPoisonSkillDamage",
        defaultMessage: "+25-50% To Poison Skill Damage",
      },
      {
        id: "stats.300Defense",
        defaultMessage: "+300 Defense",
      },
      {
        id: "stats.IncreaseMaximumMana5%",
        defaultMessage: "Increase Maximum Mana 5%",
      },
      {
        id: "stats.RegenerateMana15%",
        defaultMessage: "Regenerate Mana 15%",
      },
      {
        id: "stats.5%ToMaximumColdResist",
        defaultMessage: "+5% To Maximum Cold Resist",
      },
      {
        id: "stats.FireResist30%",
        defaultMessage: "Fire Resist +30%",
      },
      {
        id: "stats.PoisonResist100%",
        defaultMessage: "Poison Resist +100%",
      },
      {
        id: "stats.13LifeAfterEachKill",
        defaultMessage: "+13 Life After Each Kill",
      },
      {
        id: "stats.Level13SpiritofBarbs33Charges",
        defaultMessage: "Level 13 Spirit of Barbs (33 Charges)",
      },
    ],
    runes: ["Ral", "Ohm", "Sur", "Eth"],
  },
  {
    name: "Beast",
    reqLvl: 63,
    allowed: ["Axes", "Scepters", "Hammers"],
    stats: [
      {
        id: "stats.Level9FanaticismAuraWhenEquipped",
        defaultMessage: "Level 9 Fanaticism Aura When Equipped",
      },
      {
        id: "stats.40%IncreasedAttackSpeed",
        defaultMessage: "+40% Increased Attack Speed",
      },
      {
        id: "stats.240270%EnhancedDamage",
        defaultMessage: "+240-270% Enhanced Damage",
      },
      {
        id: "stats.20%ChanceofCrushingBlow",
        defaultMessage: "20% Chance of Crushing Blow",
      },
      {
        id: "stats.25%ChanceofOpenWounds",
        defaultMessage: "25% Chance of Open Wounds",
      },
      {
        id: "stats.3ToWerebear",
        defaultMessage: "+3 To Werebear",
      },
      {
        id: "stats.3ToLycanthropy",
        defaultMessage: "+3 To Lycanthropy",
      },
      {
        id: "stats.PreventMonsterHeal",
        defaultMessage: "Prevent Monster Heal",
      },
      {
        id: "stats.2540ToStrength",
        defaultMessage: "+25-40 To Strength",
      },
      {
        id: "stats.10ToEnergy",
        defaultMessage: "+10 To Energy",
      },
      {
        id: "stats.2ToManaAfterEachKill",
        defaultMessage: "+2 To Mana After Each Kill",
      },
      {
        id: "stats.Level13SummonGrizzly5Charges",
        defaultMessage: "Level 13 Summon Grizzly (5 Charges)",
      },
    ],
    runes: ["Ber", "Tir", "Um", "Mal", "Lum"],
  },
  {
    name: "Zephyr",
    reqLvl: 21,
    allowed: ["MissileWeapons"],
    stats: [
      {
        id: "stats.33%EnhancedDamage",
        defaultMessage: "+33% Enhanced Damage",
      },
      {
        id: "stats.66ToAttackRating",
        defaultMessage: "+66 To Attack Rating",
      },
      {
        id: "stats.Adds150LightningDamage",
        defaultMessage: "Adds 1-50 Lightning Damage",
      },
      {
        id: "stats.25%TargetDefense",
        defaultMessage: "-25% Target Defense",
      },
      {
        id: "stats.25Defense",
        defaultMessage: "+25 Defense",
      },
      {
        id: "stats.25%FasterRunWalk",
        defaultMessage: "25% Faster Run/Walk",
      },
      {
        id: "stats.25%IncreasedAttackSpeed",
        defaultMessage: "25% Increased Attack Speed",
      },
      {
        id: "stats.7%ChanceToCastLevel1TwisterWhenStruck",
        defaultMessage: "7% Chance To Cast Level 1 Twister When Struck",
      },
    ],
    runes: ["Ort", "Eth"],
  },
  {
    name: "White",
    reqLvl: 35,
    allowed: ["Wand"],
    stats: [
      {
        id: "stats.HitCausesMonsterToFlee25%",
        defaultMessage: "Hit Causes Monster To Flee 25%",
      },
      {
        id: "stats.10ToVitality",
        defaultMessage: "+10 To Vitality",
      },
      {
        id: "stats.3ToPoisonandBoneSpellsNecromancerOnly",
        defaultMessage: "+3 To Poison and Bone Spells (Necromancer Only)",
      },
      {
        id: "stats.3ToBoneArmorNecromancerOnly",
        defaultMessage: "+3 To Bone Armor (Necromancer Only)",
      },
      {
        id: "stats.2ToBoneSpearNecromancerOnly",
        defaultMessage: "+2 To Bone Spear (Necromancer Only)",
      },
      {
        id: "stats.4ToSkeletonMasteryNecromancerOnly",
        defaultMessage: "+4 To Skeleton Mastery (Necromancer Only)",
      },
      {
        id: "stats.MagicDamageReducedBy4",
        defaultMessage: "Magic Damage Reduced By 4",
      },
      {
        id: "stats.20%FasterCastRate",
        defaultMessage: "20% Faster Cast Rate",
      },
      {
        id: "stats.13ToMana",
        defaultMessage: "+13 To Mana",
      },
    ],
    runes: ["Dol", "Io"],
  },
  {
    name: "Wealth",
    reqLvl: 43,
    allowed: ["BodyArmor"],
    stats: [
      {
        id: "stats.300%ExtraGoldFromMonsters",
        defaultMessage: "300% Extra Gold From Monsters",
      },
      {
        id: "stats.100%BetterChanceOfGettingMagicItems",
        defaultMessage: "100% Better Chance Of Getting Magic Items",
      },
      {
        id: "stats.2ToManaAfterEachKill",
        defaultMessage: "+2 To Mana After Each Kill",
      },
      {
        id: "stats.10ToDexterity",
        defaultMessage: "+10 To Dexterity",
      },
    ],
    runes: ["Lem", "Ko", "Tir"],
  },
  {
    name: "Venom",
    reqLvl: 49,
    allowed: ["Weapons"],
    stats: [
      {
        id: "stats.HitCausesMonsterToFlee25%",
        defaultMessage: "Hit Causes Monster To Flee 25%",
      },
      {
        id: "stats.PreventMonsterHeal",
        defaultMessage: "Prevent Monster Heal",
      },
      {
        id: "stats.IgnoreTargetsDefense",
        defaultMessage: "Ignore Target's Defense",
      },
      {
        id: "stats.7%ManaStolenPerHit",
        defaultMessage: "7% Mana Stolen Per Hit",
      },
      {
        id: "stats.Level15PoisonExplosion27Charges",
        defaultMessage: "Level 15 Poison Explosion (27 Charges)",
      },
      {
        id: "stats.Level13PoisonNova11Charges",
        defaultMessage: "Level 13 Poison Nova (11 Charges)",
      },
      {
        id: "stats.273PoisonDamageOver6seconds",
        defaultMessage: "+273 Poison Damage Over 6 seconds",
      },
    ],
    runes: ["Tal", "Dol", "Mal"],
  },
  {
    name: "Smoke",
    reqLvl: 37,
    allowed: ["BodyArmor"],
    stats: [
      {
        id: "stats.75%EnhancedDefense",
        defaultMessage: "+75% Enhanced Defense",
      },
      {
        id: "stats.280DefensevsMissiles",
        defaultMessage: "+280 Defense vs. Missiles",
      },
      {
        id: "stats.AllResistances50",
        defaultMessage: "All Resistances +50",
      },
      {
        id: "stats.20%FasterHitRecovery",
        defaultMessage: "20% Faster Hit Recovery",
      },
      {
        id: "stats.Level6Weaken18Charges",
        defaultMessage: "Level 6 Weaken (18 Charges)",
      },
      {
        id: "stats.10ToEnergy",
        defaultMessage: "+10 To Energy",
      },
      {
        id: "stats.1ToLightRadius",
        defaultMessage: "-1 To Light Radius",
      },
    ],
    runes: ["Nef", "Lum"],
  },
  {
    name: "Radiance",
    reqLvl: 27,
    allowed: ["Helms"],
    stats: [
      {
        id: "stats.75%EnhancedDefense",
        defaultMessage: "+75% Enhanced Defense",
      },
      {
        id: "stats.30DefenseVsMissile",
        defaultMessage: "+30 Defense Vs. Missile",
      },
      {
        id: "stats.10ToEnergy",
        defaultMessage: "+10 To Energy",
      },
      {
        id: "stats.10ToVitality",
        defaultMessage: "+10 To Vitality",
      },
      {
        id: "stats.15%DamageGoesToMana",
        defaultMessage: "15% Damage Goes To Mana",
      },
      {
        id: "stats.MagicDamageReducedBy3",
        defaultMessage: "Magic Damage Reduced By 3",
      },
      {
        id: "stats.33ToMana",
        defaultMessage: "+33 To Mana",
      },
      {
        id: "stats.DamageReducedBy7",
        defaultMessage: "Damage Reduced By 7",
      },
      {
        id: "stats.5ToLightRadius",
        defaultMessage: "+5 To Light Radius",
      },
    ],
    runes: ["Nef", "Sol", "Ith"],
  },
  {
    name: "Nadir",
    reqLvl: 13,
    allowed: ["Helms"],
    stats: [
      {
        id: "stats.50%EnhancedDefense",
        defaultMessage: "+50% Enhanced Defense",
      },
      {
        id: "stats.10Defense",
        defaultMessage: "+10 Defense",
      },
      {
        id: "stats.30DefensevsMissile",
        defaultMessage: "+30 Defense vs. Missile",
      },
      {
        id: "stats.Level13CloakofShadows9Charges",
        defaultMessage: "Level 13 Cloak of Shadows (9 Charges)",
      },
      {
        id: "stats.2ToManaAfterEachKill",
        defaultMessage: "+2 To Mana After Each Kill",
      },
      {
        id: "stats.5ToStrength",
        defaultMessage: "+5 To Strength",
      },
      {
        id: "stats.33%ExtraGoldFromMonsters",
        defaultMessage: "-33% Extra Gold From Monsters",
      },
      {
        id: "stats.3ToLightRadius",
        defaultMessage: "-3 To Light Radius",
      },
    ],
    runes: ["Nef", "Tir"],
  },
  {
    name: "Memory",
    reqLvl: 37,
    allowed: ["Staves"],
    stats: [
      {
        id: "stats.3toSorceressSkillLevels",
        defaultMessage: "+3 to Sorceress Skill Levels",
      },
      {
        id: "stats.33%FasterCastRate",
        defaultMessage: "33% Faster Cast Rate",
      },
      {
        id: "stats.IncreaseMaximumMana20%",
        defaultMessage: "Increase Maximum Mana 20%",
      },
      {
        id: "stats.3EnergyShieldSorceressOnly",
        defaultMessage: "+3 Energy Shield (Sorceress Only)",
      },
      {
        id: "stats.2StaticFieldSorceressOnly",
        defaultMessage: "+2 Static Field (Sorceress Only)",
      },
      {
        id: "stats.10ToEnergy",
        defaultMessage: "+10 To Energy",
      },
      {
        id: "stats.10ToVitality",
        defaultMessage: "+10 To Vitality",
      },
      {
        id: "stats.9ToMinimumDamage",
        defaultMessage: "+9 To Minimum Damage",
      },
      {
        id: "stats.25%TargetDefense",
        defaultMessage: "-25% Target Defense",
      },
      {
        id: "stats.MagicDamageReducedBy7",
        defaultMessage: "Magic Damage Reduced By 7",
      },
      {
        id: "stats.50%EnhancedDefense",
        defaultMessage: "+50% Enhanced Defense",
      },
    ],
    runes: ["Lum", "Io", "Sol", "Eth"],
  },
  {
    name: "Lionheart",
    reqLvl: 41,
    allowed: ["BodyArmor"],
    stats: [
      {
        id: "stats.20%EnhancedDamage",
        defaultMessage: "+20% Enhanced Damage",
      },
      {
        id: "stats.Requirements15%",
        defaultMessage: "Requirements -15%",
      },
      {
        id: "stats.25ToStrength",
        defaultMessage: "+25 To Strength",
      },
      {
        id: "stats.10ToEnergy",
        defaultMessage: "+10 To Energy",
      },
      {
        id: "stats.20ToVitality",
        defaultMessage: "+20 To Vitality",
      },
      {
        id: "stats.15ToDexterity",
        defaultMessage: "+15 To Dexterity",
      },
      {
        id: "stats.50ToLife",
        defaultMessage: "+50 To Life",
      },
      {
        id: "stats.AllResistances30",
        defaultMessage: "All Resistances +30",
      },
    ],
    runes: ["Hel", "Lum", "Fal"],
  },
  {
    name: "KingsGrace",
    reqLvl: 25,
    allowed: ["Swords", "Scepters"],
    stats: [
      {
        id: "stats.100%EnhancedDamage",
        defaultMessage: "+100% Enhanced Damage",
      },
      {
        id: "stats.100%DamageToDemons",
        defaultMessage: "+100% Damage To Demons",
      },
      {
        id: "stats.50%DamageToUndead",
        defaultMessage: "+50% Damage To Undead",
      },
      {
        id: "stats.Adds530FireDamage",
        defaultMessage: "Adds 5-30 Fire Damage",
      },
      {
        id: "stats.Adds314ColdDamage3SecondDuration",
        defaultMessage: "Adds 3-14 Cold Damage - 3 Second Duration",
      },
      {
        id: "stats.150ToAttackRating",
        defaultMessage: "+150 To Attack Rating",
      },
      {
        id: "stats.100ToAttackRatingAgainstDemons",
        defaultMessage: "+100 To Attack Rating Against Demons",
      },
      {
        id: "stats.100ToAttackRatingAgainstUndead",
        defaultMessage: "+100 To Attack Rating Against Undead",
      },
      {
        id: "stats.7%LifeStolenPerHit",
        defaultMessage: "7% Life Stolen Per Hit",
      },
    ],
    runes: ["Amn", "Ral", "Thul"],
  },
  {
    name: "Honor",
    reqLvl: 27,
    allowed: ["MeleeWeapons"],
    stats: [
      {
        id: "stats.160%EnhancedDamage",
        defaultMessage: "+160% Enhanced Damage",
      },
      {
        id: "stats.9toMinimumDamage",
        defaultMessage: "+9 to Minimum Damage",
      },
      {
        id: "stats.9toMaximumDamage",
        defaultMessage: "+9 to Maximum Damage",
      },
      {
        id: "stats.25%DeadlyStrike",
        defaultMessage: "25% Deadly Strike",
      },
      {
        id: "stats.250toAttackRating",
        defaultMessage: "+250 to Attack Rating",
      },
      {
        id: "stats.1toAllSkills",
        defaultMessage: "+1 to All Skills",
      },
      {
        id: "stats.7%LifeStolenperHit",
        defaultMessage: "7% Life Stolen per Hit",
      },
      {
        id: "stats.10ReplenishLife",
        defaultMessage: "+10 Replenish Life",
      },
      {
        id: "stats.10toStrength",
        defaultMessage: "+10 to Strength",
      },
      {
        id: "stats.1toLightRadius",
        defaultMessage: "+1 to Light Radius",
      },
      {
        id: "stats.2toManaperKill",
        defaultMessage: "+2 to Mana per Kill",
      },
    ],
    runes: ["Amn", "El", "Ith", "Tir", "Sol"],
  },
  {
    name: "HolyThunder",
    reqLvl: 21,
    allowed: ["Scepters"],
    stats: [
      {
        id: "stats.60%EnhancedDamage",
        defaultMessage: "+60% Enhanced Damage",
      },
      {
        id: "stats.25%TargetDefense",
        defaultMessage: "-25% Target Defense",
      },
      {
        id: "stats.Adds530FireDamage",
        defaultMessage: "Adds 5-30 Fire Damage",
      },
      {
        id: "stats.Adds21110LightningDamage",
        defaultMessage: "Adds 21-110 Lightning Damage",
      },
      {
        id: "stats.75PoisonDamageOver5Seconds",
        defaultMessage: "+75 Poison Damage Over 5 Seconds",
      },
      {
        id: "stats.10ToMaximumDamage",
        defaultMessage: "+10 To Maximum Damage",
      },
      {
        id: "stats.LightningResistance60%",
        defaultMessage: "Lightning Resistance +60%",
      },
      {
        id: "stats.5ToMaximumLightningResistance",
        defaultMessage: "+5 To Maximum Lightning Resistance",
      },
      {
        id: "stats.3ToHolyShockPaladinOnly",
        defaultMessage: "+3 To Holy Shock (Paladin Only)",
      },
      {
        id: "stats.Level7ChainLightning60Charges",
        defaultMessage: "Level 7 Chain Lightning (60 Charges)",
      },
    ],
    runes: ["Eth", "Ral", "Ort", "Tal"],
  },
  {
    name: "Fury",
    reqLvl: 65,
    allowed: ["MeleeWeapons"],
    stats: [
      {
        id: "stats.209%EnhancedDamage",
        defaultMessage: "+209% Enhanced Damage",
      },
      {
        id: "stats.40%IncreasedAttackSpeed",
        defaultMessage: "40% Increased Attack Speed",
      },
      {
        id: "stats.PreventMonsterHeal",
        defaultMessage: "Prevent Monster Heal",
      },
      {
        id: "stats.66%ChanceofOpenWounds",
        defaultMessage: "66% Chance of Open Wounds",
      },
      {
        id: "stats.33%ChanceofDeadlyStrike",
        defaultMessage: "33% Chance of Deadly Strike",
      },
      {
        id: "stats.25%TargetDefense",
        defaultMessage: "-25% Target Defense",
      },
      {
        id: "stats.20%toAttackRating",
        defaultMessage: "20% to Attack Rating",
      },
      {
        id: "stats.6%LifeStolenPerHit",
        defaultMessage: "6% Life Stolen Per Hit",
      },
      {
        id: "stats.IgnoresTargetDefense",
        defaultMessage: "Ignores Target Defense",
      },
      {
        id: "stats.5toFrenzyBarbarianonly",
        defaultMessage: "+5 to Frenzy (Barbarian only)",
      },
    ],
    runes: ["Jah", "Gul", "Eth"],
  },
  {
    name: "Black",
    reqLvl: 35,
    allowed: ["Clubs", "Hammers", "Maces"],
    stats: [
      {
        id: "stats.120%EnhancedDamage",
        defaultMessage: "+120% Enhanced Damage",
      },
      {
        id: "stats.40%ChanceofCrushingBlow",
        defaultMessage: "40% Chance of Crushing Blow",
      },
      {
        id: "stats.200toAttackRating",
        defaultMessage: "+200 to Attack Rating",
      },
      {
        id: "stats.Adds314ColdDamagefor3seconds",
        defaultMessage: "Adds 3-14 Cold Damage for 3 seconds",
      },
      {
        id: "stats.10toVitality",
        defaultMessage: "+10 to Vitality",
      },
      {
        id: "stats.15%increasedAttackSpeed",
        defaultMessage: "15% increased Attack Speed",
      },
      {
        id: "stats.MagicDamageReducedby2",
        defaultMessage: "Magic Damage Reduced by 2",
      },
      {
        id: "stats.Level4CorpseExplosion12charges",
        defaultMessage: "Level 4 Corpse Explosion (12 charges)",
      },
      {
        id: "stats.Knockback",
        defaultMessage: "Knockback",
      },
    ],
    runes: ["Thul", "Io", "Nef"],
  },
  {
    name: "Strength",
    reqLvl: 25,
    allowed: ["MeleeWeapons"],
    stats: [
      {
        id: "stats.35%EnhancedDamage",
        defaultMessage: "35% Enhanced Damage",
      },
      {
        id: "stats.25%ChanceOfCrushingBlow",
        defaultMessage: "25% Chance Of Crushing Blow",
      },
      {
        id: "stats.7%LifeStolenPerHit",
        defaultMessage: "7% Life Stolen Per Hit",
      },
      {
        id: "stats.2ToManaAfterEachKill",
        defaultMessage: "+2 To Mana After Each Kill",
      },
      {
        id: "stats.20ToStrength",
        defaultMessage: "+20 To Strength",
      },
      {
        id: "stats.10ToVitality",
        defaultMessage: "+10 To Vitality",
      },
    ],
    runes: ["Amn", "Tir"],
  },
  {
    name: "Silence",
    reqLvl: 55,
    allowed: ["Weapons"],
    stats: [
      {
        id: "stats.200%EnhancedDamage",
        defaultMessage: "200% Enhanced Damage",
      },
      {
        id: "stats.75%DamageToUndead",
        defaultMessage: "+75% Damage To Undead",
      },
      {
        id: "stats.Requirements20%",
        defaultMessage: "Requirements -20%",
      },
      {
        id: "stats.20%IncreasedAttackSpeed",
        defaultMessage: "20% Increased Attack Speed",
      },
      {
        id: "stats.50ToAttackRatingAgainstUndead",
        defaultMessage: "+50 To Attack Rating Against Undead",
      },
      {
        id: "stats.2ToAllSkills",
        defaultMessage: "+2 To All Skills",
      },
      {
        id: "stats.AllResistances75",
        defaultMessage: "All Resistances +75",
      },
      {
        id: "stats.20%FasterHitRecovery",
        defaultMessage: "20% Faster Hit Recovery",
      },
      {
        id: "stats.11%ManaStolenPerHit",
        defaultMessage: "11% Mana Stolen Per Hit",
      },
      {
        id: "stats.HitCausesMonsterToFlee25%",
        defaultMessage: "Hit Causes Monster To Flee 25%",
      },
      {
        id: "stats.HitBlindsTarget33",
        defaultMessage: "Hit Blinds Target +33",
      },
      {
        id: "stats.2ToManaAfterEachKill",
        defaultMessage: "+2 To Mana After Each Kill",
      },
      {
        id: "stats.30%BetterChanceOfGettingMagicItems",
        defaultMessage: "30% Better Chance Of Getting Magic Items",
      },
    ],
    runes: ["Dol", "Eld", "Hel", "Ist", "Tir", "Vex"],
  },
];
