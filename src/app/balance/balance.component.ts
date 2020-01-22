import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Profile } from './profile.model';
import { profileService } from '../profile.service';
import { AuthService } from '../auth/auth.service';


@Component({
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})

// tslint:disable-next-line: class-name
export class balanceComponent implements OnInit, OnDestroy {
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
        last: profileData.lastname,
        email: profileData.email };
    });
  }
  onLogout() {
    this.auth.logout();
  }
  ngOnDestroy() {}
}
