
// Calcula la edad del padre cuando nació el hijo, esto ya es del profe
function calcularEdadDePaternidad(padre, hijo) {
    const nacimientoPadre = padre.fechaNacimiento;
    const nacimientoHijo = hijo.fechaNacimiento;
    let edad = nacimientoHijo.getFullYear() - nacimientoPadre.getFullYear();
    const mes = nacimientoHijo.getMonth() - nacimientoPadre.getMonth();
    if (mes < 0 || (mes === 0 && nacimientoHijo.getDate() < nacimientoPadre.getDate())) {
        edad--;
    }
    return edad;
}

// Clase Persona con propiedades y métodos
class Persona {
    constructor(nombre, fechaNacimiento, tieneHijos) {
        this.nombre = nombre; // string
        this.fechaNacimiento = new Date(fechaNacimiento); // Date
        this.tieneHijos = tieneHijos; // boolean
    }

    saludar() {
        return `Hola, mi nombre es ${this.nombre}.`;
    }

    calcularEdad() {
        const hoy = new Date();
        let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
        const mes = hoy.getMonth() - this.fechaNacimiento.getMonth();
        if (mes < 0 || (mes === 0 && hoy.getDate() < this.fechaNacimiento.getDate())) {
            edad--;
        }
        return edad;
    }


}

// Crear instancias de Persona
const persona1 = new Persona('Isis', '1985-01-07', true);
const persona2 = new Persona('Mar', '2009-02-15', false);

// Mostrar información de las personas
console.log("La madre se llama " + persona1.nombre + " y tiene " + persona1.calcularEdad() + " años.");
console.log("La hija se llama " + persona2.nombre + " y tiene " + persona2.calcularEdad() + " años.");

// Calcular la edad del padre cuando nació el hijo
const edadPaternidad = calcularEdadDePaternidad(persona1, persona2);
console.log(`La edad de ${persona1.nombre} cuando nació ${persona2.nombre} fue de ${edadPaternidad} años.`);    




