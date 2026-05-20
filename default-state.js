const DEFAULT_STATE = {
    route: "sb",
    scale: "1.0",
    hl: "FPPBA - Categoría - Fecha #",
    hr: "Instancia",
    dl: "Sede",
    dr: "DD/MM/AAAA",
    t1n: "Equipo 1",
    t1p: "",
    t2n: "Equipo 2",
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
    nhl: "",
    nhr: "",
    ndl: "",
    ndr: "",
    nt1n: "",
    nt1p: "",
    nt2n: "",
    nt2p: ""
};

const OVERLAY_DEFAULT_STATE = { ...DEFAULT_STATE };

if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = DEFAULT_STATE;
}
