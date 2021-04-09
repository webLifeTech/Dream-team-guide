import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../pages/home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'mymatches',
        loadChildren: () => import('../pages/my-matches/my-matches.module').then( m => m.MyMatchesPageModule)
      },
      {
        path: 'winners',
        loadChildren: () => import('../pages/winners/winners.module').then( m => m.WinnersPageModule)
      },
      {
        path: 'groups',
        loadChildren: () => import('../pages/groups/groups.module').then( m => m.GroupsPageModule)
      },
      {
        path: 'feed',
        loadChildren: () => import('../pages/feed/feed.module').then( m => m.FeedPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}