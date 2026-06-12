import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Chef } from '../../core/models/chef.model';
import { ChefsService } from '../chefs.service';

@Component({
  selector: 'app-chef-add',
  templateUrl: './chef-add.component.html'
})
export class ChefAddComponent {
  constructor(
    private chefsService: ChefsService,
    private router: Router
  ) {}

  ajouterChef(chef: Chef | Omit<Chef, 'id'>): void {
    this.chefsService.addChef(chef as Omit<Chef, 'id'>).subscribe(() => {
      this.router.navigate(['/chefs']);
    });
  }

  annuler(): void {
    this.router.navigate(['/chefs']);
  }
}