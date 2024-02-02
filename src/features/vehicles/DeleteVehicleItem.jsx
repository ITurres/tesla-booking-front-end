import PropTypes from 'prop-types';

const DeleteVehicleItem = ({
  item: {
    id, carModelName, rentalPrice, image,
  }, handler,
}) => (
  <li>
    <img src={image} alt={carModelName} />
    <div>
      <h3>{carModelName}</h3>
      <span>
        $
        {rentalPrice}
      </span>
      <button type="button" className="btn" onClick={() => handler(id)}>Delete</button>
    </div>
  </li>
);

DeleteVehicleItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    carModelName: PropTypes.string.isRequired,
    rentalPrice: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  handler: PropTypes.func.isRequired,
};

export default DeleteVehicleItem;
