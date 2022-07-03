import React from 'react';
import PropTypes from 'prop-types';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList, StyledTitle } from './UsersList.styles';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';

const UsersList = ({ users, deleteUser }) => {
  return (
    <>
      <ViewWrapper>
        <StyledTitle>Students List</StyledTitle>
        <StyledList>
          {users.map((userData) => (
            <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
          ))}
        </StyledList>
      </ViewWrapper>
    </>
  );
};

UsersList.propTypes = {
  deleteUser: PropTypes.func,
  users: PropTypes.array,
};

export default UsersList;
