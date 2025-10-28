function suma(a, b) {
  // Se agrega validación de parámetros (simulación de mantenimiento)
  if (typeof a !== "number" || typeof b !== "number") {
    console.warn("Error: los parámetros deben ser números");
    return 0;
  }
  return a + b;
}

module.exports = suma;