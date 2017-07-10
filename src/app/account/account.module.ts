import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AccountComponent } from './account.component';
import { AccountRouting } from './account.routes';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    AccountRouting,
    FormsModule,
    ReactiveFormsModule,
    SharedModule.forRoot()
  ],
  declarations: [AccountComponent],
  bootstrap: [
      AccountComponent
  ],
  schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
  ]
})
export class AccountModule { }
