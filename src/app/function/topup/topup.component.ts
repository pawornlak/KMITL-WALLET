import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { FunctionService } from '../function.service';
import { NgForm } from '@angular/forms';

@Component ({
  templateUrl: './topup.component.html',
  styleUrls: ['./topup.component.css']
})

// tslint:disable-next-line: class-name
export class topupComponent {
  typeT = 'Topup';

  constructor(private auth: AuthService , private func: FunctionService ) {}

  onTopup(form: NgForm ) {
    if (form.invalid) {
      return;
    }
    // console.log(form.value.Account + '' + form.value.amount);
    this.func.topup(
      this.typeT,
      form.value.code
    );
  }
}
