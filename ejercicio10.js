function calcularPromedioEdades(edadesTurno) {
    let sumaEdades = edadesTurno.reduce((acumulado, edad) => acumulado + edad, 0);
    return sumaEdades / edadesTurno.length;
}

function compararPromedios(turnoMañana, turnoTarde, turnoNoche) {
    let promedioMañana = calcularPromedioEdades(turnoMañana);
    let promedioTarde = calcularPromedioEdades(turnoTarde);
    let promedioNoche = calcularPromedioEdades(turnoNoche);

    let mayorPromedio = Math.max(promedioMañana, promedioTarde, promedioNoche);
    let turnoConMayorPromedio;

    if (mayorPromedio === promedioMañana) {
        turnoConMayorPromedio = "Turno Mañana";
    } else if (mayorPromedio === promedioTarde) {
        turnoConMayorPromedio = "Turno Tarde";
    } else {
        turnoConMayorPromedio = "Turno Noche";
    }

    return `Promedio Mañana: ${promedioMañana}, Promedio Tarde: ${promedioTarde}, Promedio Noche: ${promedioNoche}. Turno con mayor promedio: ${turnoConMayorPromedio}`;
}


console.log(compararPromedios([10, 12, 14, 16, 18], [15, 17, 19, 21, 23, 25], [20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40]));

