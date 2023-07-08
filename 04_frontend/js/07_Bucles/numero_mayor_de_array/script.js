function array(numeros) {
  let mayor = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      mayor = numeros[i];
    }
  }

  console.log("Este es el numero mayor: " + mayor);

  return mayor;
}

array([10, 20, 40]);
