function analizarValores(valores) {
    let negativos = 0, positivos = 0, multiplosDe15 = 0, sumaPares = 0;
    
    valores.forEach(valor => {
        if (valor < 0) negativos++;
        if (valor > 0) positivos++;
        if (valor % 15 === 0) multiplosDe15++;
        if (valor % 2 === 0) sumaPares += valor;
    });

    return `Negativos: ${negativos}, Positivos: ${positivos}, Múltiplos de 15: ${multiplosDe15}, Suma de Pares: ${sumaPares}`;
}


console.log(analizarValores([10, -15, 30, 45, -20, 16]));
console.log(analizarValores([10, 15, 30, 45, 20, 16]));
