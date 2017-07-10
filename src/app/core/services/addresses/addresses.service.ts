import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'
import { Address } from './address';

@Injectable()
export class AddressesService {
  private _addresses$: BehaviorSubject<Address[]> = new BehaviorSubject([]);
  private dataStore: {
    addresses: Address[]
  }

  constructor(private http: Http) {
      this.dataStore = {
        addresses: []
      }
  }
  public get addresses$(){
    return this._addresses$.asObservable();
  }
  public getAddresses() {
        this.http.get('/api/addresses')
            .map(this.extractData)
            .catch(this.handleError).subscribe( addresses => {
                if (addresses) {
                  this.dataStore.addresses = addresses;
                }

                this._addresses$.next(Object.assign({}, this.dataStore).addresses);
            });

  }
  public createAddress(Address: Address) {
  }
  public deleteAddress(id: number) {
  }
  public updateAddress(address: Address) {
  }
  private extractData(res: Response) {
        const body = res.json();
        return body;
  }

  private handleError(error: Response | any) {
        return Observable.throw({
            message: error._body || 'Error',
            status: error.status
        });
   }

}
