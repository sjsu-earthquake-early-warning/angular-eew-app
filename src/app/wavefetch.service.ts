import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WavefetchService {
  url = 'https://s3-us-west-2.amazonaws.com/sjsu-eew/wave.txt'

  getWave() {
    return this.http.get(this.url, { responseType: 'text' });
  }

  constructor(private http: HttpClient) { }
}
