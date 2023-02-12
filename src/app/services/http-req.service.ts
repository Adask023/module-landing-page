import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class httpService {
  constructor(private http: HttpClient) {}

  login(login: string, password: string) {
    return this.http.post(
      '/api/login',
      {
        username: login,
        password: password,
      },
      { withCredentials: true }
    );
  }

  register(
    username: string,
    password: string,
    telephone: string,
    birth_year: string,
    place: string,
    is_admin: boolean = false
  ) {
    return this.http.post('/api/users/create', {
      username,
      password,
      is_admin,
      telephone,
      birth_year,
      place,
    });
  }

  addPost(title: string, content: string) {
    return this.http.post(
      '/api/posts/create',
      {
        title,
        content,
      },
      { withCredentials: true }
    );
  }

  getAllPosts() {
    return this.http.get('/api/posts/all');
  }
}
