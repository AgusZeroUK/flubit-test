import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AddressesService } from '../core/services/addresses/addresses.service';
import { Address } from '../core/services/addresses/address';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  public addresses$: Observable<Address[]>

  constructor(private _addressesService: AddressesService) { }

  ngOnInit() {
    this.addresses$ = this._addressesService.addresses$;
    this._addressesService.getAddresses();
  }

}
