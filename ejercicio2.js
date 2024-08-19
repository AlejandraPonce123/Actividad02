function calcularNotaFinal(nombre, carnet, examen, tareas, asistencia, investigacion) {
    let notaFinal = (examen * 0.2) + (tareas * 0.4) + (asistencia * 0.1) + (investigacion * 0.3);
    return `Nombre: ${nombre}, Carnet: ${carnet}, Nota Final: ${notaFinal}`;
}


console.log(calcularNotaFinal("Juan Perez", "A12345", 8, 9, 8, 8));
console.log(calcularNotaFinal("Maria Lopez", "B54321", 7, 8, 9, 9.5));
console.log(calcularNotaFinal("Pedro Ramirez", "C67890", 9, 8, 7, 10));
