import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  readonly url = 'http://localhost:8080/songs';
  constructor(private http: HttpClient) { }

   getSongs(): Observable<any> {
    return this.http.get(this.url);
  }
}
