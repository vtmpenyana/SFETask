import React, { useState } from 'react';
import './App.css';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Particles from "react-tsparticles";
import logo from './ilogo.png'
import Portal from '../../components/Portal/Portal'

const particlesOptions = {
  backgroundMode: {
    enable: true
  },
  fpsLimit: 60,
  particles: {
    number: {
      value: 0
    },
    collisions: {
      enable: false
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.5,
      random: false,
      animation: {
        enable: false,
        speed: 1,
        minimumValue: 0.1,
        sync: false
      }
    },
    size: {
      value: 15,
      random: {
        enable: true,
        minimumValue: 15
      },
      animation: {
        enable: false,
        speed: 40,
        minimumValue: 0.1,
        sync: false
      }
    },
    links: {
      enable: false
    },
    life: {
      duration: {
        sync: true,
        value: 5
      },
      count: 1
    },
    move: {
      enable: true,
      gravity: {
        enable: true
      },
      speed: 10,
      direction: "none",
      random: false,
      straight: false,
      outModes: {
        top: "none",
        default: "destroy",
        bottom: "bounce"
      },
      trail: {
        enable: true,
        fillColor: "#FFFFFF",
        length: 10
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onHover: {
        enable: false,
        mode: "repulse",
        parallax: {
          enable: false,
          force: 60,
          smooth: 10
        }
      },
      onClick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 0.8
      },
      repulse: {
        distance: 200
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  detectRetina: true,
  background: {
    color: "#000"
  },
  emitters: {
    direction: "top",
    life: {
      count: 0,
      duration: 0
    },
    rate: {
      delay: 0.1,
      quantity: 1
    },
    size: {
      width: 0,
      height: 0
    },
    position: {
      x: 50,
      y: 80
    },
    particles: {
      bounce: {
        vertical: {
          value: 0.8,
          random: {
            enable: true,
            minimValue: 0.4
          }
        }
      },
      color: {
        value: ["#53d9d1", "#f27b9b", "#eb7132"]
      },
      links: {
        enable: false
      },
      opacity: {
        value: 0.5
      },
      move: {
        speed: 13,
        random: false
      }
    }
  }
}
function App() {

  // route-state
  const [route, setRoute] = useState('home')


  // user-state
  const [currentUser, setCurrentUser] = useState({})

  // mocking a users database
  const [students, setStudents] = useState([{
    name: 'Gram',
    email: 'admin@task.com',
    surname: 'undefined',
    id: 1234567890123,
    homeAddress: 'test address',
    password: 'someHashStringHere'
  },
  {
    name: 'student1',
    email: 'student1@task.com',
    surname: 'un',
    id: 1234567890123,
    homeAddress: 'test address',
    password: 'someHashStringHere'
  },
  {
    name: 'Three',
    email: 'three@task.com',
    surname: 'test',
    id: 1234567890123,
    homeAddress: 'test address',
    password: 'someHashStringHere'
  },
  {
    name: 'admin2',
    email: 'admin2@task.com',
    surname: 'undefined2',
    id: 1234567890123,
    homeAddress: 'test address',
    password: 'someHashStringHere'
  },
])

  // basic routing logic
if(route=== 'portal'){
  return(
    <div className='tc'>
      <h1>{`hello 
      ${currentUser.name}`}</h1>
      <Portal setRoute={setRoute} students={students}/>
    </div>
  )
}
else{
  return (route === 'home' || route === 'register')? (
    <div className="App">
    <img src={logo} alt='logo' />
    <Register setRoute={setRoute} setStudents={setStudents} students={students} setCurrentUser={setCurrentUser} />
      <Particles
          id="tsparticles"
          options={particlesOptions}
        />
    </div>
  )
  
  : 
 (
    <div className="App">
    <img src={logo} alt='logo' />
    <Login setRoute={setRoute} setCurrentUser={setCurrentUser} students={students}/>
      <Particles
          id="tsparticles"
          options={particlesOptions}
        />
    </div>
  )
}

}

export default App;
