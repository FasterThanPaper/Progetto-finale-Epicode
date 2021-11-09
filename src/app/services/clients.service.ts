import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IApi } from '../interfaces/iapi';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  urlAPI = environment.urlAPI + '/api/clienti?size=100&sort=id,ASC';

  constructor(private http: HttpClient) {
  }

  getAllClienti() {
    return this.http.get<IApi>(this.urlAPI);
  }
}
