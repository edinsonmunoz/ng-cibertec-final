import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { UserFormComponent } from './shared/forms/user-form/user-form.component';
import { FormsModule } from '@angular/forms';

//Importando para que funcione direccionamiento
import {RouterModule} from '@angular/router';

import { SortPipe } from './shared/pipes/sort.pipe';
import { ShortTextPipe } from './shared/pipes/short-text.pipe';
import { HoverDirective } from './shared/directive/hover.directive';
import { UsersService } from './shared/services/users.service';

@NgModule({
  declarations: [
    CreateUserComponent,
    EditUserComponent,
    ListUserComponent,
    UserFormComponent,
    HoverDirective//directiva de hover
  ],
  imports: [
    CommonModule,
    RouterModule, //importando para que funcione direccionamiento
    FormsModule
  ],
  exports: [
    ListUserComponent
  ],
  providers:[
    UsersService //Pipeline para ordenar
  ]
})
export class UsersModule { }
