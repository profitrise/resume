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

router.get('/car', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('car', {
    layout: 'layout basic',

    make: 'Toyota',
    model: 'Camry',
    year: 2022,
    color: 'silver',
    features: {
      interior: {
        seats: {
          material: 'leather',
          color: 'black',
          heated: true,
          ventilated: true,
        },
        dashboard: {
          material: 'plastic',
          color: 'black',
          display: {
            type: 'LCD',
            size: 10.1,
            resolution: '1280x720',
            touchscreen: true,
          },
        },
        audio: {
          system: 'JBL',
          speakers: 8,
          subwoofer: true,
          bluetooth: true,
          USB: true,
        },
      },
      exterior: {
        wheels: {
          size: 18,
          type: 'alloy',
          color: 'silver',
        },
        headlights: {
          type: 'LED',
          brightness: 'high',
          automatic: true,
        },
        sunroof: {
          type: 'panoramic',
          size: 'large',
          automatic: true,
        },
      },
      safety: {
        airbags: {
          front: 2,
          side: 2,
          knee: 2,
          rear: 2,
        },
        assistance: {
          blind_spot_monitoring: true,
          rear_cross_traffic_alert: true,
          lane_departure_warning: true,
          adaptive_cruise_control: true,
          collision_warning: true,
        },
      },
    },
    engine: {
      type: 'gasoline',
      displacement: 2.5,
      horsepower: 206,
      torque: 186,
      transmission: {
        type: 'automatic',
        gears: 8,
      },
    },
    fuel_economy: {
      city: 28,
      highway: 39,
      combined: 32,
    },
    price: {
      base: 25900,
      destination: 995,
      options: {
        navigation: 1200,
        moonroof: 800,
        premium_paint: 595,
      },
      total: 28990,
    },
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================
// Підключаємо роутер до бек-енду
module.exports = router
