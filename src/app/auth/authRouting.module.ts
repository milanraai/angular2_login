import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const AuthRoutesArray: Routes = [
    {
        path: 'login', 
        component: LoginComponent
    },
    {
        path : 'register', 
        component : RegisterComponent
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(AuthRoutesArray)],
    exports: [RouterModule]
})


export class AuthRoutingModule { } 