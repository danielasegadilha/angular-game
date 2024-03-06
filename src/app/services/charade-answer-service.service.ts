import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharadeAnswerService {
  private apiUrl: String = ''
  
  constructor(private http: HttpClient) {
    this.apiUrl = environment.charadeAPI
   }

   getCharade(charadeQuestion: String):Observable<String> {
    this.http.get(`${this.apiUrl}`)
    console.log(charadeQuestion)
   }

}
