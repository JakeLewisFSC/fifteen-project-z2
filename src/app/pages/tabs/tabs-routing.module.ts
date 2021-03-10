import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';

const routes: Routes = [
    {
        path: '', redirectTo: '/tabs/statistics', pathMatch: 'full'
    },
    {
        path: '',
        component: TabsPage,
        children: [
            {
                path: 'statistics',
                loadChildren: () => import('../statistics/statistics.module').then(m => m.StatisticsPageModule)
            },
            {
                path: 'setting',
                loadChildren: () => import('../setting/setting.module').then(m => m.SettingPageModule)
            },
            {
                path: 'award',
                loadChildren: () => import('../award/award.module').then(m => m.AwardPageModule)
            },
            {
                path: 'plan',
                loadChildren: () => import('../plan/plan.module').then(m => m.PlanPageModule)
            },
            {
                path:'export',
                loadChildren: () => import('../export/change-password.module').then(m => m.ChangePasswordPageModule)
            },
            {
                path:'test-unity',
                loadChildren: () => import('../test-unity/change-password.module').then(m => m.ChangePasswordPageModule)
            },
            
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {
}
