import { createAction, props } from "@ngrx/store";
import { User } from "../../models/user.model";

export const loadUsers = createAction('[Auth] Load Users');
export const loadUsersSuccess = createAction('[Auth] Load Users Success', props<{ users: User[] }>());
export const loadUsersFailure = createAction('[Auth] Load Users Failure', props<{ error: any }>());