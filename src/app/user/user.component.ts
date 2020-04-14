import {Component, Input, OnInit} from '@angular/core';
import { UserModel } from 'src/models/UserModel';
/*import {HttpClient} from "@angular/common/http";
import {UserModel} from "../../models/UserModel";
import {Observable} from "rxjs";*/

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input()
     user: UserModel;

  constructor() {



  }

 /* getUsers() : Observable<UserModel[]> {
    return this.http.get<UserModel[]>('https://jsonplaceholder.typicode.com/users');

    }*/
  }

