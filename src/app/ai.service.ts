import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AiService {

  constructor(private http: HttpClient) { }
  skills: any;
  paragraphs: any;



  sendRequest(value: string) {
    const skillUrl = `https://airesponseparser-production.up.railway.app/api/skills/${value}`;
    const paragraphUrl = `http:////airesponseparser-production.up.railway.app/api/paragraph/${value}`;


    this.http.get(paragraphUrl).subscribe(response => {
      this.paragraphs = response;
    });
    this.http.get(skillUrl).subscribe(response => {
      this.skills = response;
    });



  }
}
