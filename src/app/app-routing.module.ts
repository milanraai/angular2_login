import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const RoutesArray: Routes = [
    {
        path: 'auth',
        loadChildren: 'app/auth/auth.module#AuthModule'
    },
    {
        path : 'user',
        loadChildren : 'app/users-module/users-module.module#UsersModule'
    },
    {
        path: '',
        redirectTo: '/auth/login',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(RoutesArray, { enableTracing: true })],
    exports: [RouterModule]
})


export class AppRoutingModule { } 