import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../environments/environment";

export interface AWSResponse{
  data: any;
  resp: any;
}

@Injectable({
  providedIn: 'root'
})

export class AwsService {
  constructor(private http: HttpClient) { }

  registerPhone(endpoint: string) {
    return this.http.post<AWSResponse>(`${environment.api}/subscribe?TopicArn=arn:aws:sns:us-west-2:127802994790:EEWSJSU&Endpoint=${endpoint}&Protocol=sms`, {})
  }

  sendMessage(phone: string, message: string) {
    return this.http.get<AWSResponse>(`https://sjsueew.tk:3005/sendSMS/add?phone_no=${phone}&sms=${message}`)
  }
}
