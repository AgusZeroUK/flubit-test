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

  public getAddress(id: number) {
     return this.dataStore.addresses.find(address => address.id === id);
  }
  public createAddress(address: Address) {
            const body = address;
            this.http.post('/api/addresses', body)
            .map(this.extractData)
            .catch(this.handleError).subscribe( add => {
                  this.dataStore.addresses.push();
                  this.getAddresses();
            });
  }
  public deleteAddress(id: number) {
          this.http.delete(`/api/addresses/${id}`)
            .map(this.extractData)
            .catch(this.handleError).subscribe( address => {
                  this.getAddresses();
            });
  }
  public updateAddress(id: number, address: Address) {
        const body = address;
        this.http.put(`/api/addresses/${id}`, body)
            .map(this.extractData)
            .catch(this.handleError).subscribe( add => {
                  this.getAddresses();
            });
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
