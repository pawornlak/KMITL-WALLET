import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, from } from 'rxjs';


import { AuthService } from '../auth/auth.service';

import { Profile } from '../balance/profile.model';
import { profileService } from '../profile.service';

@Component ({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

// tslint:disable-next-line: class-name
export class profileComponent implements OnInit, OnDestroy {
  private balanceSub: Subscription;
  profile: Profile;
  getAcc: string;
  // tslint:disable-next-line: no-shadowed-variable
  constructor(public profileService: profileService, private auth: AuthService) {}
  ngOnInit() {
    this.getAcc = localStorage.getItem('account');
    console.log(this.getAcc);
    this.profileService.getProfile(this.getAcc).subscribe(profileData => {
      this.profile = {
        account: profileData.account,
        username: profileData.username,
        balance: profileData.balance,
        first: profileData.firstname,
        last: profileData.lastname ,
        email: profileData.email};
    });
  }
  ngOnDestroy() {}
}
