import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AzureService {

  url = 'https://prod-26.australiaeast.logic.azure.com:443/workflows/b72fa0a6bebb442db1caf18fca22ec69/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=v0SPEeef1oZJXEYKNXuEqpaAm-vqxtVwQCiwIBGQwCQ&Content-Type=application/json';

  constructor(private http: HttpClient) { }

  postData(value: any) {
    return this.http.post(this.url, value);
  }

}
