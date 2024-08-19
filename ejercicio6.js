function calcularDescuentoViaje(origen, destino) {
    let descuento = 0;
    if (origen === "Palma") {
        switch (destino) {
            case "La costa del Sol": descuento = 0.05; break;
            case "Panchimalco": descuento = 0.10; break;
            case "Puerto el Triunfo": descuento = 0.15; break;
        }
    }
    return `Origen: ${origen}, Destino: ${destino}, Descuento: ${descuento * 100}%`;
}


console.log(calcularDescuentoViaje("Palma", "Panchimalco"));
console.log(calcularDescuentoViaje("Palma", "La costa del Sol"));
console.log(calcularDescuentoViaje("Palma", "Puerto el Triunfo"));
