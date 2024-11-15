import { User } from "../models/user.model";

export interface AuthState {
    users: User[];
    loading: boolean;
  }
  
  export const initialState: AuthState = {
    users: [],
    loading: false,
  };