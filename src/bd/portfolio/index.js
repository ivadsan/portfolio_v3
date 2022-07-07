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
        project: 'pepperpal.project',
        organization: 'RobinFood',
        position: 'pepperpal.position',
        shortDescription: '',
        longDescription: 'pepperpal.description',
        technologies: 'NextJS, NextAuth, Redux, Docker, Sass',
        images: pepperpal,
        cover: pepperpal[0],
        website: false,
        url: '',
        descLink: ''
      },
      {
        project: 'tu360Inmobiliario.project',
        organization: 'ItGlobers',
        position: 'tu360Inmobiliario.position',
        shortDescription: '',
        longDescription: 'tu360Inmobiliario.description',
        technologies: 'React, Redux, VTEX, JQuery, VanillaJS, AWS',
        images: tu360habitat,
        cover: tu360habitat[0],
        website: false,
        url: '',
        descLink: ''
      },
      {
        project: 'duncanville.project',
        organization: 'Moción',
        position: 'duncanville.position',
        shortDescription: '',
        longDescription: 'duncanville.description',
        technologies: 'React, VanillaJS, Firebase, Sass',
        images: duncanville,
        cover: duncanville[0],
        website: false,
        url: '',
        descLink: ''
      },
      {
        project: 'evius.project',
        organization: 'Moción',
        position: 'evius.position',
        shortDescription: '',
        longDescription: 'evius.description',
        technologies: 'React, Redux, Firebase, Netlify, Mongo',
        images: evius,
        cover: evius[0],
        website: false,
        url: '',
        descLink: ''
      },
      {
        project: 'cpp.project',
        organization: 'Colegio Personalizado Pensamiento',
        position: "cpp.position",
        shortDescription: 'Desarrollo de software para sistematizacion de la gestión académica y administrativa.',
        longDescription: 'cpp.description',
        technologies: 'PHP, MySQL, Bootstrap, JQuery',
        images: cpp,
        cover: cpp[0],
        website: false,
        url: '',
        descLink: ''
      },
      {
        project: 'gruporie.project',
        organization: 'Grupo Rie',
        position: 'gruporie.position',
        shortDescription: 'Desarrollo de página web realizado por Cosmosoft . Diseño a cargo de Big Bang Creativo',
        longDescription: 'gruporie.description',
        technologies: 'PHP, Joomla, MySQL',
        images: gruporie,
        cover: gruporie[0],
        website: true,
        url: 'http://www.gruporie.com/',
        descLink: 'Visitar Sitio'
      },
      
      
      {
        project: 'wteam.project',
        organization: 'Fedesoft, MinTIC, Platzi y la Alcaldía de Bogotá.',
        position: "wteam.position",
        shortDescription: 'Tutor del equipo ganador en el concurso organizado por Fedesoft, MinTIC, Platzi y la Alcaldía de Bogotá.',
        longDescription: 'wteam.description',
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
        project: 'recipe.project',
        organization: 'Platzi Master',
        position: "recipe.position",
        shortDescription: 'PWA de recetas desarrollada con React',
        longDescription: 'recipe.description',
  
        technologies: 'React, Vercel, PWA, Service Worker, Workbox',
        images: recipe,
        cover: recipe[0],
        website: true,
        url: 'https://recipe-app.cosmosoftroot.now.sh/',
        descLink: 'Visitar Sitio',
        repo: true,
        repoUrl: 'https://github.com/cosmosoftroot/recipe-app'
      },
      

      
      {
        project: 'podcasts.project',
        organization: 'Platzi Master',
        position: "podcasts.position",
        shortDescription: 'Aplicación de Podcast que consume la API de AudioBooom realizado con NextJS',
        longDescription: 'podcasts.description',
  
        technologies: 'NextJS, Vercel, React',
        images: podcasts,
        cover: podcasts[0],
        website: true,
        url: 'https://podcasts.cosmosoftroot.now.sh/',
        descLink: 'Visitar Sitio',
        repo: true,
        repoUrl: 'https://github.com/cosmosoftroot/podcasts'
      }
      
  
     
    ]
  }
  