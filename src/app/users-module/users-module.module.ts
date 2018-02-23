import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './userRouting.module';

import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserlistComponent } from './userlist/userlist.component';
import { DashboardComponent } from './dashboard/dashboard.component'


@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule

  ],
  declarations: [
    AddUserComponent,
    EditUserComponent,
    UserlistComponent,
    DashboardComponent
  ]
})
export class UsersModule { }
