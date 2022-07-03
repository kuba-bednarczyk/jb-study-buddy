import React from 'react';
import { StyledTitle } from '../UsersList/UsersList.styles';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import propTypes from 'prop-types';

const Form = ({ handleAddUser, formValues, handleInputChange }) => {
  return (
    <>
      <ViewWrapper as="form" onSubmit={handleAddUser}>
        <StyledTitle>Add new student</StyledTitle>
        <FormField label={'Name'} id={'name'} name={'name'} value={formValues.name} onChange={handleInputChange} />
        <FormField label={'Attendance'} id={'attendance'} name={'attendance'} value={formValues.attendance} onChange={handleInputChange} />
        <FormField label={'Average'} id={'average'} name={'average'} value={formValues.average} onChange={handleInputChange} />
        <Button type="submit">Add</Button>
      </ViewWrapper>
    </>
  );
};

Form.propTypes = {
  handleAddUser: propTypes.func.isRequired,
  formValues: propTypes.string,
  handleInputChange: propTypes.func.isRequired,
};

export default Form;
