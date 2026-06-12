import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Chef } from '../../core/models/chef.model';
import { ChefsService } from '../chefs.service';

@Component({
  selector: 'app-chef-edit',
  templateUrl: './chef-edit.component.html'
})
export class ChefEditComponent {
  chef$: Observable<Chef>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private chefsService: ChefsService
  ) {
    this.chef$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const id = params.get('id')!;
        return this.chefsService.getChefById(id);
      })
    );
  }

  modifierChef(chef: Chef | Omit<Chef, 'id'>): void {
    this.chefsService.editChef(chef as Chef).subscribe(() => {
      this.router.navigate(['/chefs']);
    });
  }

  annuler(): void {
    this.router.navigate(['/chefs']);
  }
}