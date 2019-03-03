import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html'
})
export class UserUpdateComponent implements OnInit {
  user: User;

  constructor(private userService: UserService,
    private router : Router, private route : ActivatedRoute) {}

    ngOnInit(){
        const id = +this.route.snapshot.paramMap.get('id');  
        this.userService.getUserById(id).subscribe((user: User) => {
          this.user = user;
       });
    }

  handleSubmit(user: User){
    this.userService.updateUser(user.id, user)
        .subscribe(response => {
          this.router.navigate(['usuarios']);
        }); 
  }

}