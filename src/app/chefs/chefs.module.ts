import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChefsRoutingModule } from './chefs-routing.module';
import { ChefListComponent } from './chef-list/chef-list.component';
import { ChefDetailComponent } from './chef-detail/chef-detail.component';
import { ChefFormComponent } from './chef-form/chef-form.component';
import { ChefAddComponent } from './chef-add/chef-add.component';
import { ChefEditComponent } from './chef-edit/chef-edit.component';
import { FiltreChefsPipe } from './pipes/filtre-chefs.pipe';
import { NiveauPipe } from './pipes/niveau.pipe';

@NgModule({
  declarations: [
    ChefListComponent,
    ChefDetailComponent,
    ChefFormComponent,
    ChefAddComponent,
    ChefEditComponent,
    FiltreChefsPipe,
    NiveauPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChefsRoutingModule
  ]
})
export class ChefsModule {}