import {
  FaFacebook, FaInstagram, FaXTwitter, FaXmark, FaYoutube,
} from 'react-icons/fa6';
import NavigationLinks from './NavigationLinks';
import getRandomId from '../helpers/getRandomId';
import '../styles/components/SidePanel.scss';

const Header = () => {
  const socials = [
    { id: getRandomId(), icon: <FaFacebook /> },
    { id: getRandomId(), icon: <FaInstagram /> },
    { id: getRandomId(), icon: <FaYoutube /> },
    { id: getRandomId(), icon: <FaXTwitter /> },
  ];
  return (
    <section className="panel">
      <menu>
        <div>
          <img src="./tesla-red-word-logo.png" alt="Tesla Booking" />
          <button type="button" aria-label="Close">
            <FaXmark />
          </button>
        </div>
        <NavigationLinks />
        <ul className="socials">
          {socials.map((social) => (
            <li key={social.id}>
              <a href="/">{social.icon}</a>
            </li>
          ))}
        </ul>
      </menu>
    </section>
  );
};

export default Header;
