import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Chef } from '../../core/models/chef.model';
import { ChefsService } from '../chefs.service';

@Component({
  selector: 'app-chef-list',
  templateUrl: './chef-list.component.html',
  styleUrls: ['./chef-list.component.css']
})
export class ChefListComponent {
  recherche = '';
  specialite = '';
  triExperience = '';

  specialities$ = this.chefsService.getSpecialities();

  chefs$: Observable<Chef[]> = this.chefsService.getChefs().pipe(
    map((chefs) => this.sortChefs(chefs))
  );

  stats$ = this.chefsService.getChefs().pipe(
    map((chefs) => {
      const nombre = chefs.length;
      const experienceMoyenne =
        nombre > 0
          ? chefs.reduce((total, chef) => total + Number(chef.experienceYears), 0) / nombre
          : 0;

      const chefPlusExperimente =
        chefs.length > 0
          ? chefs.reduce((max, chef) =>
              Number(chef.experienceYears) > Number(max.experienceYears) ? chef : max
            )
          : null;

      return {
        nombre,
        experienceMoyenne,
        chefPlusExperimente
      };
    })
  );

  constructor(private chefsService: ChefsService) {}

  changerTri(): void {
    this.chefs$ = this.chefsService.getChefs().pipe(
      map((chefs) => this.sortChefs(chefs))
    );
  }

  private sortChefs(chefs: Chef[]): Chef[] {
    const sorted = [...chefs];

    if (this.triExperience === 'asc') {
      return sorted.sort((a, b) => Number(a.experienceYears) - Number(b.experienceYears));
    }

    if (this.triExperience === 'desc') {
      return sorted.sort((a, b) => Number(b.experienceYears) - Number(a.experienceYears));
    }

    return sorted;
  }
}