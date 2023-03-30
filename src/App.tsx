import React, { useState } from 'react';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import ButtonBorderRed from './components/ButtonBorderRed/ButtonBorderRed';
import GlassCard from './components/GlassCard/GlassCard';

import Rocket from './assets/rocket.svg';
import RobotComputer from './assets/robot_computer.svg';
import RobotMedit from './assets/robot_medit.svg';
import RobotRunning from './assets/robot_running.svg';

const Vision = () => {
  return (
    <div className="Details__vision">
      <div className="Details__vision-container">
        <div className="Details__vision-content">
          <h1>Be decentralization warriors</h1>
          <p>
            Masscots and Masstronauts are here to make that Massa stands for Mass Adoption, and they
            will make it happen.
          </p>
        </div>
        <img src={RobotComputer} alt="Robot computer" />
      </div>
      <div className="Details__vision-container">
        <img src={RobotMedit} alt="Robot medit" />
        <div className="Details__vision-content">
          <h1>Share love and build with love</h1>
          <p>
            That’s one of the core principles of Masscots and Masstronauts. They are here to make
            Massa a better place for everyone.
          </p>
        </div>
      </div>
      <div className="Details__vision-container">
        <div className="Details__vision-content">
          <h1>Take-off Mission</h1>
          <p>
            Help to bring new perspectives for the ecosystem, projects to reach the community,
            developers to try out their apps and communicate. Time to get your boosters ready.
          </p>
        </div>
        <img src={RobotRunning} alt="Robot running" />
      </div>
    </div>
  );
};
const Guidelines = () => {
  return (
    <div className="Details__guidelines">
      <h1>Guidelines</h1>
    </div>
  );
};
const Apply = () => {
  return (
    <div className="Details__apply">
      <h1>Apply</h1>
    </div>
  );
};

function App() {
  const [detailsOptions, setDetailsOptions] = useState('Vision');
  const Details = () => {
    switch (detailsOptions) {
      case 'Vision':
        return <Vision />;
      case 'Guidelines':
        return <Guidelines />;
      case 'Apply':
        return <Apply />;
      default:
        return <Vision />;
    }
  };
  return (
    <div className="App">
      <NavBar />

      <div className="Ambassadorship__banner">
        <div className="Ambassadorship-container__topic">
          <h1>
            <span style={{ color: 'var(--color-primary-red)' }}>Ambassador</span>ship
          </h1>
          <h2>Masstronauts, Masscots! It&apos;s a call for you to join the adventure!</h2>
          <p>
            Massa Ambassadorship program intends to help Massa to extend its outreach and give the
            opportunity for the community to be part of the adventure together. We want the
            community to join us and bring Massadoption of the blockchain technology to the world,
            without compromizing on our values such as decentralization. You can
            <a href="#" style={{ textDecoration: 'none' }}>
              <span style={{ color: 'var(--color-primary-red)' }}> join our Crew3 </span>
            </a>
            and do the quests or write articles with
            <a href="#" style={{ textDecoration: 'none' }}>
              <span style={{ color: 'var(--color-primary-red)' }}> Massadopted </span>
            </a>
            to get extra chances to be noticed.
          </p>
          <span style={{ marginTop: 40 }}>
            <ButtonBorderRed label="Applications are closed 😢" isClickable={false} />
          </span>
        </div>
        <img className="Ambassadorship__logo" src={Rocket} alt="Rocket" />
      </div>
      <div className="Guidance">
        <GlassCard title="Vision" onClick={() => setDetailsOptions('Vision')} />
        <GlassCard title="Guidelines" onClick={() => setDetailsOptions('Guidelines')} />
        <GlassCard title="Apply" onClick={() => setDetailsOptions('Apply')} />
      </div>
      <div className="Details">{Details()}</div>
    </div>
  );
}

export default App;
