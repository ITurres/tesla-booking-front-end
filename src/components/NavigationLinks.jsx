import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  FaCreditCard, FaHouse, FaPlus, FaRegCalendar, FaTrash, FaUserLock, FaUserPlus, FaUserSlash,
} from 'react-icons/fa6';
import { userLogout } from '../features/users/usersSlice';
import getRandomId from '../helpers/getRandomId';
import '../styles/components/NavigationLinks.scss';

const NavigationLinks = () => {
  const logged = useSelector((state) => state.users.logged);
  const dispatch = useDispatch();
  const handleClicks = (type) => {
    switch (type) {
      case 'logout':
        dispatch(userLogout());
        break;
      default:
        break;
    }
  };
  const links = [
    {
      id: getRandomId(), name: 'Home', url: '/', icon: <FaHouse />, level: 0, type: null,
    },
    {
      id: getRandomId(), name: 'Reserve', url: 'reservations/new', icon: <FaCreditCard />, level: 2, type: null,
    },
    {
      id: getRandomId(), name: 'My Reservations', url: 'reservations', icon: <FaRegCalendar />, level: 2, type: null,
    },
    {
      id: getRandomId(), name: 'Insert Vehicle', url: 'vehicles/new', icon: <FaPlus />, level: 2, type: null,
    },
    {
      id: getRandomId(), name: 'Remove Vehicle', url: 'vehicles/delete', icon: <FaTrash />, level: 2, type: null,
    },
    {
      id: getRandomId(), name: 'Login', url: null, icon: <FaUserLock />, level: 1, type: null,
    },
    {
      id: getRandomId(), name: 'Register', url: null, icon: <FaUserPlus />, level: 1, type: null,
    },
    {
      id: getRandomId(), name: 'Logout', url: null, icon: <FaUserSlash />, level: 2, type: 'logout',
    },
  ];
  return (
    <nav>
      <ul className="list">
        {links.map((link) => {
          if ((!logged && link.level !== 2) || (logged && link.level !== 1)) {
            return (
              <li key={link.id}>
                <NavLink to={link.url} onClick={() => handleClicks(link.type)}>
                  {link.icon}
                  {link.name}
                </NavLink>
              </li>
            );
          }
          return null;
        })}
      </ul>
    </nav>
  );
};

export default NavigationLinks;
