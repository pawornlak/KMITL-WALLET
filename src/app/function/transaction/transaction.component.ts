import { OnInit, OnDestroy, Component } from '@angular/core';
import { Transaction } from 'src/app/transaction.model';
import { Subscription } from 'rxjs';
import { profileService } from 'src/app/profile.service';
import { map } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material';

@Component({
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
// tslint:disable-next-line: class-name
export class transactionComponent implements OnInit, OnDestroy {
  transac: Transaction[] = [];
  getAcc: string;
  panelOpenState = false;
  private postsSub: Subscription;
  displayedColumns: string[] = ['typeT', 'amount', 'accountts', 'Account', 'datetime'];
  dataSource = this.transac;
  listData: MatTableDataSource<any>;

  constructor(public profile: profileService) {}
  ngOnInit() {
    this.getAcc = localStorage.getItem('account');
    this.profile.getTransaction(this.getAcc);
    console.log('acc');
    this.postsSub = this.profile.getPostUpdateListener()
    .subscribe((transac: Transaction[]) => {
      this.transac = transac;
      this.dataSource = this.transac;

    });
  }


//   // tslint:disable-next-line: member-ordering

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

}


