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

  bearerAuth = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYzNjY0NTU2NCwiZXhwIjoxNjM3NTA5NTY0fQ.MQWCE2q_4RiQUGXTXvIKJOnGtCSJImS6O9G2gzLAuH_Z7qlWBJNXnbB7hyFk0fOnYNfHmpjE6a1m50XMuYDCug';
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
