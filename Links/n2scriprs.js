import { suma, resta, multiplicacion } from './n4link.js';  // Asegúrate de que la ruta sea correcta

// Realiza la operación
const resultadoSuma = suma(2, 4);

// Muestra el resultado en el elemento con id "resultado"
document.getElementById('resultado').textContent = `El resultado de la suma es: ${resultadoSuma}`;
