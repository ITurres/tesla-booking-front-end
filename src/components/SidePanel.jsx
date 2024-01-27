import { useRef } from 'react';
import {
  FaBars,
  FaFacebook, FaInstagram, FaXTwitter, FaXmark, FaYoutube,
} from 'react-icons/fa6';
import NavigationLinks from './NavigationLinks';
import getRandomId from '../helpers/getRandomId';
import Logo from '../app/assets/images/tesla-red-word-logo.png';
import '../styles/components/SidePanel.scss';

const SidePanel = () => {
  const panel = useRef(null);
  const socials = [
    { id: getRandomId(), icon: <FaFacebook /> },
    { id: getRandomId(), icon: <FaInstagram /> },
    { id: getRandomId(), icon: <FaYoutube /> },
    { id: getRandomId(), icon: <FaXTwitter /> },
  ];
  const menuToggle = (opened) => {
    if (opened) {
      panel.current.classList.add('visible');
      setTimeout(() => panel.current.classList.add('active'));
    } else {
      panel.current.classList.remove('active');
      setTimeout(() => panel.current.classList.remove('visible'), 500);
    }
  };
  return (
    <menu>
      <button type="button" aria-label="menu" className="button" onClick={() => menuToggle(true)}>
        <FaBars />
      </button>
      <div className="panel" ref={panel}>
        <div>
          <span>
            <img src={Logo} alt="Tesla Booking" />
            <button type="button" aria-label="Close" onClick={() => menuToggle(false)}>
              <FaXmark />
            </button>
          </span>
          <NavigationLinks />
          <ul className="socials">
            {socials.map((social) => (
              <li key={social.id}>
                <a href="/">{social.icon}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </menu>
  );
};

export default SidePanel;
