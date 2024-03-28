import PropTypes from 'prop-types';
import { FaCalendar, FaMapLocation } from 'react-icons/fa6';

const ReservationItem = ({
  item: {
    carModelName, rentalPrice, image, date, location,
  },
}) => (
  <li>
    <img src={image} alt={carModelName} />
    <h3>
      <span>{carModelName}</span>
      <span>
        $
        {rentalPrice}
      </span>
    </h3>
    <div>
      <time>
        <FaCalendar />
        {date}
      </time>
      <span>
        <FaMapLocation />
        {location}
      </span>
    </div>
  </li>
);

ReservationItem.propTypes = {
  item: PropTypes.shape({
    carModelName: PropTypes.string.isRequired,
    rentalPrice: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReservationItem;
