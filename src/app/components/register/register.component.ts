import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  flag: boolean = false;
  user: IUser = {
    name: '',
    lastName: '',
    email: '',
    password: '',
  };

  constructor(private userService: UserService) {}

  private subscription: Subscription | undefined;

  allUsers: IUser[] = [];

  ngOnInit(): void {
    this.subscription = this.userService.getUsers().subscribe((user) => {
      this.allUsers = user;
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  registerUser() {
    if (localStorage['localUser'] != null) {
      this.allUsers = JSON.parse(localStorage['localUser']);
    }

    this.user.name = this.userForm.controls['name'].value;
    this.user.lastName = this.userForm.controls['lastName'].value;
    this.user.email = this.userForm.controls['email'].value;
    this.user.password = this.userForm.controls['password'].value;
    this.allUsers.forEach((emailCheck) => {
      if (emailCheck.email === this.user.email) this.flag = true;
    });

    if (this.flag) {
      alert('This user is already registered');
    } else {
      this.allUsers.push(this.user);
      localStorage['localUser'] = JSON.stringify(this.allUsers);
      this.userForm.controls['name'].reset();
      this.userForm.controls['lastName'].reset();
      this.userForm.controls['email'].reset();
      this.userForm.controls['password'].reset();
    }
  }
}
