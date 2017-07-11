import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AddressesService } from '../core/services/addresses/addresses.service';
import { Address } from '../core/services/addresses/address';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  public addresses$: Observable<Address[]>
  public submitted: boolean = false;
  public addressSelectedToEdit: Address;
  public shouldDisplayEdit: boolean = false;
  public shouldDisplayNew: boolean = false;
  public form: FormGroup;
  public titles: any;




  constructor(private _addressesService: AddressesService) { }

  ngOnInit() {
    this.titles = ['Mrs', 'Miss'];
    this.submitted = false;
    this.addresses$ = this._addressesService.addresses$;
    this.addressSelectedToEdit = null;
    this._addressesService.getAddresses();
    this.clearForm();
  }

  onCreate() {
    this.clearForm();
    this.shouldDisplayNew = true;
  }

  onEdit(id: number) {
    this.clearForm();
    this.addressSelectedToEdit = this._addressesService.getAddress(id);
    if (this.addressSelectedToEdit) {
      this.form = new FormGroup({
              // tslint:disable-next-line:max-line-length
              postcode: new FormControl(this.addressSelectedToEdit.postcode, [Validators.required, Validators.pattern('^(([gG][iI][rR] {0,}0[aA]{2})|((([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y]?[0-9][0-9]?)|(([a-pr-uwyzA-PR-UWYZ][0-9][a-hjkstuwA-HJKSTUW])|([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y][0-9][abehmnprv-yABEHMNPRV-Y]))) {0,}[0-9][abd-hjlnp-uw-zABD-HJLNP-UW-Z]{2}))$')]),
              name: new FormControl(this.addressSelectedToEdit.name, Validators.required),
              line1: new FormControl(this.addressSelectedToEdit.line1, Validators.required),
              title: new FormControl(this.addressSelectedToEdit.title, Validators.required),
              line2: new FormControl(this.addressSelectedToEdit.line2, ),
              county: new FormControl(this.addressSelectedToEdit.county, ),
              town: new FormControl(this.addressSelectedToEdit.town, Validators.required),
              phone: new FormControl(this.addressSelectedToEdit.phone, Validators.required),
      });
      this.shouldDisplayEdit = true;
    }

  }

  onNewSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      const addressAux: Address = {
            postcode: this.form.get('postcode').value,
            name: this.form.get('name').value,
            line1: this.form.get('line1').value,
            title: this.form.get('title').value,
            line2: this.form.get('line2').value || '',
            county: this.form.get('county').value || '',
            town: this.form.get('town').value,
            phone: this.form.get('phone').value
      };
      this._addressesService.createAddress(addressAux);
      this.submitted = false;
      this.shouldDisplayNew = false;
      this.clearForm();
    }
  }

  onEditSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      const addressAux: Address = {
            postcode: this.form.get('postcode').value,
            name: this.form.get('name').value,
            line1: this.form.get('line1').value,
            title: this.form.get('title').value,
            line2: this.form.get('line2').value || '',
            county: this.form.get('county').value || '',
            town: this.form.get('town').value,
            phone: this.form.get('phone').value
      };
      this._addressesService.updateAddress(this.addressSelectedToEdit.id, addressAux);
      this.addressSelectedToEdit = null;
      this.submitted = false;
      this.shouldDisplayEdit = false;
      this.clearForm();
    }
  }

  onRemove(id: number) {
    this._addressesService.deleteAddress(id);
  }

  clearForm() {
    this.form = new FormGroup({
            // tslint:disable-next-line:max-line-length
            postcode: new FormControl('', [Validators.required, Validators.pattern('^(([gG][iI][rR] {0,}0[aA]{2})|((([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y]?[0-9][0-9]?)|(([a-pr-uwyzA-PR-UWYZ][0-9][a-hjkstuwA-HJKSTUW])|([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y][0-9][abehmnprv-yABEHMNPRV-Y]))) {0,}[0-9][abd-hjlnp-uw-zABD-HJLNP-UW-Z]{2}))$')]),
            name: new FormControl('', Validators.required),
            line1: new FormControl('', Validators.required),
            title: new FormControl('', Validators.required),
            line2: new FormControl('', ),
            county: new FormControl('', ),
            town: new FormControl('', Validators.required),
            phone: new FormControl('', Validators.required),
    });
  }

}
