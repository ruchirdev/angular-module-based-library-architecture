import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {
//   loadUsers$ = createEffect(() =>
//     // this.actions$.pipe(
//     //   ofType(loadUsers),
//     //   mergeMap(() =>
        
//     //   )
//     // ) 
    
//   );

  constructor(private actions$: Actions) {}
}
