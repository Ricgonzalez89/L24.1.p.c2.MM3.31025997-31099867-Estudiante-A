export default class Cl_estudiante {
    constructor(nombre, acumNota, cntMateria) {
        this.nombre = nombre;
        this.acumNota = acumNota;
        this.cntMateria = cntMateria;
    }

    set nombre(n) {
        this._nombre = n;
    }

    get nombre() {
        return this._nombre;
    }

    set acumNota(a) {
        this._acumNota = +a;
    }

    get acumNota() {
        return this._acumNota;
    }

    set cntMateria(m) {
        this._cntMateria = +m;
    }

    get cntMateria() {
        return this._cntMateria;
    }

    promedio() {
        if (this.cntMateria > 0)
            return this.acumNota / this.cntMateria;
        else
            return 0;
    }
}