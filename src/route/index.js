// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

//=================================================================

var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '$1600',
  address: 'Volodymyrska St, 33, Kyiv',
}
var footer = {
  social: {
    email: {
      text: 'ivanov@mail.com',
      href: 'mailto:dmytro@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },

    linkedIn: {
      href: 'https://www.linkedin.com/in/dmytro-test',
      text: 'LinkedIn',
    },
  },
}

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume -- Summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: 'Open-minded for new technologies, with 1 years of experience in development. Whenever I start to work on a new project I learn the domain and try to understand the idea of the project. Good team player, every colleague is a friend to me.',
      },
      experience: {
        title: 'Other experience',
        text: 'Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics ( tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc',
      },
    },
    footer,
  })
})

// ================================================================
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume -- Skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: false,
        },
        {
          name: 'HSBC',
          point: 11,
          isTop: true,
        },
        {
          name: 'VS code',
          point: 9,
          isTop: false,
        },
        {
          name: 'Github',
          point: 8,
          isTop: null,
        },
        {
          name: 'MBA',
          point: 10,
          isTop: true,
        },
        {
          name: 'NPM',
          point: 9,
          isTop: false,
        },
        {
          name: 'React.js',
          point: 0,
          isTop: null,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],

      hobbies: [
        {
          name: 'Racing',
          isMain: true,
        },
        {
          name: 'Football',
          isMain: true,
        },
        {
          name: 'Curling',
          isMain: false,
        },
      ],
    },

    footer,
  })
}),
  router.get('/education', function (req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('education', {
      // ↙ сюди вводимо JSON дані
      page: {
        title: 'Resume -- Education',
      },

      header,

      main: {
        education: [
          {
            name: 'Stanford University',

            isEnd: true,
          },
          {
            name: 'University of California Berkeley',

            isEnd: true,
          },
          {
            name: 'University of Oxford',

            isEnd: false,
          },
          {
            name: 'University of Washington Seattle',

            isEnd: null,
          },
          {
            name: 'Columbia University',

            isEnd: true,
          },
          {
            name: 'University of Cambridge',

            isEnd: false,
          },
        ],

        certificates: [
          {
            name: 'Bachelor degree',

            id: 1234567,
          },
          {
            name: 'Masters degree',

            id: 7654321,
          },
          {
            name: 'PhD',

            id: 1029387,
          },
        ],
      },
      footer,
    })
  })
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані
    layout: 'big',

    page: {
      title: 'Resume -- Work',
    },

    header,

    main: {
      work: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: 'https://it-brains.com.ua/',
          },
          duration: {
            from: '23.12.2020',
            to: null,
          },
          projectAmount: 3,

          projects: [
            {
              name: 'Resume',
              url: 'https://resume.com.ua/',
              about: 'Oscar-world movie awards',
              stackAmount: 3,
              stacks: [
                {
                  name: 'React.js',
                },
                { name: 'HTML' },
                { name: 'Nodejs' },
              ],
              awardAmount: 2,
              awards: [
                { name: 'Best actor' },
                { name: 'Best soundtrack' },
              ],
            },
          ],
        },
      ],
    },
    footer,
  })
}),
  // Підключаємо роутер до бек-енду
  (module.exports = router)
