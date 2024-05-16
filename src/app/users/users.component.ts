import { Component } from '@angular/core';
import { UsersDataService } from '../services/users-data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users:any
  constructor(private userData: UsersDataService){
    userData.users().subscribe((data)=>{
      this.users=data
      console.log(this.users);
    })
  }

}
