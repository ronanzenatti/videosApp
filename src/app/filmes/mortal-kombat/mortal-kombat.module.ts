import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MortalKombatPageRoutingModule } from './mortal-kombat-routing.module';

import { MortalKombatPage } from './mortal-kombat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MortalKombatPageRoutingModule
  ],
  declarations: [MortalKombatPage]
})
export class MortalKombatPageModule {}
