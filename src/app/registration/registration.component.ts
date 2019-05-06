import { Component, OnInit } from '@angular/core';
import { AwsService } from '../aws.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [AwsService]
})
export class RegistrationComponent implements OnInit {

  phoneNumber: string = "";
  confirmMessage: string = "Congratulations! You are now subscribed to SJSU Early Earthquake Warnings. Type 'STOP' to opt out. If you opt out, you cannot opt back in for the next 30 days.";
  stringInvalid: boolean = false;
  stringEmpty: boolean = true;
  showErrorHelper: boolean = true;
  showModal: boolean = false;
  listOfNumbers: Array<string> = [];

  constructor(private aws: AwsService) { }

  ngOnInit() {
  }

  checkString (input: string) {
    // Check if the string is empty
    this.stringEmpty = input === "" ;
    // Check if the string is valid (10 characters w/ optional country code, digits only)
    let regex = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
    this.stringInvalid = !regex.test(input);

    // Check if string is empty or string is invalid
    if (this.stringEmpty || this.stringInvalid) {
      this.showErrorHelper = true;
    }
    else {
      this.showErrorHelper = false;
    }

  }

  async onRegisterPhoneNumber (input: string) {
    // console.log('input: ' + input);
    let number = input;
    let chars = input.split('');
    // console.log('chars: ' + chars);
    if(chars[0] != '1') {
      chars.unshift('1');
      number = chars.join('');
    }

    console.log('number: ' + number);
    
    // console.log('number: ' + number);

    await this.aws.registerPhone(number).subscribe(response => {
      try {
        console.log('AWS registerPhone response: ' + response);
      }
      catch(err) {
        console.log('aws register phone failed');
      }
    });

    //send confirmation message

      this.aws.sendMessage(number, this.confirmMessage).subscribe(response=> {
        try {
          console.log('AWS sendMessage response: ' + response);
        }
        catch(err) {
          console.log('aws confirm message failed')
        }
      })
    
    
  
    this.listOfNumbers.push(number);
    this.phoneNumber = "";
    this.showErrorHelper = true;
    this.showModal=true;


    //insert api call that uploads phone number to Amazon SNS
  }

  closeModal() {
    this.showModal = false;
  }
}
