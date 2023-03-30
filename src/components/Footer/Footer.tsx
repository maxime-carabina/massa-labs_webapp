import React from 'react';
import './Footer.css';
import { SocialIcon } from 'react-social-icons';

/* Assets */
import MassaLogo from '../../assets/logo_massa.webp';

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer__header">
        <img src={MassaLogo} alt="massa logo" />
        <ul>
          <li>
            <a>
              <SocialIcon
                url="https://massalabs.medium.com/"
                fgColor="white"
                bgColor="transparent"
              />
            </a>
          </li>
          <li>
            <a>
              <SocialIcon
                url="https://github.com/massalabs/massa"
                fgColor="white"
                bgColor="transparent"
              />
            </a>
          </li>
          <li>
            <a>
              <SocialIcon
                url="https://twitter.com/massa_labs"
                fgColor="white"
                bgColor="transparent"
              />
            </a>
          </li>
          <li>
            <a>
              <SocialIcon url="https://t.me/massa_labs" fgColor="white" bgColor="transparent" />
            </a>
          </li>
          <li>
            <a>
              <SocialIcon
                url="https://www.reddit.com/r/MassaLabs/"
                fgColor="white"
                bgColor="transparent"
              />
            </a>
          </li>
          <li>
            <a>
              <SocialIcon
                url="https://www.youtube.com/channel/UCZ8J9Z2Z0ZQZ9ZQZ9ZQZ9ZQ"
                fgColor="white"
                bgColor="transparent"
              />
            </a>
          </li>
          <li>
            <a>
              <SocialIcon
                url="https://www.linkedin.com/company/massa-labs/"
                fgColor="white"
                bgColor="transparent"
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="Footer__content">
        <div className="Footer__content__left">
          <div className="Footer__content__links">
            <h2>About</h2>
            <ul>
              <li>
                <a href="#">Vision</a>
              </li>
              <li>
                <a href="#">Technology</a>
              </li>
              <li>
                <a href="#">Smart Contracts</a>
              </li>
              <li>
                <a href="#">Ecosystem</a>
              </li>
              <li>
                <a href="#">Team</a>
              </li>
            </ul>
          </div>
          <div className="Footer__content__links">
            <h2>Testnet</h2>
            <ul>
              <li>
                <a href="#">Explorer</a>
              </li>
              <li>
                <a href="#">Run your node</a>
              </li>
              <li>
                <a href="#">Build on Massa</a>
              </li>
              <li>
                <a href="#">SC Playground</a>
              </li>
              <li>
                <a href="#">Apply for a grant</a>
              </li>
            </ul>
          </div>
          <div className="Footer__content__links">
            <h2>Community</h2>
            <ul>
              <li>
                <a href="#">Ambassadorship</a>
              </li>
              <li>
                <a href="#">Useful links</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Massadopted</a>
              </li>
            </ul>
          </div>
          <div className="Footer__content__links">
            <h2>More</h2>
            <ul>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Services</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="Footer__content__right">
          <p>
            <span style={{ color: 'var(--color-primary-red)' }}>Subscribe</span> to receive
            <br /> Massa&apos;s
            <span style={{ color: 'var(--color-primary-red)' }}>
              <span> latest</span>
              <br /> updates
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
