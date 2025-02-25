const chistes = {
    lista: [
        "¿Qué le dice un bit al otro? Nos vemos en el bus.",
        "¿Sabes cómo se llama un programador que no sabe programar? ¡Jefe de proyecto!",
        "¿Qué hace un programador cuando algo no funciona? ¡Lo intenta de nuevo, de nuevo, de nuevo y de nuevo!"
    ],
    alAzar() {
        return this.lista[Math.floor(Math.random() * this.lista.length)];
    },
    cantidad() {
        return this.lista.length;
    }
}

const autores = ["juan","Ana"]

export {chistes,autores}
