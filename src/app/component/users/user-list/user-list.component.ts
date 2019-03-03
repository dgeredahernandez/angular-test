import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  @Input() users: User[];

  @Output() handleDelete: EventEmitter<User> = new EventEmitter<User>();

  constructor(private router : Router) {}

  actualizar(id: number){
    this.router.navigate(['usuarios', id]);
  }

  eliminar(user: User){
    this.handleDelete.emit(user);
  }

}