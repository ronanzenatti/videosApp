import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MortalKombatPage } from './mortal-kombat.page';

const routes: Routes = [
  {
    path: '',
    component: MortalKombatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MortalKombatPageRoutingModule {}
