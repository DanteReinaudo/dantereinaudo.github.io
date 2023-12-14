const textos = {
    "es": {
        "titulo": "Mi Portafolio",
        "descripcion": "Bienvenido a mi portafolio. Aquí puedes encontrar información sobre mis proyectos y habilidades.",
        "bienvenida" : "Bienvenido, este es mi portafolio",
        "texto_descarga" : "Descargar CV",
        "texto_cambio" : "Cambiar Idioma"
    },
    "en": {
        "titulo": "My Portfolio",
        "descripcion": "Welcome to my portfolio. Here you can find information about my projects and skills.",
        "bienvenida" : "WELCOME, THIS IS DANTE'S PORTFOLIO",
        "texto_descarga" : "Download CV",
        "texto_cambio" : "Change language"
    }
};

// Función para cambiar el idioma
function cambiarIdioma() {
    const idiomaActual = document.documentElement.lang;
    const nuevoIdioma = idiomaActual === "es" ? "en" : "es";

    // Actualiza el contenido de los elementos HTML
    document.getElementById("titulo").innerText = textos[nuevoIdioma]["titulo"];
    document.getElementById("descripcion").innerText = textos[nuevoIdioma]["descripcion"];

    document.getElementById("bienvenida").innerText = textos[nuevoIdioma]["bienvenida"];
    document.getElementById("texto_descarga").innerText = textos[nuevoIdioma]["texto_descarga"];
    document.getElementById("texto_cambio").innerText = textos[nuevoIdioma]["texto_cambio"];

    // Actualiza el atributo lang del elemento html
    document.documentElement.lang = nuevoIdioma;
}