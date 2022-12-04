import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter as Router,
  RouterProvider
} from "react-router-dom";
import App from './App';
import Error from './components/Error';
import Portfolio from './components/Portfolio';
import Projects from './components/Projects';
import About from './components/About';
import symbleImg from './images/symbleapp.png'
import chatAppImg from './images/chatappimage.png'
import coachAppImg from './images/coachingappimage.png'
import oyinkanImg from './images/oyinkan.jpg'
import r1 from './images/R 1.png'
import r2 from './images/R 2.png'
import r3 from './images/R 3.png'
import path from './images/Path 1.png'
import spiral from './images/Spiral.png'
import sideCircles from './images/side circles.png'

const designElements = {
  r1, r2, r3, path, spiral, sideCircles
}


document.title = 'PORTFOLIO'

const person = {
  name: 'Joseph Bola-Ajayi',
  initials: 'J',
  image: oyinkanImg,
  resume: '',
  homeDescription: "Hi, I'm Joseph, a MERN Fullstack Developer",
  personDescription: "I'm an All-Round software developer that specializes in React, NodeJS, ExpressJS and MongoDB and I prioritize correct, well-documented, adaptible and efficient code-writing practices above all else. I build fast, easily navigatable and scalable websites that is tailored to your audience for the best user experience. Click the projects button below to check out my projects",
  projects: [{
    title: 'SYMBLE',
    description: "The SYMBLE project is a live streaming service app that allow for real-time streaming of event's and being able to connect with people from all over the world, it is a joint project that is built with Node.js, Express, React, MongoDB and AWS for hosting and configurations",
    image: symbleImg,
    link: 'http://app.symble.live',
    id: 1
  }, {
    title: 'CHATAPP',
    description: 'The CHATAPP project is a realtime chatting app that allows for users to be able to chat with each other. This project is built using React, the IO library, Node.js, Express, MongoDB.',
    image: chatAppImg,
    link: '',
    id: 2
  }, {
    title: 'COACHING WEBSITE',
    description: "This is a coaching template landing page website that uses vanilla HTML, CSS and JavaScript. It's made to be responsive for all kinds of devices",
    image: coachAppImg,
    link: 'https://bajoescience.github.io/coachjossy/',
    id: 3
  }],
  skills: ['REACT', 'NODEJS', 'MONGODB', 'EXPRESS', 'PYTHON', 'HTML', 'CSS', 'JAVASCRIPT'],
  vision: 'My vision is to be consistent in writing algorithmically consistent and efficient code no matter the pressure/situation',
  interest: 'I love researching and learning new things and trying different and creative ways to do things, The excitement I get from breaking down hard problems and then finally solving them is nothing short of glorious',
  about: "I have a Background in Mechanical Engineering from University of Lagos, Nigeria, Your team can benefit greatly from the amount of creativity, dedication and hardwork that I can offer which can be reflected in my technical ability to solve problems, my resume contains more info about my experience in software development.",
}
const buttonSize = () => {
  const width = window.screen.width
    if (width > 520) {
      return 'medium'
    }
    return 'small'
}

const router = Router([
  {
    path: "/portfolio",
    element: <App 
    buttonSize={buttonSize}
    initials={person.initials} 
    name={person.name.toUpperCase()}
    />,
    errorElement: <Error />,
    children: [{
      path: '',
      element: <Portfolio 
      buttonSize={buttonSize} 
      headerText={person.homeDescription} 
      mainText={person.personDescription}
      designElements={designElements}
      />,
    }, {
      path: 'projects',
      element: <Projects projects={person.projects} />
    }, {
      path: 'about',
      element: <About 
      name={person.name.toUpperCase()}
      buttonSize={buttonSize}
      image={person.image}
      skills={person.skills}
      vision={person.vision}
      interest={person.interest} 
      about={person.about}
      resume={person.resume}
      />
    }]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
