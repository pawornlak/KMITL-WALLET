import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthInterceptor } from './auth/auth-interceptor';
//import { ErrorInterceptor } from './error-interceptor';
//import { ErrorComponent } from './error/error.component';
import { AngularMaterialModule } from './angular-material.module';
import { transferComponent } from './function/transfer/transfer.component';

import { topupComponent } from './function/topup/topup.component';
import { FormsModule } from '@angular/forms';
import { balanceComponent } from './balance/balance.component';
import { profileComponent } from './profile/profile.component';
import { transactionComponent } from './function/transaction/transaction.component';
import { MatTableModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';
// import { TableBasicExample } from './function/transaction/transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    //ErrorComponent,
    transferComponent,

    topupComponent,
    balanceComponent,
    profileComponent,
    transferComponent,
    transactionComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
    FormsModule,
    MatTableModule,
    MatCardModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    //{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  //entryComponents: [ErrorComponent]
})
export class AppModule {}
