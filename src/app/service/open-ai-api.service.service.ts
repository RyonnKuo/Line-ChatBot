import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenAiApiServiceService {

  constructor(
    // private http: HttpClient
  ) {

  }

  // getOpenAIResponseSecond(input: string): Observable<any> {
  //   return this.http.get('http://localhost:5000/api/OpenAI/GetData?input='+input, {responseType: 'text'});
  // }

  async getOpenAIResponse() {
    const res = await fetch('http://localhost:5000/test', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: 'test'
      })
    })

    if (res.ok) {
      const data = await res.json();
      console.log(`data = ${JSON.stringify(data)}`);
    }else {
      console.log(`error`)
    }
  }
}
