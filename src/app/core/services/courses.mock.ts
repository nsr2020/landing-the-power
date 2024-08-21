import { Course } from "./courses.models";

export const COURSES: Course[] = [
    {
        id: '1',
        title: 'Máster ThePowerMBA',
        description: 'El MBA online que te ayuda a entender el negocio como los fundadores de Waze, YouTube, Tesla…',
        image: 'https://framerusercontent.com/images/qTWHKIBpIzeAGFWug0roara5dtM.jpg?scale-down-to=512',
        price: 695,
        duration: 80,
        isOnline: true,
        numVacancies: 20
    },
    {
        id: '2',
        title: 'Máster en Ventas',
        description: 'El primer máster de ventas en el que aprendes técnicas de negociación, comunicación de la mano del Ex Negociador del FBI.',
        image: 'https://framerusercontent.com/images/IW1khi8heizJNm98ma3O8Et6Tp0.png?scale-down-to=512',
        isOnline: true,
        price: 695,
        duration: 23,
        numVacancies: 20
    },
    {
        id: '3',
        title: 'ThePowerMBA + Ventas',
        description: 'Aprende de negocio de los fundadores de empresas como Netflix, y técnicas de negociación del Ex Negociador del FBI.',
        image: 'https://framerusercontent.com/images/Lie5Q5oJuIBj34NwPl6Q3ZjT6qM.png?scale-down-to=512',
        isOnline: true,
        price: 950,
        duration: 103,
        numVacancies: 30
    },
    {
        id: '4',
        title: 'Máster en Consulting',
        description: 'Conviértete en consultor en 6 meses y accede a las firmas globales más prestigiosas (PwC, Deloitte, EY, BCG, McKinsey)',
        image: 'https://framerusercontent.com/images/tsfC49f2eYGXpoLlhRqj9500.jpg?scale-down-to=512',
        isOnline: true,
        price: 2499,
        duration: 1145,
        numVacancies: 10
    },
    {
        id: '5',
        title: 'ThePower Digital Marketing',
        description: 'El máster que te enseñará los conceptos del marketing digital para ver el mundo desde una perspectiva completamente nueva.',
        image: 'https://framerusercontent.com/images/a7YapjJwdM5zBpyID4EYTgfjUc.jpg?scale-down-to=512',
        isOnline: true,
        price: 695,
        duration: 95,
        numVacancies: 50
    },
    {
        id: '6',
        title: 'Máster en Inteligencia Artificial',
        description: 'Aprende a utilizar las herramientas de Inteligencia Artificial sin miedo y conviértelas en tu mejor aliado. Sin tener conocimientos previos.',
        image: 'https://framerusercontent.com/images/saF6PFAmBzVMBdaJQ4PboNKMs.jpg?scale-down-to=512',
        isOnline: true,
        price: 1149,
        duration: 200,
        numVacancies: 60
    },
    {
        id: '7',
        title: 'UX-UI Design',
        description: 'Aprende a diseñar productos digitales en 16 semanas con Figma con metodologías clave: Design Sprint, Design Thinking.',
        image: 'https://framerusercontent.com/images/slf3rSb0KUMKtQqbj334KBZ4FwQ.jpg?scale-down-to=512',
        isOnline: true,
        price: 4200,
        duration: 340,
        numVacancies: 70
    },
    {
        id: '8',
        title: 'Bootcamp de Desarrollo Full Stack',
        description: 'El bootcamp con el que te convertirás en uno de los perfiles más valiosos, escasos y mejor remunerados: Full Stack Developer.',
        image: 'https://framerusercontent.com/images/8ttCDKI5QMi9KYW2vGmTKmiG0.png?scale-down-to=512',
        isOnline: false,
        price: 4200,
        duration: 400,
        numVacancies: 80
    },
    {
        id: '9',
        title: 'Angular',
        description: 'Angular is a platform that makes it easy to build applications with the web.',
        image: 'https://angular.io/assets/images/logos/angular/angular.svg',
        price: 100,
        duration: 40,
        isOnline: true,
        numVacancies: 5
    },
    {
        id: '10',
        title: 'React',
        description: 'React is a JavaScript library for building user interfaces.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
        price: 50,
        duration: 20,
        isOnline: true,
        numVacancies: 10
    },
    {
        id: '11',
        title: 'Vue',
        description: 'Vue is a progressive framework for building user interfaces.',
        image: 'https://vuejs.org/images/logo.png',
        price: 75,
        duration: 30,
        isOnline: false,
        numVacancies: 3
    },
    {
        id: '12',
        title: 'Svelte',
        description: 'Svelte is a radical new approach to building user interfaces.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png',
        price: 25,
        duration: 10,
        isOnline: true,
        numVacancies: 8
    },
    {
        id: '13',
        title: 'Ember',
        description: 'Ember.js is an open-source JavaScript web framework.',
        image: 'https://emberjs.com/images/tomster-twitter-card.png',
        price: 125,
        duration: 50,
        isOnline: false,
        numVacancies: 1
    },
    {
        id: '14',
        title: 'Meteor',
        description: 'Meteor is an open-source platform for web, mobile, and desktop.',
        image: 'https://static.vecteezy.com/system/resources/thumbnails/008/257/657/small/meteor-icon-logo-design-illustration-template-vector.jpg',
        price: 150,
        duration: 60,
        isOnline: true,
        numVacancies: 30
    },
    {
        id: '15',
        title: 'Node',
        description: 'Node.js is an open-source, cross-platform, JavaScript runtime environment.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png',
        price: 200,
        duration: 80,
        isOnline: true,
        numVacancies: 20
    },
    {
        id: '16',
        title: 'Deno',
        description: 'Deno is a simple, modern and secure runtime for JavaScript and TypeScript.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Deno_2021.svg/512px-Deno_2021.svg.png',
        price: 175,
        duration: 70,
        isOnline: false,
        numVacancies: 15
    },
    {
        id: '17',
        title: 'Nest',
        description: 'Nest is a framework for building efficient, scalable Node.js server-side applications.',
        image: 'https://nestjs.com/img/logo_text.svg',
        price: 225,
        duration: 90,
        isOnline: true,
        numVacancies: 25
    },
    {
        id: '18',
        title: 'Express',
        description: 'Express is a minimal and flexible Node.js web application framework.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png',
        price: 250,
        duration: 100,
        isOnline: false,
        numVacancies: 2
    }
];
