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
    const skillUrl = `http://localhost:4000/api/skills/${value}`;
    const paragraphUrl = `http://localhost:4000/api/paragraph/${value}`;
    this.http.get(skillUrl).subscribe(response => {
      this.skills = response;
    });

    this.http.get(paragraphUrl).subscribe(response => {
      this.paragraphs = response;
    });

  }
}
