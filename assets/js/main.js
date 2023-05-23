/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .habilidades-container, .section-title, .services',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input, .contact__button .skills--container-main',{interval: 200}); 

const nav__list = document.querySelector('.nav__list');
const home_title = document.querySelector('.home__title');
const descargar = document.getElementById('descargar_cv');
const section_title = document.querySelector('.section-title');
const about__text = document.querySelector('.about__text');
const text_skills = document.getElementById('text_skills');
const text_services = document.getElementById('text_services');
const text_projects = document.getElementById('text_projects');
const text_contact = document.getElementById('text_contact');
const text_nodejs = document.getElementById('text_nodejs');
const text_react = document.getElementById('text_react');
const text_web = document.getElementById('text_web');
const text_marketing = document.getElementById('text_marketing');
const footer__title = document.querySelector('.footer__title');

const espanol = document.getElementById('espanol');

espanol.addEventListener('click', () => {
    nav__list.innerHTML = '<li class="nav__item"><a href="#home" class="nav__link active-link">Inicio</a></li><li class="nav__item"><a href="#about" class="nav__link">Sobre mí</a></li><li class="nav__item"><a href="#skills" class="nav__link">Habilidades</a></li><li class="nav__item"><a href="#work" class="nav__link">Trabajos</a></li><li class="nav__item"><a href="#contact" class="nav__link">Contacto</a></li>';
    home_title.innerHTML = 'Hola!<br>Soy <span class="home__title-color">Juan Manuel</span><br> Desarrollador Web Full Stack';
    descargar.innerHTML = 'Descargar CV';
    section_title.innerHTML = 'Sobre mí';
    text_skills.innerHTML = 'Habilidades';
    text_services.innerHTML = 'Servicios';
    text_projects.innerHTML = 'Proyectos';
    text_contact.innerHTML = 'Contacto';
    text_nodejs.innerHTML = 'Desarrollador con Node.js';
    text_react.innerHTML = 'Desarrollador con ReactJs';
    text_web.innerHTML = 'Desarrollador Web';
    text_marketing.innerHTML = 'Estrategias de marketing digital';
    footer__title.innerHTML = 'Trabajemos juntos';
    about__text.innerHTML = 'Tengo 20 años, soy estudiante de Ingeniería de Sistemas y desarrollador web full stack que vive en Cali, Colombia. Apasionado por la innovación, la tecnología, la programación y el desarrollo web y de software. Si estás interesado en mi trabajo y te gustaría colaborar en un proyecto, estaré encantado de trabajar contigo, y tú estarás encantado de trabajar conmigo. Lo único de lo que estoy seguro es que vine a este mundo para ser grande ¡y trabajaré duro para lograrlo! Me gusta aprender nuevas tecnologías y mejorar mis habilidades. Me gusta trabajar en equipo, soy responsable y comprometido con mi trabajo.';
}
);

const ingles = document.getElementById('ingles');

ingles.addEventListener('click', () => {
    window.location.reload();
}
);

