import { Component } from '@angular/core';
import { UserI } from '../../../../interfaces/user.interface';
import { lusers } from '../../../../datasource/user.datasource';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: ``
})
export class UsersComponent {

  systemUser: UserI[] = lusers;

}
