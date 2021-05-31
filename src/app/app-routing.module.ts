import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'mortal-kombat',
    loadChildren: () =>
      import('./filmes/mortal-kombat/mortal-kombat.module').then(
        (m) => m.MortalKombatPageModule
      ),
  },
  {
    path: 'liga-justica',
    loadChildren: () =>
      import('./filmes/liga-justica/liga-justica.module').then(
        (m) => m.LigaJusticaPageModule
      ),
  },
  {
    path: 'dados-filme',
    loadChildren: () =>
      import('./dados-filme/dados-filme.module').then(
        (m) => m.DadosFilmePageModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
