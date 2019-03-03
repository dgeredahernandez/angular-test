import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService){}

  ngOnInit(){
    this.userService.getUsers()
    .subscribe((users: User[]) => {      
      this.users = users;
    });     
  }

  handleDelete(user: User){
    const { id } = user;
     //console.log("Delete ID:", id);
     this.userService.deleteUser(id)
        .subscribe(response => {
            this.users = this.users.filter(user => 
              user.id !== user.id);
        });
  }
  
}
