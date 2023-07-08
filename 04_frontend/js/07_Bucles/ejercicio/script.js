function parOImpar(numeros) {
  let par = 0;
  let impar = 0;
  let total = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
      par++;
      total++;
    } else {
      impar++;
      total++;
    }
  }

  console.log("El total de numeros es: " + total);
  console.log("total de numeros pares son: " + par);
  console.log("total de numeros impares son: " + impar);

  return numeros;
}

parOImpar([2, 1, 5, 4, 7]);
