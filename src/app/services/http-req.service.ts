import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class httpService {
  constructor(private http: HttpClient) {}

  login(login: string, password: string) {
    return this.http.post('/api/login', {
      username: login,
      password: password,
    }, { withCredentials: true });
  }

  register(login: string, password: string, phone: string) {
    console.log(login);
    console.log(password);
    console.log(phone);
  }

  addPost(title: string, content: string) {
    return this.http.post('/api/posts/create', {
      title,
      content,
    }, { withCredentials: true });
  }
}
