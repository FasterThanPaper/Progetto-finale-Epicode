import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IApi } from '../interfaces/iapi';
import { IClient } from '../interfaces/iclient';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  urlAPI = environment.urlAPI + '/api/clienti?size=150&sort=id,ASC';
  urlAPI_ID = environment.urlAPI + '/api/clienti/';

  constructor(private http: HttpClient) {
  }

  getAllClienti() {
    return this.http.get<IApi>(this.urlAPI);
  }

  getCliente(id:string) {
    return this.http.get<IClient>(this.urlAPI_ID + id);
  }
}
