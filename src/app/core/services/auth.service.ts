import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly VALID_USER = 'admin';
  private readonly VALID_PASSWORD = 'password';

  constructor() {}

  login(username: string, password: string): Observable<boolean> {
    return new Observable(observer => {
      setTimeout(() => {
        if (username === this.VALID_USER && password === this.VALID_PASSWORD) {
          localStorage.setItem('isLoggedIn', 'true');
          observer.next(true);
        } else {
          observer.next(false);
        }

        observer.complete();
      }, 1000);
    });
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
}