import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.routing';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';

import { AppComponent } from './app.component';
import { UsersComponent } from './component/users/users.component';
import { UserCreateComponent } from './component/users/user-create/user-create.component';
import { UserListComponent } from './component/users/user-list/user-list.component';
import { UserFormComponent } from './component/users/user-form/user-form.component';
import { UserUpdateComponent } from './component/users/user-update/user-update.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserCreateComponent,
    UserListComponent,
    UserFormComponent,
    UserUpdateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
