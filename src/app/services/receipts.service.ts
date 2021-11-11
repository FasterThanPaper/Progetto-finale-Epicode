import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IApi } from '../interfaces/iapi';

@Injectable({
  providedIn: 'root'
})
export class ReceiptsService {

  urlAPI = environment.urlAPI + '/api/fatture/cliente/'

  constructor(private http: HttpClient) { }

  getRecs (id: number) {
    return this.http.get<IApi>(this.urlAPI + id + '?page=0&size=1000&sort=data,DESC');
  }
}

