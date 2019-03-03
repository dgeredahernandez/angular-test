import { Component } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html'
})
export class UserCreateComponent {
  
  constructor(private userService: UserService,
    private router : Router) {}


  handleSubmit(user: User){

   //--Generar Id--

   //--------------

    this.userService.createUser(user)
        .subscribe(response => {
          this.router.navigate(['usuarios']);
        }); 
  }

}