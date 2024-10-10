import Cl_estudiante from "./Cl_estudiante.js";

export default class Cl_becado extends Cl_estudiante {
    constructor(nombre, acumNota, cntmateria) {
        super(nombre, acumNota, cntmateria);
    }

    beca() {
        if (this.promedio() > 15)
            return `${this.nombre} recibe una beca de $30.00`;
        else if (this.promedio() <= 15 && this.promedio() > 10)
            return `${this.nombre} recibe una beca de $20.00`;
        else if (this.promedio() < 10)
            return `${this.nombre} no le corresponde beca`;
    }
}