import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { AccountRouting } from './account.routes';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AccountRouting,
    SharedModule.forRoot()
  ],
  declarations: [AccountComponent],
  bootstrap: [
      AccountComponent
  ]
})
export class AccountModule { }
