import {Injectable} from '@angular/core';
import {Facility} from "../model/facility";
import {Observable} from "rxjs";
import {Owner} from "../model/owner";
import {Address} from "../model/address";
import {CreateFacilityRequest} from "../request/create-facility-request";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  private FACILITY_URL = '/facility';

  constructor(private http: HttpClient) {
  }

  createFacility(name: string, owner: Owner, address: Address): Observable<Facility> {
    const createFacilityRequest = new CreateFacilityRequest(name, address, owner);
    return this.http.post(this.FACILITY_URL, createFacilityRequest);
  }
}
