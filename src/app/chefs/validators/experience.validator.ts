import { AbstractControl, ValidationErrors } from '@angular/forms';

export function experienceValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;

  if (value === null || value === '') {
    return null;
  }

  if (isNaN(value) || value < 0 || value > 50) {
    return { experienceInvalide: true };
  }

  return null;
}
