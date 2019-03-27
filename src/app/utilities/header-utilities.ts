import { HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from '../../environments/environment';

@Injectable()
export class GetHeaders{

  constructor() {
  }

  getHeaders() {
    let headers = new HttpHeaders({
      "Content-Type": 'application/json',
      "app_key": environment.ssAPI.common.app_key,
      "Authorization": environment.ssAPI.common.authorization
    })
    return headers
  }

  getPaymentMethodsHeaders() {
    let headers = new HttpHeaders({
      "Content-Type": 'application/json',
      "app_key": environment.ssAPI.common.app_key,
      "Authorization": environment.ssAPI.common.authorization
    })
    return headers
  }
}
