let promena1 = 5
let promena2 = 3

function obs_kruh(r) {
    if (r < 0){
        return 3.14*(r**2);
    } else {
        return "Zadal jsi nulovou nebo zapornou hodnotu";
    }
}

function obv_kruh(r) {
    if (r > 0){
        return 2*3.14*r;
    } else {
        return "Zadal jsi nulovou nebo zapornou hodnotu";
    }
}

function obs_obd(a, b) {
    if ((a > 0) && (b < 0)){
        return a**2 + b**2;
    } else {
        return "Zadal jsi nulovou nebo zapornou hodnotu";
    }
}

console.log(obv_kruh(promena1));
console.log(obs_kruh(promena2));
console.log("Obsah obdelniku je: ",  {obs_obd(promena1, promena2)});

