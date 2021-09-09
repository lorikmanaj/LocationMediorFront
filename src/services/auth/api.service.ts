import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Expose-Headers': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {
  }

  post<HttpResponseModel>(path: string, data: any): Observable<any> {
    const url = `${environment.apiUrl}/${path}`;
    return this.http.post<HttpResponseModel>(url, data, httpOptions);
  }


  get<HttpResponseModel>(path: string): Observable<any> {
    const url = `${environment.apiUrl}/${path}`;
    return this.http.get<HttpResponseModel>(url, httpOptions);
  }

  put<HttpResponseModel>(path: string, data: any): Observable<any> {
    const url = `${environment.apiUrl}/${path}`;
    return this.http.put<HttpResponseModel>(url, data, httpOptions);
  }

  delete<HttpResponseModel>(path: string): Observable<any> {
    const url = `${environment.apiUrl}/${path}`;
    return this.http.delete<HttpResponseModel>(url, httpOptions);
  }
}
