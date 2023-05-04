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
router.get('/task22', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('task22', {
    layout: 'layout basic',
    page_header: {
      title: 'InnovaMind',
      description: 'Welcome to our wonderful community',
    },
    section: {
      about_us: {
        title_list: {
          main: 'InnovaMind',
          sub: 'InnovaMind is a forward-thinking startup focused on innovation. We are dedicated to creating efficient and powerful software through the use of first-class functions.',
        },
        button: { text: 'Show more' },
      },
      advantage: {
        title: 'Advantage',
        efficiency: {
          title: 'Efficiency',
          sub_title: 'Streamline your software development',
          description:
            'Streamline your software development with our innovative platform...',
          button: 'Show more',
        },
        innovation: {
          title: 'Innovation',
          sub_title:
            'Forward-thinking approach to programming',
          description:
            ' Stay ahead of the curve with our forward-thinking approach to programming...',
          button: 'Show more',
        },
        collaboration: {
          title: 'Collaboration',
          sub_title: 'Connect with like-minded developers',
          description:
            'Connect with a community of like-minded developers to share knowledge and insights...',
          button: 'Show more',
        },
      },
      agreement: {
        title: 'Terms of use',
        info: {
          sub_title: 'Check out our requirements',
          detail: {
            text: 'By using or accessing the service, you agree to be bound by the terms and conditions outlined in the agreement.',
            button: 'Аccept',
          },
        },
      },
    },
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================
// Підключаємо роутер до бек-енду
module.exports = router
