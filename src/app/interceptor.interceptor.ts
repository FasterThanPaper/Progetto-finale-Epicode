import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  bearerAuth = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYzNjQ3MzAyNiwiZXhwIjoxNjM3MzM3MDI2fQ.BWkAwxjqjze53dbt7s03OXsMhEP4XufJWT76ZGvbO_6bOjRx5ScI7EO8X72-x5VdN1B-wBKd26xV8h6LtD1EFQ';
  tenantID = 'fe_0421';

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let myRequest: HttpRequest<any> = request;
    myRequest = request.clone(
      {
        headers: request.headers.set("Authorization", 'Bearer ' + this.bearerAuth)
          .set("X-TENANT-ID", this.tenantID)
      })

    return next.handle(myRequest);
  }
}
