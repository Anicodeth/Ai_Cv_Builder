import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AiService {

  constructor(
    private http: HttpClient,
    ) { }
  skills: any;
  paragraphs: any;



  sendRequest(value: string) {
   const skillUrl = `https://ai-response-parser-git-main-anicodeth.vercel.app/api/skills/${value}`;
   const paragraphUrl = `https://ai-response-parser-git-main-anicodeth.vercel.app/api/paragraph/${value}`;
    
  //  const skillUrl = `http://localhost:4000/api/skills/${value}`;
  //  const paragraphUrl = `http://localhost:4000/api/paragraph/${value}`;



    this.http.get(paragraphUrl).subscribe(response => {
      this.paragraphs = response;
    });
    this.http.get(skillUrl).subscribe(response => {
      this.skills = response;
    });

  }

  saveData(jobtitle: string, fname: string, lname: string, phone: string, email: string) {
    const saveDataUrl = `https://ai-response-parser-git-main-anicodeth.vercel.app/api/addPerson`;


    const headers = { 'Content-Type': 'application/json' };
    let body: any = {
      jobtitle,
      fname,
      lname,
      phone,  
      email
    }
    this.http.post(saveDataUrl, body, { headers }).subscribe(response => {
      this.paragraphs = response;
    });

  }
}
