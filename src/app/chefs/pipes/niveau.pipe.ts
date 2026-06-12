import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'niveau'
})
export class NiveauPipe implements PipeTransform {
  transform(experienceYears: number): string {
    if (experienceYears < 3) {
      return 'Débutant';
    }

    if (experienceYears <= 10) {
      return 'Confirmé';
    }

    return 'Expert';
  }
}
