import { Component } from '@angular/core';
import { UserI } from '../../../../interfaces/user.interface';
import { lusers } from '../../../../datasource/user.datasource';
import { ProfileI } from '../../../../interfaces/profile.interface';
import { lprofiles } from '../../../../datasource/profile.datasource';
import { ProfileUserI } from '../../../../interfaces/profile-user.interface';
import { lprofileuser } from '../../../../datasource/profile-user.datasource';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: ``
})
export class ProfileComponent {

  userid: any;
  username: string = '';
  email: string = '';

  users: UserI[] = lusers;
  profiles: ProfileI[] = lprofiles;
  profileUser: ProfileUserI[] = lprofileuser;
}
