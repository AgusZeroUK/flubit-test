import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { AccountRouting } from './account.routes';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    AccountRouting,
    SharedModule.forRoot(),
    CoreModule.forRoot(),
  ],
  declarations: [AccountComponent],
  bootstrap: [
      AccountComponent
  ]
})
export class AccountModule { }
