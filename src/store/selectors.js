import { createSelector } from 'reselect';


const selectFirstName = (state) => state.firstName;
const selectLastName = (state) => state.lastName;


export const makeSelectFirstName = createSelector(
  [selectFirstName],
  (firstName) => firstName
);
export const makeSelectLastName = createSelector(
  [selectLastName],
  (lastName) => lastName
);
