import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../models/UserModel";
import {UserService} from "./services/user.service";



@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',


  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  msg: 'users';
  users: UserModel[];

  constructor(private userService: UserService) {

      this.userService.getUsers().subscribe(value => this.users = value)


  }
}
