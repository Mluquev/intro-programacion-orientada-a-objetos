console.log("Hola mundo");

class Persona {
    constructor (nombre, fechaNacimiento, tienehijos) {
        this.nombre= nombre; // string
        this.fechaNacimiento= new Date; // date
        this.tienehijos= tienehijos; //boolean

}
saludar() {
    console.log('Hola, mi nombre es ' + this.nombre + ' y tengo ' + this.edad + ' años.');
}

}

const persona1 = new Persona ("Juan", 30, true);
persona1.saludar();




