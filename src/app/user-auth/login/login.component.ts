import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  
  constructor(private router: Router){}
  ngOnInit(): void {}

  username: any;
  password: any;
  errorMessage: any = '';

  handleNavigate(){
    this.router.navigateByUrl("/users")
  }

  getData(data:any){
    const logData = data;
    this.username=logData.username
    this.password=logData.password

    if(this.username === 'admin' && this.password === '1234'){
      this.handleNavigate();
      localStorage.setItem("userType", "Admin");

    }else{
      this.errorMessage= 'Invalid Username or password, Please provide valid information.'
    }
    console.log(
      'username' , this.username,
      'password', this.password,
      '!!!Error' , this.errorMessage
    )
  }

  
}
