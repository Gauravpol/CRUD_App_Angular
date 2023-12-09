import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'http://18.134.207.234:8080/lbpassivefire/admin/trainee/';

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Headers':
    'Content-Type, Accept, X-Requested-With, remember-me',
    'X-XSS-Protection': '1;mode-block',
  });

  getEmployee() {
    return this.http
      .get<any>(this.baseUrl + 'getAllEmployee', {
        headers: this.headers,}).pipe(map((res: any) => {
          return res;
        }));
  }

  getData(employeeId: any) {
    return this.http.get<any>(this.baseUrl+'getEmployee/' +employeeId,
        {headers: this.headers})
      .pipe(map((res: any) => {
          return res;
        }));
  }

  postEmployee(data: any) {
    return this.http.post<any>(this.baseUrl+'register',data,
        {headers: this.headers})
      .pipe(
        map((res: any) => {
          return res;
        }));
  }

  deleteEmployee(employeeId: any) {
    return this.http.delete<any>(this.baseUrl + 'deleteEmployee/' + employeeId,
        {headers: this.headers})
      .pipe(map((res: any) => {
          return res;
        }));
  }

  updateEmployee(employeeId: any, data: any) {
    return this.http.put<any>(this.baseUrl +'updateEmployee/' +employeeId,data,
        {headers: this.headers})
      .pipe(map((res: any) => {
          return res;
        }));
  }
}
