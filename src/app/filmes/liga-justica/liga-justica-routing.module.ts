import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LigaJusticaPage } from './liga-justica.page';

const routes: Routes = [
  {
    path: '',
    component: LigaJusticaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LigaJusticaPageRoutingModule {}
