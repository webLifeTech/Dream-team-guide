import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'all-team',
    loadChildren: () => import('./pages/all-team/all-team.module').then(m => m.AllTeamPageModule)
  },
  {
    path: 'veiw-team',
    loadChildren: () => import('./pages/veiw-team/veiw-team.module').then(m => m.VeiwTeamPageModule)
  },
  {
    path: 'all-macths',
    loadChildren: () => import('./pages/all-macths/all-macths.module').then(m => m.AllMacthsPageModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
