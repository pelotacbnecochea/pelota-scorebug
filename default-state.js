const DEFAULT_STATE = {
  route: "sb",
  scale: "1.0",
  hl: "FPPBA - 5ta Sudeste - Fecha 2",
  hr: "16/5/2026",
  dl: "Centro Basko Necochea",
  dr: "Z1 - P1",
  t1n: "Centro Basko Necochea 'A'",
  t1p: "",
  t2n: "Centro Basko Necochea 'B'",
  t2p: "",
  t1s1: 0,
  t1s2: 0,
  t1s3: 0,
  t2s1: 0,
  t2s2: 0,
  t2s3: 0,
  vh: true,
  vt: false,
  vd: true,
  v1: false,
  v2: false,
  bs1: false,
  bs2: false,
  bs3: false,
  tu: "",
  t1l: "",
  t2l: "",
  nhl: "FPPBA - 5ta Sudeste - Fecha 2",
  nhr: "16/5/2026",
  ndl: "Centro Basko Necochea",
  ndr: "Z1 - P1",
  nt1n: "",
  nt1p: "",
  nt2n: "",
  nt2p: "",
};

const OVERLAY_DEFAULT_STATE = { ...DEFAULT_STATE };

if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = DEFAULT_STATE;
}
