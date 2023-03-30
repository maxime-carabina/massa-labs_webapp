import React, { useState } from 'react';
import './App.css';

/* Components */
import NavBar from './components/NavBar/NavBar';
import ButtonBorderRed from './components/ButtonBorderRed/ButtonBorderRed';
import GlassCard from './components/GlassCard/GlassCard';
import DetailsCard from './components/Details/Details';
import Footer from './components/Footer/Footer';

/* Assets */
import Rocket from './assets/rocket.svg';
import RobotComputer from './assets/robot_computer.svg';
import RobotMedit from './assets/robot_medit.svg';
import RobotRunning from './assets/robot_running.svg';
import Masscot from './assets/masscot.svg';
import Masstronaut from './assets/masstronaut.svg';

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
      <p>
        Massa Ambassadorship Program intends to spread awareness about the Massa Blockchain, its
        Team’s vision, and decentralization.
      </p>
      <p>
        The Mission of Masstronauts (Core Ambassadors) & Masscots (Community Ambassadors) is to
        reach those goals - with a qualitative approach more than a quantitative one, however to
        allow as many people as possible to participate, a new episode starting from 0 will allow
        new Masscots to onboard and try their luck at a later date!
      </p>
      <h1>Principles’ Summary</h1>
      <ul>
        <li>10 to 20 Masscots for each new Cohort</li>
        <li>20+ Masstronauts to manage the Masscots</li>
      </ul>
      <h1>How to join?</h1>
      <p>
        From time to time, a selection will happen to allow new Masscots to join the program. Each
        selection will be done differently.
      </p>
      <h1>How does it work?</h1>
      <p>
        Each Masscot has a minimum amount of tasks to fill in. The more done the more points. It
        included articles, video tutorials, twitter threads, community management… They can be
        graded through our
        <a href="#" style={{ textDecoration: 'none' }}>
          <span style={{ color: 'var(--color-primary-red)' }}> Crew3 </span>
        </a>
        or different means Massa team would deem appropriate.
      </p>
      <h1>Requirements to apply</h1>
      <p>
        All people who have been participating in previous cohorts, those who have been writing
        content about Massa, those who are active within the community (community support, committee
        calls participation, AMA questions…) are welcome to apply.
      </p>
      <p style={{ textDecoration: 'underline' }}>
        For each Masscot it includes to fill in a form with:
      </p>
      <ul>
        <li>Twitter Handle</li>
        <li>Discord Handle</li>
        <li>Telegram Handle</li>
        <li>
          Agreeing & complying with the Massa Version of the Berlin Code of Conduct (
          <a href="#" style={{ textDecoration: 'none' }}>
            <span style={{ color: 'var(--color-primary-red)' }}>read here</span>
          </a>
          )
        </li>
      </ul>
      <h1>Content creation expectations & Ranking</h1>
      <p>
        Based on the (1) content amount - some content will be graded automatically (2) content
        quality - some content will be reviewed by Masstronauts, a leaderboard will be established.
        We expect quality more than quantity from our Masscots! Therefore the amount of content to
        produce monthly is capped. However, extra content is always noticed and appreciated…
      </p>
      <p style={{ textDecoration: 'underline' }}>For the each month it could include (examples):</p>
      <ul>
        <li>Articles</li>
        <li>Videos</li>
        <li>Twitter threads</li>
        <li>Reddit Posts</li>
        <li>Memes</li>
        <li>Additional exceptional quests</li>
        <li>Meetup organization</li>
        <li>Participating to Massadopted.com</li>
        <li>Proposing original ideas to promote Massa</li>
        <li>Anything you do best (but not in this list)</li>
      </ul>
    </div>
  );
};
const Apply = () => {
  return (
    <div className="Details__apply">
      <div className="Details__content">
        <img src={Masscot} alt="" />
        <div className="Details__content-info">
          <h1>Be a Masscot</h1>
          <p>
            Every time we can, we onboard 10 to 20 Masscots. Those spots will be filled by those who
            participated in the community, created content (articles, tutorials…), participated to
            our Crew3 Quests, and Massadopted.
          </p>
          <p>Do you fit this description? Apply for the next cohort!! And this is now.</p>
          <ButtonBorderRed label="Closed (for now)" isClickable={false} />
        </div>
      </div>
      <hr style={{ opacity: '0.6' }} />
      <div className="Details__content">
        <img src={Masstronaut} alt="" />
        <div className="Details__content-info">
          <h1>Be a Masstronaut</h1>
          <p>
            Masstronauts are outstanding Massatizen. They are not many, but they are here to support
            the community any way they can. You currently count around 20 of them.
          </p>
          <p>From time to time a spot might open. Masscots get priority to fill it.</p>
          <ButtonBorderRed label="Closed (for now)" isClickable={false} />
        </div>
      </div>
    </div>
  );
};

const FAQ = [
  {
    question: 'What can I get if I am an active masscot?',
    answer: (
      <ul>
        <li>Early access to new features</li>
        <li>Close communication with the project team</li>
        <li>Project tokens, based on contributions made</li>
      </ul>
    )
  },
  {
    question: 'Is there a Code of Conduct?',
    answer: (
      <p>
        Yes! Please read the Massa Version of the Berlin Code of Conduct (
        <a href="#" style={{ textDecoration: 'none' }}>
          <span style={{ color: 'var(--color-primary-red)' }}>read here</span>
        </a>
        ).
      </p>
    )
  },
  {
    question: 'How much rewards can I expect from this Beta program?',
    answer: (
      <p>
        YRewards depend of the tasks you will perform: you get points for what you do. Please note
        that it is a BETA program to brainstrom, try things and see how the community can be
        involved better in the future.
      </p>
    )
  },
  {
    question: 'What does Massa team look for as ambassadors?',
    answer: (
      <p>
        Graphism (infrographics...), development, copywriting, translation, community management are
        as many of the things you might be asked to do.
      </p>
    )
  },
  {
    question: 'How do I apply?',
    answer: (
      <p>
        You can already follow our Twitter account, join our Discord, our Telegram, follow our
        Github. And wait for the countdown to be over. Once done, there will be a Google form opened
        for couple of days, and then couple of weeks to review applications.
      </p>
    )
  }
];

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
      <div className="FAQ">
        <h1 className="FAQ__title">FAQ</h1>
        <div className="FAQ__content">
          {FAQ.map((item, index) => (
            <DetailsCard key={index} infos={item} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
