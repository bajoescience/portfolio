import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter as Router,
  RouterProvider,
  Route,
} from "react-router-dom";
import App from './App';
import Error from './components/Error';
import Portfolio from './components/Portfolio';
import Projects from './components/Projects';
import About from './components/About';
import symbleImg from './images/symbleapp.png'
import chatAppImg from './images/chatappimage.png'
import coachAppImg from './images/coachingappimage.png'

document.title = 'PORTFOLIO'

const person = {
  name: 'Joseph Bola-Ajayi',
  initials: 'J',
  image: '',
  resume: '',
  homeDescription: "Hi, I'm Joseph, a MERN Fullstack Developer",
  personDescription: "I'm an All-Round software developer that specializes in React, NodeJS, ExpressJS and MongoDB and I prioritize correct, well-documented, adaptible and efficient code-writing practices above all else. I build fast, easily navigatable and scalable websites that is tailored to your audience for the best user experience. Click the projects button below to check out my projects",
  projects: [{
    title: 'SYMBLE',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in scelerisque urna. Proin orci lorem, efficitur quis neque sit amet, fringilla vulputate lectus. Mauris accumsan vel nibh a finibus. Nulla in urna sit amet ex condimentum finibus. In dapibus, felis placerat feugiat aliquam, purus leo eleifend ligula, et fringilla felis elit ac urna. Donec at nibh turpis. Pellentesque non lacus non neque maximus efficitur. Sed venenatis ipsum sit amet mattis lobortis. Pellentesque ut justo nec nulla iaculis pulvinar at sit amet felis. Phasellus dictum justo sed pulvinar tempor. Sed sit amet dolor a ligula blandit auctor sed et lacus.',
    image: symbleImg,
    link: 'http://app.symble.live',
    id: 1
  }, {
    title: 'CHATAPP',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in scelerisque urna. Proin orci lorem, efficitur quis neque sit amet, fringilla vulputate lectus. Mauris accumsan vel nibh a finibus. Nulla in urna sit amet ex condimentum finibus. In dapibus, felis placerat feugiat aliquam, purus leo eleifend ligula, et fringilla felis elit ac urna. Donec at nibh turpis. Pellentesque non lacus non neque maximus efficitur. Sed venenatis ipsum sit amet mattis lobortis. Pellentesque ut justo nec nulla iaculis pulvinar at sit amet felis. Phasellus dictum justo sed pulvinar tempor. Sed sit amet dolor a ligula blandit auctor sed et lacus.',
    image: chatAppImg,
    link: '',
    id: 2
  }, {
    title: 'COACHING WEBSITE',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in scelerisque urna. Proin orci lorem, efficitur quis neque sit amet, fringilla vulputate lectus. Mauris accumsan vel nibh a finibus. Nulla in urna sit amet ex condimentum finibus. In dapibus, felis placerat feugiat aliquam, purus leo eleifend ligula, et fringilla felis elit ac urna. Donec at nibh turpis. Pellentesque non lacus non neque maximus efficitur. Sed venenatis ipsum sit amet mattis lobortis. Pellentesque ut justo nec nulla iaculis pulvinar at sit amet felis. Phasellus dictum justo sed pulvinar tempor. Sed sit amet dolor a ligula blandit auctor sed et lacus.',
    image: coachAppImg,
    link: 'https://bajoescience.github.io/coachjossy/',
    id: 3
  }],
  skills: ['REACT', 'NODEJS', 'MONGODB', 'EXPRESS', 'PYTHON', 'HTML', 'CSS', 'JAVASCRIPT'],
  vision: 'My vision is to be consistent in writing algorithmically consistent and efficient code no matter the pressure/situation',
  interest: 'I love researching and learning new things and trying different and creative ways to do things, The excitement I get from breaking down hard problems and then finally solving them is nothing short of glorious',
  about: "I'm a Mechanical Engineering graduate from University of Lagos, Nigeria, Your team can benefit greatly from the amount of creativity, dedication and hardwork that I can offer which can be reflected in my technical ability to solve problems",
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
