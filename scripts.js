const translate = {
    "es": {
        "titulo": "Mi Portafolio",
        "descripcion": "Bienvenido a mi portafolio. Aquí puedes encontrar información sobre mis proyectos y habilidades.",
        "title" : "Bienvenido, este es mi portafolio",
        "button_download" : "Descargar CV",
        "button_change" : "Cambiar Idioma"
    },
    "en": {
        "titulo": "My Portfolio",
        "descripcion": "Welcome to my portfolio. Here you can find information about my projects and skills.",
        "title" : "WELCOME, THIS IS DANTE'S PORTFOLIO",
        "button_download" : "Download CV",
        "button_change" : "Change language"
    }
};

// Función para cambiar el idioma
function changeLanguage() {
    const lang = document.documentElement.lang;
    const new_lang = lang === "es" ? "en" : "es";

    // Actualiza el contenido de los elementos HTML
    //document.getElementById("titulo").innerText = textos[nuevoIdioma]["titulo"];
    //document.getElementById("descripcion").innerText = textos[nuevoIdioma]["descripcion"];

    document.getElementById("title").innerText = translate[new_lang]["title"];
    document.getElementById("button_download").innerText = translate[new_lang]["button_download"];
    document.getElementById("button_change").innerText = translate[new_lang]["button_change"];

    // Actualiza el atributo lang del elemento html
    document.documentElement.lang = new_lang;
    console.log("change language succesfully")
}

function changeCurriculumFile(lang) {
    return (lang === 'es') ? 'cv/cv_es.pdf' : 'cv/cv_en.pdf';
}

function downloadCV() {
    const lang = document.documentElement.lang;
    const file_name = changeCurriculumFile(lang);
    document.getElementById('button_download').href = file_name;
}

document.getElementById('button_download').addEventListener('click', downloadCV);