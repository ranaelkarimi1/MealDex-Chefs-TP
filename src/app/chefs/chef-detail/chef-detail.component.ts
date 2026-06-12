import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Chef } from '../../core/models/chef.model';
import { ChefsService } from '../chefs.service';

@Component({
  selector: 'app-chef-detail',
  templateUrl: './chef-detail.component.html',
  styleUrls: ['./chef-detail.component.css']
})
export class ChefDetailComponent {
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

  supprimerChef(id: string): void {
    const confirmation = confirm('Voulez-vous vraiment supprimer ce chef ?');

    if (confirmation) {
      this.chefsService.deleteChef(id).subscribe(() => {
        this.router.navigate(['/chefs']);
      });
    }
  }
}