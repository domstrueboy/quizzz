export default {
  myId: 'profile1',
  profiles: {
    profile1: {
      info: {
        title: 'profile 1 title',
        desc: 'profile 1 description',
        slug: 'profile1slug',
        email: 'profile1@profile1.com',
      },
      flows: {
        flow1: {
          info: {
            title: 'flow 1 title',
            desc: 'flow 1 description',
            slug: 'flow1slug',
          },
          unavailable: {
            years: [],
            months: [],
            monthDays: [],
            weekDays: [],
            hours: [],
          },
          connects: {
            events: ['event1', 'event2'],
            regularEvents: ['regEvent1', 'regEvent2'],
          },
        },
        flow2: {
          info: {
            title: 'flow 2 title',
            desc: 'flow 2 description',
            slug: 'flow2slug',
          },
          connects: {
            events: ['event3', 'event4'],
            regularEvents: ['regEvent3', 'regEvent4'],
          },
        },
      },
      events: {
        event1: {
          info: {
            title: 'event 1 title',
            desc: 'event 1 description',
            slug: 'event1slug',
          },
          connects: {
            flows: ['flow1'],
            teachers: ['teacher1'],
            eventTypes: ['class1'],
          },
        },
      },
      regularEvents: {
        regEvent1: {
          info: {
            title: 'regular event 1 title',
            desc: 'regular event 1 description',
            slug: 'regevent1slug',
          },
          connects: {
            profile: 'profile1',
            flows: ['flow1'],
            teachers: ['teacher1'],
            classes: ['class1'],
          },
        },
      },
      teachers: {
        teacher1: {
          info: {
            title: 'teacher 1 title',
            name: 'teacher 1 name',
            desc: 'teacher 1 description',
            slug: 'teacher1slug',
          },
          connects: {
            events: ['event7', 'event8'],
            regularEvents: ['regEvent7', 'regEvent8'],
            classes: ['class4'],
          },
        },
      },
      classes: {},
    },
  },
};