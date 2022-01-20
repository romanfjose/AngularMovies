import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(private userService: UserService) { }

  private subscription : Subscription | undefined;

  allUsers: IUser[] = [];

  ngOnInit(): void {
   this.subscription = this.userService.getUsers().subscribe(user => this.allUsers = user);

  }

  ngOnDestroy(): void {
      this.subscription?.unsubscribe();
  }
  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  sendForm(){

    let i =  this.allUsers.findIndex(email => email.email == this.loginForm.controls['email'].value);

    if (i != -1){

      if (this.allUsers[i].password == this.loginForm.controls['password'].value) alert('Login successful ');

      else alert("Password doesn't match");

    } else {

      alert("Error");

    }

  }



}
