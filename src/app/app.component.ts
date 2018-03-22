import { Component, OnInit } from '@angular/core';

import { CivicSignupService } from './modules/civic/civic-signup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  message:string;
  constructor(private civicServ:CivicSignupService){

  }
  ngOnInit(){
    this.civicServ.currentFlag.subscribe(message =>this.message=message.toString());
    console.log('app component oninit');
  }
  updateMessage(){
    this.message=this.civicServ.getSignupObject().buttonText;
  }
  updateMessagetoFlag(){
    this.message=this.civicServ.getSignupObject().flag.toString();

  }
   updateMessagetoToken(){
    this.message=this.civicServ.getSignupObject().jwtToken;

  }
  updateMessagetoError(){
    this.message=this.civicServ.getSignupObject().getError();

  }
  updateMessagetoId(){
    this.message=this.civicServ.getSignupObject().Id;

  }
  
}
