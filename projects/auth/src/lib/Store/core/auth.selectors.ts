import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from '../auth.state';

const selectUserState = createFeatureSelector<AuthState>('user');

export const selectAllUsers = createSelector(selectUserState, (state) => state.users);
export const selectLoading = createSelector(selectUserState, (state) => state.loading);
