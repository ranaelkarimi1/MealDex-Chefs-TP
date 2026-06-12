import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Chef } from '../core/models/chef.model';

@Injectable({
  providedIn: 'root'
})
export class ChefsService {
  private base = 'https://6a2a6fabb687a7d5cbc3b8bd.mockapi.io';

  constructor(private http: HttpClient) {}

  getChefs(): Observable<Chef[]> {
    return this.http.get<Chef[]>(`${this.base}/chefs`);
  }

  getChefById(id: string): Observable<Chef> {
    return this.http.get<Chef>(`${this.base}/chefs/${id}`);
  }

  addChef(chef: Omit<Chef, 'id'>): Observable<Chef> {
    return this.http.post<Chef>(`${this.base}/chefs`, chef);
  }

  editChef(chef: Chef): Observable<Chef> {
    return this.http.put<Chef>(`${this.base}/chefs/${chef.id}`, chef);
  }

  deleteChef(id: string): Observable<Chef> {
    return this.http.delete<Chef>(`${this.base}/chefs/${id}`);
  }

  getSpecialities(): Observable<string[]> {
    return this.getChefs().pipe(
      map((chefs) => {
        const specialities = chefs.map((chef) => chef.speciality);
        return [...new Set(specialities)];
      })
    );
  }
}