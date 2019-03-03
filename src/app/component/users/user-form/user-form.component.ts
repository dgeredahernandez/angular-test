import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html'
})
export class UserFormComponent implements OnInit {
  @Input() user: User;

  @Output() handleSubmit: EventEmitter<User> = new EventEmitter<User>();
  
  ngOnInit(){
      //console.log("user:", this.user);
  }

  onSubmit(f: any){
    if(f.valid){     
        //console.log("userEMIT:", this.user);
        this.handleSubmit.emit(this.user);        
        f.reset();
    }
  }
}