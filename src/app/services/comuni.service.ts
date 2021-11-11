import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IComuni } from '../interfaces/icomuni';

@Injectable({
  providedIn: 'root'
})
export class ComuniService {

  urlAPI = environment.urlAPI + '/api/comuni?page=0&size=20&sort=id,ASC';

  constructor(private http: HttpClient) { }

  getAllComuni() {
    return this.http.get<IComuni>(this.urlAPI);
  }
}
