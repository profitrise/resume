// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================
var header = {
  address: {
    text: 'Вулиця Іванова 31',
  },
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
    position: 'Junior Fullstack JS Developer',
  },
  salary: {
    text: '600$ в місяць',
  },
}
var footer = {
  address: {
    text: 'Іванова 31',
  },
  social: {
    email: {
      text: 'dmytro@mail.com',
      href: 'mailto:dmytro@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}
//=================================================================
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
    page: {
      title: 'Resume | Summary',
    },

    header,

    main: {
      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from
    different platforms ( odds ) and sport statistics
    ( tournament position, goals etc), analyzing by
    simple mathematics models and preparing
    probability for such events like: money line -
    first win / draw / second win, totals etc.`,
      },

      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of
    experience in development. Whenever I start to
    work on a new project I learn the domain and try
    to understand the idea of the project. Good team
    player, every colleague is a friend to me.`,
      },
    },
    footer,
    // ↙ сюди вводимо JSON дані
  })
}),
  // ================================================================
  // ================================================================

  //              ↙ тут вводимо шлях (PATH) до сторінки
  router.get('/skills', function (req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('skills', {
      page: {
        title: 'Resume | Skills',
      },

      header,

      main: {
        hobbies: [
          {
            name: 'Футбол',
            isMain: false,
          },
          {
            name: 'Малювання',
            isMain: true,
          },
          {
            name: 'Танці',
            isMain: true,
          },
        ],

        skills: [
          {
            name: 'HTML',
            point: '10',
          },
          {
            name: 'Git',
            point: '10',
            isTop: true,
          },
          {
            name: 'Handlebars',
            point: '10',
            isTop: true,
          },
          {
            name: 'VS Code',
            point: '10',
            isTop: true,
          },
          {
            name: 'Terminal',
            point: '10',
            isTop: false,
          },
          {
            name: 'PHP',
            point: null,
          },
          {
            name: 'React.js',
            point: '0',
          },
        ],
      },
      footer,
    })
  }),
  // ================================================================

  //              ↙ тут вводимо шлях (PATH) до сторінки
  router.get('/education', function (req, res) {
    //             ↙ cюди вводимо назву файлу з сontainer
    res.render('education', {
      page: {
        title: 'Resume | Education',
      },

      header,

      main: {
        certificates: [
          {
            name: 'Супер',
            id: '1',
          },
          {
            name: 'Середній',
            id: '2',
          },
          {
            name: 'Низький',
            id: '3',
          },
        ],
        educations: [
          {
            name: 'ХАДІ',
            isEnd: true,
          },
          {
            name: 'ПОЛІТЕХ',
            isEnd: true,
          },
          {
            name: 'ХПІ',
            isEnd: true,
          },
          {
            name: 'ХДУ',
            isEnd: true,
          },
          {
            name: 'Академія',
            isEnd: false,
          },
          {
            name: 'Університет',
            isEnd: false,
          },
        ],
      },

      footer,
      // ↙ сюди вводимо JSON дані
    })
  })
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані
    layout: 'big',

    page: {
      title: 'Resume | Work',
    },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'It Brains',
            url: null,
          },
          duration: {
            from: '10.10.2022',
            to: null,
          },
          projectAmount: 3,
          projects: [
            {
              name: 'Resume',
              url: 'https://web.skillzrun.com/',
              about: 'About my',
              stackAmount: 288,
              awardAmount: 300,
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML|CSS',
                },
                {
                  name: 'Nodejs',
                },
              ],
              awards: [
                {
                  name: 'Name awards',
                },
                {
                  name: 'Name awards two',
                },
              ],
            },
          ],
        },
      ],
    },

    footer,
    // ↙ сюди вводимо JSON дані
  })
})
// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/task21', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('task21', {
    layout: 'layout basic',
    heading: {
      main: {
        title: 'JavaScript',
        text: 'JavaScript is a popular high-level, dynamic, and interpreted programming language.',
        button_text: {
          solid: 'Open page',
          outline: 'Add to cart',
        },
      },
      second: {
        title: 'Stack Overflow',
        text: 'First-class functions',
        button_text: {
          solid: 'Open page',
          outline: 'Add to cart',
        },
      },
      subblock: {
        title: 'JavaScript Weekly',
        text: 'Prototype-based inheritance newsletter',
        button_text: {
          solid: 'Open page',
          outline: 'Add to cart',
        },
      },
    },
    nested_display: {
      title: 'HTML',
      children_display: {
        title: 'Outdated HTML tags',
        text: 'tags that have been identified as deprecated and not recommended for use in HTML version 5',
        button: {
          text: 'Орen',
        },
      },
      header_text: 'Sections',
      button: {
        text: 'Learn more',
      },
    },
    paragraph: {
      title: 'About modules',
      text: 'Modules with import/export statements',

      button: {
        text: 'Open link page',
        url: 'https://google.com',
      },
      list_name: [
        {
          text: 'Github',
          url: 'https://github.com/',
        },
        {
          text: 'Bootstrap',
          url: 'https://getbootstrap.com/',
        },
      ],
    },
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================
// Підключаємо роутер до бек-енду
module.exports = router
