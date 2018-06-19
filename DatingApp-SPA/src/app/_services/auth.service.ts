import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:5000/api/auth/';

constructor(private http: HttpClient) { }

login(model: any) {
  return this.http.post(this.baseUrl + 'login', model, this.requestOptions())
    .pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
        }
      })
    );
}

register(model: any) {
  return this.http.post(this.baseUrl + 'register', model, this.requestOptions());
}

private requestOptions() {
  const headers = new HttpHeaders();
  headers.set('Content-type', 'application/json');
  return {headers};
}

}
