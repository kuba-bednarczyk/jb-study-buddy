import React from 'react';
import PropTypes from 'prop-types';

const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => (
  <div>
    <li>
      <div>{average}</div>
      <div>
        <p>{name}</p>
        <p>{attendance}</p>
      </div>
      <button>X</button>
    </li>
  </div>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
