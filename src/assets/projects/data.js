import weather from './weather.png'
import cvmaker from './cvmaker.png'
import store from './store.png'
import campco from './campco.png'
import gps from './gps.png'
import mandelbrot from './mandelbrot.png'
import vidly from './vidly.png'
import portfolio from './portfolio.png'

const data = [
  {
    img: cvmaker,
    title: "CV Maker",
    builtWith: "React, Styled Components, Netlify",
    code: "https://github.com/aaliyan1230/CV_maker",
    live: "https://cvmaker1230.netlify.app",
    description:
      "A cv maker application having fields for objective, experience, education, certifications, skills.",
  },
  {
    img: store,
    title: "E-Commerce Store",
    builtWith: "React, Redux, Styled-components, fakestore api",
    code: "https://github.com/aaliyan1230/e_commerce_app",
    live: "https://morbstore1230.netlify.app",
    description:
      "An E-Commerce store UI built with react and styled-components and dummy data fetched from fakestore api. Implemented shopping cart state-management with redux",
  },
  {
    img: gps,
    title: "GPS Attendance System",
    builtWith: "Django, React, Typescript, Mantine, Mysql",
    code: "https://github.com/aaliyan1230/GPS_attendance_system_complete",
    live: "https://github.com/aaliyan1230/GPS_attendance_system_complete",
    description:
      "An Attendance system with location tracking. Having two base case users: Attendee and Organizer. Each can join some events which have some slots for which attendance is to be marked.",
  },

  {
    img: portfolio,
    title: "Portfolio Site",
    builtWith: "React, Chakra UI, React Router",
    code: "https://github.com/aaliyan1230/personal_portfolio",
    live: "https://aaliyan1230.netlify.app",
    description: "Closed loop! You're already here. Why not take a look around!",
  },

  {
    img: weather,
    title: "Weather App",
    builtWith: "React, tailwind css, openweather api",
    code: "https://github.com/aaliyan1230/weather_app",
    live: "https://aaliyan1230.github.io/weather_app",
    description:
      "Built with react gives you the current weather information of locations all over the world using openweather api.",
  },
  {
    img: vidly,
    title: "Vidly movie rental",
    builtWith: "Django , HTML , CSS, JavaScript",
    code: "https://github.com/aaliyan1230/movies_vidly",
    live: "https://sleepy-crag-54996.herokuapp.com/movies/#",
    description:
      "This is a simple backend focused project built as a part of introductory course to django by mosh hamedani.",
  },
  {
    img: mandelbrot,
    title: "Mandelbrot and Julia set",
    builtWith: "C#, .Net, Visual Studio",
    code: "https://github.com/aaliyan1230/Drawing",
    live: "https://github.com/aaliyan1230/Drawing",
    description:
      "A windows form application for graphic visualization of mandelbrot and julia sets. This was built as a project of OOP in second semester.",
  },
  {
    img: campco,
    title: "Campus Chat Application",
    builtWith: "Python",
    code: "https://github.com/aaliyan1230/chat-application",
    live: "https://github.com/aaliyan1230/chat-application",
    description:
      "A LAN desktop chat application built with Python implementing simple networking concepts. This was built as a project of Programming Fundamentals in first semester.",
  },
];

export default data;
