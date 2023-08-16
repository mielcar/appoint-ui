import {Injectable} from '@angular/core';
import {Facility} from "../model/facility";
import {Observable} from "rxjs";
import {CreateFacilityRequest} from "../request/create-facility-request";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  private FACILITY_URL = '/facility';

  constructor(private http: HttpClient) {
  }

  createFacility(createFacilityRequest: CreateFacilityRequest): Observable<Facility> {
    return this.http.post(this.FACILITY_URL, createFacilityRequest);
  }
}
