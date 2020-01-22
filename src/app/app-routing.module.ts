import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { transferComponent } from './function/transfer/transfer.component';
import { topupComponent } from './function/topup/topup.component';
import { balanceComponent } from './balance/balance.component';
import { profileComponent } from './profile/profile.component';
// import { TableBasicExample } from './function/transaction/transaction.component';
import { transactionComponent } from './function/transaction/transaction.component';

const routes: Routes = [
  // { path: 'auth', loadChildren: './auth/auth.module#AuthModule' , canActivate: [!AuthGuard]},
  { path: '', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'transfer', component: transferComponent, canActivate: [AuthGuard]},
  { path: 'topup', component: topupComponent, canActivate: [AuthGuard]},
  { path: 'balance', component: balanceComponent, canActivate: [AuthGuard]},
  { path: 'profile', component: profileComponent, canActivate: [AuthGuard]},
  { path: 'transaction', component: transactionComponent, canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
