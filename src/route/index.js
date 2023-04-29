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
    layout: 'layout basic',
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
      layout: 'layout basic',
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
      layout: 'layout basic',
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
    layout: 'layout basic',

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

router.get('/web', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('web', {
    layout: 'layout basic',
    web: {
      languages: [
        {
          name: 'HTML',
          version: 'HTML5',
          description:
            'Hypertext Markup Language is the standard markup language for creating web pages and web applications.',
          elements: [
            {
              name: 'div',
              description:
                'Defines a division or a section in an HTML document.',
              attributes: [
                {
                  name: 'id',
                  description:
                    'Specifies a unique id for an HTML element.',
                },
                {
                  name: 'class',
                  description:
                    'Specifies one or more class names for an HTML element.',
                },
              ],
            },
            {
              name: 'p',
              description:
                'Defines a paragraph in an HTML document.',
              attributes: [
                {
                  name: 'id',
                  description:
                    'Specifies a unique id for an HTML element.',
                },
                {
                  name: 'class',
                  description:
                    'Specifies one or more class names for an HTML element.',
                },
              ],
            },
          ],
        },
        {
          name: 'CSS',
          version: 'CSS3',
          description:
            'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in HTML or XML.',
          properties: [
            {
              name: 'color',
              description: 'Sets the color of the text.',
              values: [
                {
                  value: 'red',
                  description:
                    'Sets the text color to red.',
                },
                {
                  value: 'blue',
                  description:
                    'Sets the text color to blue.',
                },
              ],
            },
            {
              name: 'background-color',
              description:
                'Sets the background color of an element.',
              values: [
                {
                  value: 'white',
                  description:
                    'Sets the background color to white.',
                },
                {
                  value: 'black',
                  description:
                    'Sets the background color to black.',
                },
              ],
            },
          ],
        },
        {
          name: 'JavaScript',
          version: 'ES6',
          description:
            'JavaScript is a programming language used to create interactive effects within web browsers.',
          functions: [
            {
              name: 'alert()',
              description:
                'Displays an alert box with a specified message and an OK button.',
              parameters: [
                {
                  name: 'message',
                  type: 'string',
                  description:
                    'The message to display in the alert box.',
                },
              ],
            },
            {
              name: 'getElementById()',
              description:
                'Returns the element with the specified ID.',
              parameters: [
                {
                  name: 'id',
                  type: 'string',
                  description:
                    'The ID of the element to find.',
                },
              ],
            },
          ],
        },
      ],
    },
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
