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
  urlAPI_Type = environment.urlAPI + '/api/clienti/tipicliente';

  constructor(private http: HttpClient) {
  }

  getAllClienti() {
    return this.http.get<IApi>(this.urlAPI);
  }

  getCliente(id:string) {
    return this.http.get<IClient>(this.urlAPI_ID + id);
  }

  addCliente(item:IClient) {
    return this.http.post(this.urlAPI_ID, item);
  }

  getTipoCliente () {
    return this.http.get<string[]>(this.urlAPI_Type)
  }

  deleteClient(item: IClient) {
    return this.http.delete<IClient>(this.urlAPI_ID + item.id)
  }

  updateClient(item:IClient) {
    return this.http.put(this.urlAPI_ID+item.id, item);
  }
}
