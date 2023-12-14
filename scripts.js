const translate = {
    "es": {
        "title" : "Bienvenido, este es mi portafolio",
        "subtitle":"Dante Reinaudo, Ingenierio Informático",
        "button_download" : "Descargar CV",
        "button_change" : "Cambiar Idioma",
        "menu_home" :"Inicio",
        "menu_aboutme" :"Sobre Mi",
        "menu_portfolio" :"Portafolio",
        "menu_skills" :"Habilidades",
        "menu_education" :"Educación",
        "menu_contact" :"Contacto",
        "aboutme_title" : "Sobre Mi",
        "aboutme_text" : "Soy estudiante de Ingeniería Informática proximo a graduarme en la prestigiosa Universidad de Buenos Aires. Soy un entusiasta por la Ciencia de Datos y la Inteligencia Artificial, disfruto de adquirir nuevos conocimientos y compartir dichas habilidades.",

        "skills_title" : "Habilidades",
        "skills_text" : "",

        "education_title" : "Educación",
        "education_text" : "",

        "learn_more1":"Ver más",
        "learn_more2":"Ver más",
        "learn_more3":"Ver más",
    },
    "en": {
        
        "title" : "Welcom, this is my portfolio",
        "subtitle":"Dante Reinaudo, Computer Engineer",
        "button_download" : "Download CV",
        "button_change" : "Change language",
        "menu_home" :"Home",
        "menu_aboutme" :"About Me",
        "menu_portfolio" :"Portfolio",
        "menu_skills" :"Skills",
        "menu_education" :"Education",
        "menu_contact" :"Contact",
        "aboutme_title" : "About Me",
        "aboutme_text" : "I'm a Computer Engineering student on the verge of graduating from the esteemed University of Buenos Aires. My academic focus lies in the realms of Data Science and Artificial Intelligence; I find joy in acquiring fresh insights and sharing these aptitudes.",

        "skills_title" : "Skills",
        "skills_text" : "",

        "education_title" : "Education",
        "education_text" : "",

        "learn_more1":"Learn more",
        "learn_more2":"Learn more",
        "learn_more3":"Learn more",

    }
};

// Función para cambiar el idioma
function changeLanguage() {
    const lang = document.documentElement.lang;
    const new_lang = lang === "es" ? "en" : "es";


    var keys = Object.keys(translate[new_lang])
    console.log(keys)

   

    keys.forEach(function (key){
        var element = document.getElementById(key)
        if (translate[new_lang][key] && element) {
            element.textContent = translate[new_lang][key];
        }

    })

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

