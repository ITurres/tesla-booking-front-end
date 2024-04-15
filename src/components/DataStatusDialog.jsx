import PropTypes from 'prop-types';

// * 'out-of-normal-flow' class is used to style the dialog when it is not centered
// * this will place the dialog with an absolute position on the screen.

import '../styles/components/DataStatusDialog.scss';

function DataStatusDialog({
  isCentered,
  paragraph,
  strongText,
  status,
  reFetchFunction,
}) {
  return (
    <div
      className={`data-status-component ${
        isCentered ? '' : 'out-of-normal-flow'
      }`}
    >
      <p>
        {paragraph}
        &nbsp;
        <strong>{strongText}</strong>
      </p>
      <h3>{status}</h3>
      <button type="button" className="btn" onClick={reFetchFunction}>
        Refresh
      </button>
    </div>
  );
}

DataStatusDialog.propTypes = {
  isCentered: PropTypes.bool,
  paragraph: PropTypes.string,
  strongText: PropTypes.string,
  status: PropTypes.string,
  reFetchFunction: PropTypes.func.isRequired,
};

DataStatusDialog.defaultProps = {
  isCentered: false,
  paragraph:
    'The project database is currently hosted on Render.com and is in a dormant state. Kindly allow a few moments for the database to initialize and become active. ',
  strongText:
    'We appreciate your patience. Once the database is active, you will be able to see the updated list of vehicles, log in, register, and more.',
  status: 'Loading...',
};
export default DataStatusDialog;
