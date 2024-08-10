import { HttpClient, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Operateur } from '../models/operateur';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
abstract class OperateurServiceService {

  private apiUrl= 'http://localhost:8080/api/v1/auth/sign-up';

  constructor(private http: HttpHandler) { }

  // saveFormData(formData: any): Observable<any> {
  //   return this.http.post(this.apiUrl, formData);
  // }

  abstract handle(req: HttpRequest<any>): Observable<HttpEvent<any>>
}

