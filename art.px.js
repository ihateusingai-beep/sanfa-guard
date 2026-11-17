// sanfa-guard pxl pack A+B+C
// A: theme enemies · B: boss + break · C: bullet/boom/shield
use("sweetie16")
pal({
  k: "#1a1020",
  K: "#0a0610",
  w: "#fff6e8",
  y: "#ffd34e",
  Y: "#c9a227",
  r: "#ff6b6b",
  R: "#c62828",
  d: "#7a1218",
  b: "#7eb6ff",
  B: "#1565c0",
  n: "#0d3a7a",
  g: "#57f0a2",
  G: "#2e7d32",
  m: "#0f4a1c",
  s: "#a0b0c8",
  S: "#5a6a80",
  o: "#3a4458",
  p: "#ff8f5b",
  P: "#c45a20"
})
ramps("kdrR", "knbB", "kmgG", "koSs", "kpP")

// ---- A: shared enemy ----
sprite("enemy_base", { mx: true, outline: "k" }, `
  ..........
  .........s
  ........ss
  .......sss
  ......sSSs
  .....sSSSs
  ....sSSwSs
  ...sSSwwSs
  ..sSSSwwSs
  .sSSSSSSSs
  sSSSSSSSSs
  sSSSoSoSSs
  sSSSSSSSSs
  .sSSSSSSSs
  ..sSSSSSSs
  ...sS.SSs.
  ....s.s...
  .....s....
`)

sprite("enemy_const", { base: "enemy_base", swap: { s: "r", S: "R", o: "d", w: "y" } },
  px(10, 10, "y"), px(13, 10, "y"),
  px(10, 11, "w"), px(13, 11, "w"),
  px(11, 17, "y"), px(12, 17, "y"),
  glow("yYr", { r: 2, strength: 0.35, bands: 2 })
)
sprite("enemy_basic", { base: "enemy_base", swap: { s: "b", S: "B", o: "n", w: "w" } },
  px(10, 10, "w"), px(13, 10, "w"),
  px(10, 11, "b"), px(13, 11, "b"),
  px(11, 17, "w"), px(12, 17, "w"),
  glow("wbB", { r: 2, strength: 0.35, bands: 2 })
)
sprite("enemy_nsl", { base: "enemy_base", swap: { s: "g", S: "G", o: "m", w: "y" } },
  px(10, 10, "y"), px(13, 10, "y"),
  px(10, 11, "w"), px(13, 11, "w"),
  px(11, 17, "y"), px(12, 17, "y"),
  px(11, 13, "y"), px(12, 13, "y"),
  glow("yGg", { r: 2, strength: 0.35, bands: 2 })
)

// ---- B: boss bigger + armor break frames ----
sprite("boss_base", { mx: true, outline: "k" }, `
  ............
  ...........s
  ..........ss
  .........sss
  ........sSSs
  .......sSSSs
  ......sSSSSs
  .....sSSwSSs
  ....sSSwwSSs
  ...sSSSwwSSs
  ..sSSSSSSSSs
  .sSSSSSSSSSs
  sSSSSSSSSSSs
  sSSSSoSoSSSs
  sSSSSSSSSSSs
  sSSSSSSSSSSs
  .sSSSSSSSSSs
  ..sSSSSSSSSs
  ...sSS.SSSs.
  ....sS.SSs..
  .....s.s....
  ......s.....
`)

sprite("boss_full", { base: "boss_base", swap: { s: "R", S: "d", o: "Y", w: "y" } },
  px(12, 11, "y"), px(15, 11, "y"),
  px(12, 12, "w"), px(15, 12, "w"),
  px(13, 19, "y"), px(14, 19, "y"),
  // armor plates
  px(10, 14, "y"), px(17, 14, "y"),
  glow("yYR", { r: 3, strength: 0.4, bands: 2 })
)

// cracked armor (HP2)
sprite("boss_crack", { base: "boss_full" },
  // black cracks
  px(11, 9, "k"), px(12, 10, "k"), px(13, 11, "k"),
  px(16, 9, "k"), px(15, 10, "k"),
  px(12, 15, "k"), px(13, 16, "k"), px(14, 15, "k"),
  px(10, 14, "k"), px(17, 14, "k")
)

// heavy break (HP1)
sprite("boss_break", { base: "boss_crack" },
  px(11, 8, "k"), px(12, 9, "k"), px(13, 10, "k"), px(14, 10, "k"),
  px(15, 9, "k"), px(16, 8, "k"),
  px(12, 14, "k"), px(13, 15, "k"), px(14, 14, "k"), px(15, 15, "k"),
  px(13, 18, "k"), px(14, 18, "k"),
  // spark
  px(12, 12, "y"), px(15, 12, "y")
)

// ---- C: FX icons ----
sprite("fx_bullet", { outline: "k" }, `
  ..y.
  .ywy
  .yYy
  ..y.
  ..Y.
  ..Y.
`)
sprite("fx_bullet_power", { outline: "k" }, `
  ..y..
  .ywy.
  ywywy
  .yYy.
  ..y..
  ..Y..
  ..Y..
`)
sprite("fx_boom", { outline: "k" }, `
  ..y.y..
  .yRyRy.
  yRwkwRy
  .yRkRy.
  ..y.y..
  .y...y.
`)
sprite("fx_shield", { outline: "k" }, `
  ..ggg..
  .gGGGg.
  gGGwGGg
  gGGGGGg
  .gGGGg.
  ..gGg..
  ...g...
`)
sprite("fx_shield_on", { base: "fx_shield" },
  glow("gGw", { r: 2, strength: 0.45, bands: 2 })
)

sheet("sanfa_enemies", [
  "enemy_const", "enemy_basic", "enemy_nsl",
  "boss_full", "boss_crack", "boss_break"
], { pad: 2 })
sheet("sanfa_fx", [
  "fx_bullet", "fx_bullet_power", "fx_boom", "fx_shield", "fx_shield_on"
], { pad: 2 })
