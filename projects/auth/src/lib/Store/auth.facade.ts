import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { loadUsers } from './core/auth.actions';
import { selectAllUsers, selectLoading } from './core/auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthFacade {
  users$: Observable<User[]> = this.store.select(selectAllUsers);
  loading$: Observable<boolean> = this.store.select(selectLoading);

  constructor(private store: Store) {}

  loadUsers() {
    this.store.dispatch(loadUsers());
  }
}
