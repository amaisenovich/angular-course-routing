import { Component } from '@angular/core';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users = [
    new User("Max"),
    new User("Anna"),
    new User("Chris")
  ];
}
