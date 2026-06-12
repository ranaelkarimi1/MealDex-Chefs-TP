import { Pipe, PipeTransform } from '@angular/core';
import { Chef } from '../../core/models/chef.model';

@Pipe({
  name: 'filtreChefs'
})
export class FiltreChefsPipe implements PipeTransform {
  transform(chefs: Chef[] | null, recherche: string = '', specialite: string = ''): Chef[] {
    if (!chefs) {
      return [];
    }

    let result = chefs;

    if (recherche) {
      result = result.filter((chef) =>
        chef.fullName.toLowerCase().includes(recherche.toLowerCase())
      );
    }

    if (specialite) {
      result = result.filter((chef) => chef.speciality === specialite);
    }

    return result;
  }
}
