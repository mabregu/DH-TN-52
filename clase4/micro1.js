// Perfil
let perfil = "Rocko".toLowerCase();
//si esta en blanco => debe especificar el perfil del usuario
// si es administrador => usted tiene todos los permisos del sistema
// si es asistente => usted solo tiene permisos de registrar, modifiacr y consultar datos
// si es invitado => usted solo tiene permisos de consultar datos
// si no es ninguno de los de arriba => perfil invalido

console.log( "CadeNA".toLowerCase(), "CadeNA".toUpperCase());

switch (perfil) {
    case "":
        console.log("debe especificar el perfil del usuario");
    break;
    case "ADMINISTRADOR":
    case "administrador":
    case "Administrador":
        console.log("usted tiene todos los permisos del sistema");
    break;
    case "asistente":
        console.log("usted solo tiene permisos de registrar, modifiacr y consultar datos");
    break;
    case "invitado":
        console.log("usted solo tiene permisos de consultar datos");
    break;
    default:
        console.log("perfil invalido");
    break;
}