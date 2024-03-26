import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import {
  FaBars,
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaXmark,
  FaYoutube,
} from 'react-icons/fa6';
import NavigationLinks from './NavigationLinks';
import getRandomId from '../helpers/getRandomId';
import Logo from '../app/assets/images/tesla-red-word-logo.png';
import '../styles/components/SidePanel.scss';

const SidePanel = () => {
  const panel = useRef(null);
  const location = useLocation();
  const socials = [
    { id: getRandomId(), icon: <FaFacebook /> },
    { id: getRandomId(), icon: <FaInstagram /> },
    { id: getRandomId(), icon: <FaYoutube /> },
    { id: getRandomId(), icon: <FaXTwitter /> },
  ];
  const toggleMenu = (opened) => {
    if (opened) {
      panel.current.classList.add('panel_visible');
      setTimeout(() => panel.current.classList.add('panel_active'));
    } else {
      panel.current.classList.remove('panel_active');
      setTimeout(() => panel.current.classList.remove('panel_visible'), 500);
    }
  };
  useEffect(() => {
    if (panel.current.classList.contains('panel_visible')) {
      toggleMenu(false);
    }
  }, [location]);
  return (
    <menu>
      <button
        type="button"
        aria-label="menu"
        className="panel_button"
        onClick={() => toggleMenu(true)}
      >
        <FaBars className="bars_icon_svg" />
      </button>
      <div className="panel_menu" ref={panel}>
        <div>
          <span>
            <img src={Logo} alt="Tesla Booking" />
            <button
              type="button"
              aria-label="Close"
              className="mobile_close_button"
              onClick={() => toggleMenu(false)}
            >
              <FaXmark className="x_icon_svg" />
            </button>
          </span>
          <NavigationLinks />
          <ul className="panel_socials">
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
