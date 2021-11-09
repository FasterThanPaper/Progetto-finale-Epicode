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

  bearerAuth = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYzNjM3OTc0NCwiZXhwIjoxNjM3MjQzNzQ0fQ.hQOe2fONRnE0OqabbgNFwZL5tFn3TMLydGh6P1RY88bpPYxQ983UO_0FRxx_R_6GLcucMglmeD-3iN-2rUSf_w';
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
