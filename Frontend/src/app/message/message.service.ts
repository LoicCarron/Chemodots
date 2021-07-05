import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.prod";
import {Observable} from "rxjs";

export interface PhpData {
  status: string;
  data : any;
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http : HttpClient) {  }

  sendMessage(url : string, data : any) : Observable<PhpData> {
    url = environment.url + url;
    /*let form_data = new FormData();
    if (data != null && data != undefined) {
      for (let key of Object.keys(data)) {
        form_data.append(key, data[key]);
      }
    }*/
    return this.http.post<PhpData>(url, data, { withCredentials: true});
  }
}

