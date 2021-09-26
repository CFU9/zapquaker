export type Building = {
  id: string;
  name: string;
  hp: number[];
};

export type Spell = {
  id: string;
  damage: number[];
};

export type ZapQuake = {
  nbZaps: number;
  nbQuakes: number;
};

export const DATA_BUILDINGS: Building[] = [
  // prettier-ignore
  { id: "18", name: "Cannon", hp: [420,470,520,570,620,670,730,800,880,960,1060,1160,1260,1380,1500,1620,1740,1870,2000,2150] },
  { id: "16", name: "Archer tower", hp: [380,420,460,500,540,580,630,690,750,810,890,970,1050,1130,1230,1330,1410,1510,1600,1700] },
  { id: "23", name: "Mortar", hp: [400,450,500,550,600,650,700,750,800,850,900,980,1100,1250] },
  { id: "14", name: "Air defense", hp: [800,850,900,950,1000,1050,1100,1210,1300,1400,1500,1600] },
  { id: "24", name: "Wizard tower", hp: [620,650,680,730,840,960,1200,1440,1680,2000,2240,2480,2700,2900] },
  { id: "15", name: "Air sweeper", hp: [750,800,850,900,950,1000,1050] },
  { id: "21", name: "Hidden tesla", hp: [600,630,660,690,730,770,810,850,900,980,1100,1200,1350] },
  { id: "17", name: "Bomb tower", hp: [650,700,750,850,1050,1300,1600,1900,2300] },
  { id: "25", name: "X-Bow", hp: [1500,1900,2300,2700,3100,3500,3900,4200,4500] },
  { id: "22", name: "Inferno tower", hp :[1500,1800,2100,2400,2700,3000,3300,3700] },
  { id: "20", name: "Eagle artillery", hp: [4000,4400,4800,5200,5600] },
  { id: "119", name: "Scattershot", hp: [3600,4200,4800] },
  { id: "62", name: "Archer Queen", hp: [725,740,755,771,787,804,821,838,856,874,892,911,930,949,969,990,1010,1032,1053,1076,1098,1121,1145,1169,1193,1218,1244,1270,1297,1324,1352,1380,1409,1439,1469,1500,1532,1564,1597,1630,1664,1699,1735,1771,1809,1847,1885,1925,1965,2007,2058,2110,2163,2218,2274,2331,2390,2450,2512,2575,2639,2705,2773,2842,2913,2980,3040,3095,3145,3190,3230,3270,3310,3350,3390,3425,3460,3495,3530,3565] },
  { id: "122", name: "Royal Champion", hp: [2950,3000,3050,3100,3150,3200,3250,3300,3350,3400,3450,3500,3550,3600,3650,3700,3750,3800,3850,3900,3940,3980,4020,4060,4100,4140,4180,4220,4260,4300] },
  { id: "63", name: "Grand Warden", hp: [1000,1021,1042,1064,1086,1108,1131,1155,1180,1206,1233,1261,1290,1320,1350,1380,1410,1440,1470,1500,1530,1561,1593,1625,1658,1692,1726,1761,1797,1833,1870,1908,1947,1986,2026,2067,2109,2152,2196,2240,2260,2280,2300,2320,2340,2360,2380,2400,2420,2440,2460,2480,2500,2520,2540] },
  { id: "127", name: "Builder Hut", hp: [250,1000,1300,1600] },
];

// prettier-ignore
export const DATA_SPELLS: Spell[] = [
  { id: "earthquake", damage: [14.5,17,21,25,29] },
  { id: "lightning", damage: [150,180,210,240,270,320,400,480,560] },
];
