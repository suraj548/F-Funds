import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Donor } from './donor';
@Injectable({
  providedIn: 'root'
})
export class DonorsService {

  BASE_URL='http://localhost:3000/routers/donors'

  constructor(private http: HttpClient) { }
  
  getDonors():Observable<Donor[]>{
    
    return this.http.get<Donor[]>(this.BASE_URL)
  }
}
