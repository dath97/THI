import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private ApiUrl = "https://localhost:44306/api/values";
  private header : HttpHeaders;
  constructor(private http: HttpClient) { 
    this.header = new HttpHeaders({'Content-Type':'application/json'});
  }
  public getData() {

    return this.http.get(this.ApiUrl,{headers:this.header});
    //return {}
  }
  public postData(){
    
  }
}

class abc {
  test: string = 'zzzz'
}
