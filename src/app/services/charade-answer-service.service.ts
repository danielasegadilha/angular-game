import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharadeAnswerService {
  private apiUrl: String = ''
  private charadeAnswer: String = ''
  
  constructor(private http: HttpClient) {
    this.apiUrl = environment.charadeAPI
   }

  //  getAnswer():Observable<String> {
  //   this.charadeAnswer = this.http.get(`${this.apiUrl}`)
  //   return this.charadeAnswer
  //  }

}
