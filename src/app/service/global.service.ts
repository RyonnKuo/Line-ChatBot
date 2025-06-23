import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }


  async sendUserInfoToServer(userInfo: any) {
    const res = await fetch('http://localhost:5000/test', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: userInfo
      })
    })
    console.log(`sendLineMessage res = ${JSON.stringify(res)}`);
  }
}
