export default class User{
    id?: number;
    apellidoPaterno: string; // parametro opcional
    apellidoMaterno: string;
    nombres: string;
    dni: string;
    fechaNacimiento: string;
    direccion: string;
    telefono: string;
    email: string;
    /*constructor(id:number, 
        apellidoPaterno: string,
        apellidoMaterno: string,
        nombres: string,
        dni: string,
        fechaNacimiento,
        direccion: string,
        telefono: string,
        email: string
        ){
        this.id = id;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.nombres = nombres;
        this.dni = dni;
        this.fechaNacimiento = fechaNacimiento;
        this.direccion = direccion;
        this.telefono = telefono;
        this.email = email;
    }*/
}