import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'my-matches',
    loadChildren: () => import('./pages/my-matches/my-matches.module').then( m => m.MyMatchesPageModule)
  },
  {
    path: 'winners',
    loadChildren: () => import('./pages/winners/winners.module').then( m => m.WinnersPageModule)
  },
  {
    path: 'groups',
    loadChildren: () => import('./pages/groups/groups.module').then( m => m.GroupsPageModule)
  },
  {
    path: 'feed',
    loadChildren: () => import('./pages/feed/feed.module').then( m => m.FeedPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'my-balance',
    loadChildren: () => import('./pages/my-balance/my-balance.module').then( m => m.MyBalancePageModule)
  },
  {
    path: 'earn',
    loadChildren: () => import('./pages/earn/earn.module').then( m => m.EarnPageModule)
  },
  {
    path: 'fine-people',
    loadChildren: () => import('./pages/fine-people/fine-people.module').then( m => m.FinePeoplePageModule)
  },
  {
    path: 'my-coupons',
    loadChildren: () => import('./pages/my-coupons/my-coupons.module').then( m => m.MyCouponsPageModule)
  },
  {
    path: 'how-to-play',
    loadChildren: () => import('./pages/how-to-play/how-to-play.module').then( m => m.HowToPlayPageModule)
  },
  {
    path: 'series-leaserboard',
    loadChildren: () => import('./pages/series-leaserboard/series-leaserboard.module').then( m => m.SeriesLeaserboardPageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./pages/setting/setting.module').then( m => m.SettingPageModule)
  },
  {
    path: 'more',
    loadChildren: () => import('./pages/more/more.module').then( m => m.MorePageModule)
  },
  {
    path: 'helpdesk',
    loadChildren: () => import('./pages/helpdesk/helpdesk.module').then( m => m.HelpdeskPageModule)
  },
  {
    path: 'all-team',
    loadChildren: () => import('./pages/dream11/all-team/all-team.module').then( m => m.AllTeamPageModule)
  },
  {
    path: 'veiw-team',
    loadChildren: () => import('./pages/dream11/veiw-team/veiw-team.module').then( m => m.VeiwTeamPageModule)
  },  {
    path: 'all-macths',
    loadChildren: () => import('./pages/dream11/all-macths/all-macths.module').then( m => m.AllMacthsPageModule)
  }





];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
