import { createSelector } from 'reselect';
import { selectContacts } from './reducer';

export const selectMemoizedContacts = createSelector(
  [selectContacts],
  (contacts) => contacts
);