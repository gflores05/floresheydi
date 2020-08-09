import { createSelector } from 'reselect';

const selectParams = props => props.match.params;

export const selectParamsId = createSelector(
    selectParams,
    (params) => params.id
);
