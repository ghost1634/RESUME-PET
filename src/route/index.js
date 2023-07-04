const express = require('express')
const router = express.Router()
router.get('/', function (req, res) {
  res.render('index', {})
})
var header = {
  name: {
    firstname: 'Dmytro',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяць',
  address: 'м. Київ, вул. Предславенська, 126/49',
}

var footer = {
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
// ================================================================

router.get('/summary', function (req, res) {
  res.render('summary', {
    page: {
      title: 'Resume | Summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start
    to work on a new project I learn the domain and try to understand the idea of the project. Good team
    player, every colleague is a friend to me.`,
      },

      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
      tournament position, goals etc), analyzing by simple mathematics models and preparing probability
      for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
})

router.get('/skills', function (req, res) {
  res.render('skills', {
    page: {
      title: 'Resume | Skills',
    },

    header,

    main: {
      skills: [
        { name: 'HTML', point: 4, isTop: true },
        { name: 'Handlebars', point: 4, isTop: true },
        { name: 'VScode', point: 3 },
        { name: 'GIT', point: 5 },
        { name: 'Terminal', point: 5 },
        { name: 'NPM', point: 4 },
        { name: 'ReactJS', point: 0 },
        { name: 'PHP', point: null },
      ],
      hobbies: [
        { name: 'Подорожі', isMain: true },
        { name: 'Риболовля', isMain: true },
        { name: 'Садівництво', isMain: false },
      ],
    },

    footer,
  })
})

router.get('/education', function (req, res) {
  res.render('education', {
    page: {
      title: 'Resume | Education',
    },

    header,
    main: {
      educations: [
        {
          name: 'Івано-Франківський національний технічний університет нафти і газу',
          isEnd: true,
        },
        {
          name: 'Прикарпатський національний університет імені Василя Стефаника',
          isEnd: true,
        },
        {
          name: 'Івано-Франківський інститиут менеджменту - ТНЕУ',
          isEnd: false,
        },
      ],
      certificates: [
        {
          name: 'IT Brains',
          id: '1',
        },
        {
          name: 'Sales',
          id: '2',
        },
        {
          name: 'Distribution',
          id: '3',
        },
        {
          name: 'JS',
          id: '4',
        },
      ],
    },

    footer,
  })
})

router.get('/work', function (req, res) {
  res.render('work', {
    layout: 'big',
    page: {
      title: 'Resume | Work',
    },

    header,
    main: {
      works: [
        {
          position: 'Junior Fullstack developer',
          company: {
            name: 'IT Brains',
            url: null,
          },
          duration: {
            from: '12.03.2020',
            to: null,
          },
          projectAmount: '3',

          projects: [
            {
              name: 'Resume',
              url: 'https://resume.com.ua',
              about: 'web-development-project',
              stackAmount: '3',
              awardAmount: '2',
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'Node.js',
                },
              ],
              awards: [
                {
                  name: 'IT Awards Identity on Behance',
                },
                {
                  name: 'WEB AWARDS UA 2023',
                },
              ],
            },
          ],
        },
      ],
    },

    footer,
  })
})

router.get('/person', function (req, res) {
  res.render('person', {
    layout: 'person',
    person: {
      name: 'Emma Johnson',
      age: 32,
      gender: 'Female',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
      },
      education: [
        {
          degree: 'Bachelor of Science',
          major: 'Computer Science',
          university:
            'Massachusetts Institute of Technology',
          graduationYear: 2012,
        },
      ],
      workExperience: [
        {
          company: 'Google',
          title: 'Software Engineer',
          startDate: '2012-06-01',
          endDate: '2016-12-31',
          responsibilities: [
            'Developed new features for Google Maps',
            'Worked on improving search algorithms',
          ],
          year_founded: 1990,
          industry: 'Technology',
          employees: [
            {
              name: 'John Smith',
              position: 'CEO',
              department: 'Executive',
              projects: [
                {
                  name: 'Project Alpha',
                  description:
                    'Developing new software platform',
                  status: 'In Progress',
                  teams: [
                    {
                      team_name: 'Awesome Team',
                      team_leader: {
                        name: 'John Smith',
                        title: 'Team Leader',
                        email: 'john.smith@example.com',
                      },
                      team_members: [
                        {
                          name: 'Alice Johnson',
                          title: 'Software Engineer',
                          email:
                            'alice.johnson@example.com',
                          skills: ['Java', 'Python', 'SQL'],
                          projects: [
                            {
                              name: 'Project A',
                              description:
                                'Lorem ipsum dolor sit amet',
                              technologies: [
                                'Java',
                                'Spring Framework',
                              ],
                              team_members: [
                                {
                                  name: 'Bob Lee',
                                  title:
                                    'Software Engineer',
                                },
                                {
                                  name: 'Cindy Chen',
                                  title: 'UI Designer',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  })
})
module.exports = router
