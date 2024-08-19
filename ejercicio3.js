function calcularAumento(nombre, salario, categoria) {
    let porcentajeAumento;
    switch(categoria) {
        case 'A': porcentajeAumento = 0.15; break;
        case 'B': porcentajeAumento = 0.30; break;
        case 'C': porcentajeAumento = 0.10; break;
        case 'D': porcentajeAumento = 0.20; break;
        default: porcentajeAumento = 0; break;
    }
    let aumento = salario * porcentajeAumento;
    return `Empleado: ${nombre}, Salario: ${salario}, Aumento: ${aumento}, Nuevo Salario: ${salario + aumento}`;
}


console.log(calcularAumento("Ana Lopez", 1000, 'B'));
console.log(calcularAumento("Carlos Perez", 2000, 'A'));
console.log(calcularAumento("Maria Ramirez", 1500, 'C'));
console.log(calcularAumento("Pedro Rodriguez", 3000, 'D'));
