import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChefListComponent } from './chef-list/chef-list.component';
import { ChefDetailComponent } from './chef-detail/chef-detail.component';
import { ChefAddComponent } from './chef-add/chef-add.component';
import { ChefEditComponent } from './chef-edit/chef-edit.component';
import { authGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  { path: 'chefs', component: ChefListComponent },
  { path: 'chef/add', component: ChefAddComponent, canActivate: [authGuard] },
  { path: 'chef/:id/edit', component: ChefEditComponent, canActivate: [authGuard] },
  { path: 'chef/:id', component: ChefDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChefsRoutingModule {}