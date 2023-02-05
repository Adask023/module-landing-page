import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class httpService {
  constructor(private http: HttpClient) {}

  login(login: string, password: string) {
    return this.http.post('http://127.0.0.1:4400/api/login', {
      username: login,
      password: password,
    });
  }
  register(login: string, password: string, phone: string) {
    console.log(login);
    console.log(password);
    console.log(phone);
  }
}
