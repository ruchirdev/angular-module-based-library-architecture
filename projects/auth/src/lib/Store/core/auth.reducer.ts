import { createReducer, on } from '@ngrx/store';
import { initialState } from '../auth.state';
import { loadUsers, loadUsersFailure, loadUsersSuccess } from './auth.actions';

export const authReducer = createReducer(
  initialState,
  on(loadUsers, (state) => ({ ...state, loading: true })),
  on(loadUsersSuccess, (state, { users }) => ({ ...state, users, loading: false })),
  on(loadUsersFailure, (state) => ({ ...state, loading: false }))
);