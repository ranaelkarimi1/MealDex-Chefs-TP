import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Chef } from '../../core/models/chef.model';
import { ChefsService } from '../chefs.service';
import { experienceValidator } from '../validators/experience.validator';

@Component({
  selector: 'app-chef-form',
  templateUrl: './chef-form.component.html',
  styleUrls: ['./chef-form.component.css']
})
export class ChefFormComponent implements OnChanges {
  @Input() chef: Chef | null = null;
  @Output() saved = new EventEmitter<Chef | Omit<Chef, 'id'>>();
  @Output() canceled = new EventEmitter<void>();

  specialities$: Observable<string[]> = this.chefsService.getSpecialities();

  chefForm = this.fb.group({
    fullName: ['', Validators.required],
    photo: ['', Validators.required],
    speciality: ['', Validators.required],
    experienceYears: [0, [Validators.required, experienceValidator]],
    bio: [''],
    signatureDish: ['']
  });

  constructor(
    private fb: FormBuilder,
    private chefsService: ChefsService
  ) {}

  ngOnChanges(): void {
    if (this.chef) {
      this.chefForm.patchValue({
        fullName: this.chef.fullName,
        photo: this.chef.photo,
        speciality: this.chef.speciality,
        experienceYears: this.chef.experienceYears,
        bio: this.chef.bio || '',
        signatureDish: this.chef.signatureDish || ''
      });
    }
  }

  enregistrer(): void {
    if (this.chefForm.invalid) {
      this.chefForm.markAllAsTouched();
      return;
    }

    const value = this.chefForm.value;

    const chefData = {
      fullName: value.fullName || '',
      photo: value.photo || '',
      speciality: value.speciality || '',
      experienceYears: Number(value.experienceYears),
      bio: value.bio || '',
      signatureDish: value.signatureDish || ''
    };

    if (this.chef) {
      this.saved.emit({
        id: this.chef.id,
        ...chefData
      });
    } else {
      this.saved.emit(chefData);
    }
  }

  annuler(): void {
    this.canceled.emit();
  }
}