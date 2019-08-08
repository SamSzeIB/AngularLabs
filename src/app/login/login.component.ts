import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Alert} from 'selenium-webdriver';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {
  }
  email = ''
  upwd = ''
  ngOnInit() {
  }
itemclicked(){
  var users = [{'email':'abc@gmail.com','upwd':'123'},{'email':'manhoszehk@gmail.com','upwd':'321'},{'email':'qwe@gmail.com','upwd':'111'}];
  var pass = 0;

    for(let i = 0; i<users.length;i++){
      if (this.email == users[i].email && this.upwd == users[i].upwd){
        pass = 1;
      }
    }
    if(pass == 1){
      this.router.navigate(['/account'])
    }
    else{
      alert("please try again");
    }
   }
  }
