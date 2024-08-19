function convertirYClasificarTemperatura(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    let mensaje;

    if (fahrenheit >= 14 && fahrenheit < 32) {
        mensaje = "Temperatura baja";
    } else if (fahrenheit >= 32 && fahrenheit <= 68) {
        mensaje = "Temperatura adecuada";
    } else if (fahrenheit > 68 && fahrenheit <= 96) {
        mensaje = "Temperatura alta";
    } else {
        mensaje = "Temperatura desconocida";
    }

    return `Fahrenheit: ${fahrenheit}, Clasificación: ${mensaje}`;
}

console.log(convertirYClasificarTemperatura(25)); 
console.log(convertirYClasificarTemperatura(50)); 
console.log(convertirYClasificarTemperatura(80)); 
console.log(convertirYClasificarTemperatura(100)); 
console.log(convertirYClasificarTemperatura(67)); 
console.log(convertirYClasificarTemperatura(10)); 
console.log(convertirYClasificarTemperatura(30)); 