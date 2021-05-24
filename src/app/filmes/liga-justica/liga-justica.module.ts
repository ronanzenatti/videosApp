import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LigaJusticaPageRoutingModule } from './liga-justica-routing.module';

import { LigaJusticaPage } from './liga-justica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LigaJusticaPageRoutingModule
  ],
  declarations: [LigaJusticaPage]
})
export class LigaJusticaPageModule {}
