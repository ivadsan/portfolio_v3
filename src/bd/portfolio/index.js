import {
  pepperpal, 
  tu360habitat, 
  duncanville, 
  evius, 
  cpp, 
  podcasts,
  gruporie,
  wteam,
  recipe
} from '../../assets/images'
export const data = {
    projects: [
      {
        project: 'PepperPal - RobinFood',
        organization: 'RobinFood',
        shortDescription: '',
        longDescription: ``,
        technologies: 'NextJS, NextAuth, Redux',
        images: [
          'https://i.imgur.com/aswXW9W.png',
          'https://i.imgur.com/7lvmSMW.png',
          'https://i.imgur.com/sq9LTR0.png',
          'https://i.imgur.com/qlzRnxS.png'
        ],
        cover: pepperpal[0],
        website: false,
        url: '',
        descLink: ''
      },
      {
        project: 'PepperPal - RobinFood',
        organization: 'RobinFood',
        shortDescription: '',
        longDescription: ``,
        technologies: 'NextJS, NextAuth, Redux',
        images: [
          'https://i.imgur.com/aswXW9W.png',
          'https://i.imgur.com/7lvmSMW.png',
          'https://i.imgur.com/sq9LTR0.png',
          'https://i.imgur.com/qlzRnxS.png'
        ],
        cover: tu360habitat[0],
        website: false,
        url: '',
        descLink: ''
      },
      {
        project: 'Duncanville - RobinFood',
        organization: 'RobinFood',
        shortDescription: '',
        longDescription: ``,
        technologies: 'NextJS, NextAuth, Redux',
        images: [
          'https://i.imgur.com/aswXW9W.png',
          'https://i.imgur.com/7lvmSMW.png',
          'https://i.imgur.com/sq9LTR0.png',
          'https://i.imgur.com/qlzRnxS.png'
        ],
        cover: duncanville[0],
        website: false,
        url: '',
        descLink: ''
      },
      {
        project: 'Duncanville - RobinFood',
        organization: 'RobinFood',
        shortDescription: '',
        longDescription: ``,
        technologies: 'NextJS, NextAuth, Redux',
        images: [
          'https://i.imgur.com/aswXW9W.png',
          'https://i.imgur.com/7lvmSMW.png',
          'https://i.imgur.com/sq9LTR0.png',
          'https://i.imgur.com/qlzRnxS.png'
        ],
        cover: evius[0],
        website: false,
        url: '',
        descLink: ''
      },
      {
        project: 'SICP - Sistema de Información Colegio Personalizado Pensamiento',
        organization: 'Colegio Personalizado Pensamiento',
        shortDescription: 'Desarrollo de software para sistematizacion de la gestión académica y administrativa.',
        longDescription: `Desarrollo del sistema de información para la sistematización de la gestión académica y administrativa, en procesos cómo:
  - Admisión y matricula de estudiantes
  - Administración y registro de anamnesis e informe de psicología
  - Carga académica, registro de logros, notas y elaboración de boletines.
  - Libro de calificaciones y seguimiento a recuperaciones
  - Gestión del restaurante: Administración del servicio mensual, venta al detal, acceso al servicio a través de carné con código de barras.
        `,
        technologies: 'PHP, MySQL, Bootstrap, JQuery',
        images: [
          'https://i.imgur.com/aswXW9W.png',
          'https://i.imgur.com/7lvmSMW.png',
          'https://i.imgur.com/sq9LTR0.png',
          'https://i.imgur.com/qlzRnxS.png'
        ],
        cover: cpp[0],
        website: false,
        url: '',
        descLink: ''
      },
      {
        project: 'Website - Grupo Rie',
        organization: 'Grupo Rie',
        shortDescription: 'Desarrollo de página web realizado por Cosmosoft . Diseño a cargo de Big Bang Creativo',
        longDescription: `- Desarrollo y despliegue de la página web del Grupo Rie. 
  - Diseño gráfico a cargo de Big Bang Creativo
  - Documentación de administración del CMS`,
        technologies: 'PHP, Joomla, MySQL',
        images: [
          'https://i.imgur.com/I1KWJsQ.png',
          'https://i.imgur.com/6geNUT9.png',
          'https://i.imgur.com/RiWdnoV.png',
          'https://i.imgur.com/MvEFayq.png'],
        cover: gruporie[0],
        website: true,
        url: 'http://www.gruporie.com/',
        descLink: 'Visitar Sitio'
      },
      
      
      {
        project: 'Crea la App de los Jóvenes Colombianos',
        organization: 'Fedesoft, MinTIC, Platzi y la Alcaldía de Bogotá.',
        shortDescription: 'Tutor del equipo ganador en el concurso organizado por Fedesoft, MinTIC, Platzi y la Alcaldía de Bogotá.',
        longDescription: `Tutor del equipo ganador en el concurso organizado por Fedesoft, MinTIC, Platzi y la Alcaldía de Bogotá. 
        Entre las actividades que desarrollé con los estudiantes se encuentran:
        - Enseñanza de HTML, CSS, JavaScript
        - Organización y distribución de responsabilidades del equipo de trabajo
        - Revisión del código
        - Publicación del sitio web`,
        technologies: 'HTML, CSS, JavaScript',
        images: [
          'https://i.imgur.com/8ceNzTu.jpg',
          'https://i.imgur.com/a8P2JOJ.jpg'
        ],
        cover: wteam[0],
        website: true,
        url: 'https://platzi.com/blog/the-champions-ellos-son-los-ganadores-del-concurso-de-colegios-de-platzi-fedesoft-y-alcaldia-de-bogota/',
        descLink: 'Conocer Más'
      },

      {
        project: 'PWA - Recipes',
        organization: 'Platzi Master',
        shortDescription: 'PWA de recetas desarrollada con React',
        longDescription: `- PWA de recetas desarrollada con React
  - Implementa Responsive Design orientado a Mobile First 
  - Utiliza Workbox como service worker implementando diferente estrategias de cacheado.
  - Instalación de la aplicación en el home screen de Android
  - Soporte para trabajar sin conexión con la app 
  - Soporte para envío de notificaciones   
        `,
  
        technologies: 'React, Vercel, PWA, Service Worker, Workbox',
        images: [
          'https://i.imgur.com/pPYgVix.png',
          'https://i.imgur.com/Ykxc9ZA.png',
          'https://i.imgur.com/YgMrrvY.png',
          'https://i.imgur.com/4llEzt4.png'
        ],
        cover: recipe[0],
        website: true,
        url: 'https://recipe-app.cosmosoftroot.now.sh/',
        descLink: 'Visitar Sitio',
        repo: true,
        repoUrl: 'https://github.com/cosmosoftroot/recipe-app'
      },
      

      
      {
        project: 'Podcasts',
        organization: 'Platzi Master',
        shortDescription: 'Aplicación de Podcast que consume la API de AudioBooom realizado con NextJS',
        longDescription: `- Aplicación de Podcast realizada con NextJS
  - Consume la API de Audioboom, la cual distribuye contenido digital de tipo podcast
  - Implementa Responsive Design orientado a Mobile First
  - Incluye un reproductor de archivos de audio
  - Desplegado en Vercel`,
  
        technologies: 'NextJS, Vercel, React',
        images: [
          'https://i.imgur.com/8wJ7JkE.png',
          'https://i.imgur.com/ElNaKyJ.png',
          'https://i.imgur.com/Thj20Xd.png',
          'https://i.imgur.com/lAktUZL.png'
  
        ],
        cover: podcasts[0],
        website: true,
        url: 'https://podcasts.cosmosoftroot.now.sh/',
        descLink: 'Visitar Sitio',
        repo: true,
        repoUrl: 'https://github.com/cosmosoftroot/podcasts'
      }
      
  
     
    ]
  }
  