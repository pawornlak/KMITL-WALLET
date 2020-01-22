import { Component } from '@angular/core';
import { NgForm, Form } from '@angular/forms';
import { from } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

import { FunctionService } from '../function.service';

@Component ({
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})

// tslint:disable-next-line: class-name
export class transferComponent {
  typeT = 'Transfer';

  constructor(private auth: AuthService , private func: FunctionService ) {}

  onTransfer(form: NgForm ) {
    if (form.invalid) {
      return;
    }
    // console.log(form.value.Account + '' + form.value.amount);
    this.func.transFer(
      this.typeT,
      form.value.Account,
      form.value.amount
    );
  }
  
}
