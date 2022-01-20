import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser } from '../models/user.model';
import { usersMock } from './user.mock';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUsers(): Observable<IUser[]> {
    return of(usersMock);
  }

  constructor() {}
}
