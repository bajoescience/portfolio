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

document.title = 'PORTFOLIO'

const person = {
  name: 'Joseph Bola-Ajayi',
  initials: 'J',
  image: '',
  resume: '',
  homeDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in scelerisque urna. Proin orci lorem, efficitur quis neque sit amet, fringilla vulputate lectus.',
  personDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in scelerisque urna. Proin orci lorem, efficitur quis neque sit amet, fringilla vulputate lectus. Mauris accumsan vel nibh a finibus. Nulla in urna sit amet ex condimentum finibus. In dapibus, felis placerat feugiat aliquam, purus leo eleifend ligula, et fringilla felis elit ac urna. Donec at nibh turpis. Pellentesque non lacus non neque maximus efficitur. Sed venenatis ipsum sit amet mattis lobortis. Pellentesque ut justo nec nulla iaculis pulvinar at sit amet felis. Phasellus dictum justo sed pulvinar tempor. Sed sit amet dolor a ligula blandit auctor sed et lacus.',
  projects: [{
    title: 'PROJECT TITLE',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in scelerisque urna. Proin orci lorem, efficitur quis neque sit amet, fringilla vulputate lectus. Mauris accumsan vel nibh a finibus. Nulla in urna sit amet ex condimentum finibus. In dapibus, felis placerat feugiat aliquam, purus leo eleifend ligula, et fringilla felis elit ac urna. Donec at nibh turpis. Pellentesque non lacus non neque maximus efficitur. Sed venenatis ipsum sit amet mattis lobortis. Pellentesque ut justo nec nulla iaculis pulvinar at sit amet felis. Phasellus dictum justo sed pulvinar tempor. Sed sit amet dolor a ligula blandit auctor sed et lacus.',
    image: '',
    link: '',
    id: 1
  }, {
    title: 'PROJECT TITLE',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in scelerisque urna. Proin orci lorem, efficitur quis neque sit amet, fringilla vulputate lectus. Mauris accumsan vel nibh a finibus. Nulla in urna sit amet ex condimentum finibus. In dapibus, felis placerat feugiat aliquam, purus leo eleifend ligula, et fringilla felis elit ac urna. Donec at nibh turpis. Pellentesque non lacus non neque maximus efficitur. Sed venenatis ipsum sit amet mattis lobortis. Pellentesque ut justo nec nulla iaculis pulvinar at sit amet felis. Phasellus dictum justo sed pulvinar tempor. Sed sit amet dolor a ligula blandit auctor sed et lacus.',
    image: '',
    link: '',
    id: 2
  }, {
    title: 'PROJECT TITLE',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in scelerisque urna. Proin orci lorem, efficitur quis neque sit amet, fringilla vulputate lectus. Mauris accumsan vel nibh a finibus. Nulla in urna sit amet ex condimentum finibus. In dapibus, felis placerat feugiat aliquam, purus leo eleifend ligula, et fringilla felis elit ac urna. Donec at nibh turpis. Pellentesque non lacus non neque maximus efficitur. Sed venenatis ipsum sit amet mattis lobortis. Pellentesque ut justo nec nulla iaculis pulvinar at sit amet felis. Phasellus dictum justo sed pulvinar tempor. Sed sit amet dolor a ligula blandit auctor sed et lacus.',
    image: '',
    link: '',
    id: 3
  }],
  skills: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in scelerisque urna. Proin orci lorem, efficitur quis neque sit amet, fringilla vulputate lectus.',
  vision: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in scelerisque urna. Proin orci lorem, efficitur quis neque sit amet, fringilla vulputate lectus.',
  interest: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in scelerisque urna. Proin orci lorem, efficitur quis neque sit amet, fringilla vulputate lectus.',
  about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in scelerisque urna. Proin orci lorem, efficitur quis neque sit amet, fringilla vulputate lectus. Mauris accumsan vel nibh a finibus. Nulla in urna sit amet ex condimentum finibus. In dapibus, felis placerat feugiat aliquam, purus leo eleifend ligula, et fringilla felis elit ac urna. Donec at nibh turpis. Pellentesque non lacus non neque maximus efficitur. Sed venenatis ipsum sit amet mattis lobortis. Pellentesque ut justo nec nulla iaculis pulvinar at sit amet felis. Phasellus dictum justo sed pulvinar tempor. Sed sit amet dolor a ligula blandit auctor sed et lacus.',
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
