import { createSelector } from 'reselect';

const selectFirstName = (state) => state.firstName;
const selectLastName = (state) => state.lastName;
const selectIsAuthenticated = (state) => state.isAuthenticated;

export const makeSelectFirstName = createSelector(
  [selectFirstName],
  (firstName) => firstName
);
export const makeSelectLastName = createSelector(
  [selectLastName],
  (lastName) => lastName
);

export const makeSelectIsAuthenticated = createSelector(
    [selectIsAuthenticated],
  (isAuthenticated) => isAuthenticated
);



