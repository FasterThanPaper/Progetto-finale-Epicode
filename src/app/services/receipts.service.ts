import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReceiptsService {

  urlAPI = environment.urlAPI + '/api/fatture?page=0&size=20&sort=id,ASC';

  constructor(private http: HttpClient) { }

  getAllFatture() {
    return this.http.get(this.urlAPI);
  }
}
