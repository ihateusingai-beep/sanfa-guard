// sanfa-guard enemies — A pack: 3 theme hulls (constitution/basic/nsl)
// SEN STG: nose-down invaders, strong silhouette @ iPad distance
use("sweetie16")
pal({
  k: "#1a1020",
  K: "#0a0610",
  w: "#fff6e8",
  y: "#ffd34e",
  Y: "#c9a227",
  // constitution red
  r: "#ff6b6b",
  R: "#c62828",
  d: "#7a1218",
  // basic blue
  b: "#7eb6ff",
  B: "#1565c0",
  n: "#0d3a7a",
  // nsl green
  g: "#57f0a2",
  G: "#2e7d32",
  m: "#0f4a1c",
  // metal
  s: "#a0b0c8",
  S: "#5a6a80",
  o: "#3a4458"
})
ramps("kdrR", "knbB", "kmgG", "koSs")

// ---- shared silhouette (nose DOWN toward player) ----
// 24x28, mx for body; fins asymmetric OK via full later if needed
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

// glow cockpits as separate post-outline overlays
sprite("enemy_const", { base: "enemy_base", swap: { s: "r", S: "R", o: "d", w: "y" } },
  // cockpit eyes
  px(10, 10, "y"), px(13, 10, "y"),
  px(10, 11, "w"), px(13, 11, "w"),
  // nose tip bright
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
  // shield chevron
  px(11, 13, "y"), px(12, 13, "y"),
  glow("yGg", { r: 2, strength: 0.35, bands: 2 })
)

sheet("sanfa_enemies", ["enemy_const", "enemy_basic", "enemy_nsl"], { pad: 2 })
