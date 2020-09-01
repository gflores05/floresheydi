import { createSelector } from 'reselect';

const selectContactResult = state => state.contact;

export const selectContactMessage = createSelector(
    selectContactResult,
    (result) => result.message
);

export const selectContactIsSuccess = createSelector(
    selectContactResult,
    (result) => result.success
);
