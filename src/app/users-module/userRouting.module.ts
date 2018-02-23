import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserlistComponent } from './userlist/userlist.component';
import { DashboardComponent } from './dashboard/dashboard.component'

const UserRoutesArray: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    { 
        path: 'add',
        component: AddUserComponent
    },
    {
        path: 'edit/:id',
        component: EditUserComponent
    },
    {
        path: 'user-list',
        component: UserlistComponent
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
]

@NgModule({
    imports: [RouterModule.forChild(UserRoutesArray)],
    exports: [RouterModule]
})

export class UserRoutingModule { }
