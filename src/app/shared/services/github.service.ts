import { User, Repo } from '../models/github-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private apiUrl = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  searchUsers(username: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/search/users?q=${username}`);
  }

  getUserRepos(login: string): Observable<Repo[]> {
    return this.http.get<Repo[]>(`${this.apiUrl}/users/${login}/repos`);
  }
}
