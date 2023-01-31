import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data="your perfect banking partner"

  inputplaceholder="Account Number"

  // acno=''
  // psw=''

  userDetails:any={
    1000:{acno:1000,username:"anu",password:"abc123",balance:0},
    1001:{acno:1001,username:"amal",password:"abc123",balance:0},
    1003:{acno:1003,username:"arun",password:"abc123",balance:0},
    1004:{acno:1004,username:"akhil",password:"abc123",balance:0},
    1002:{acno:1002,username:"manu",password:"abc123",balance:0},
  }

  constructor() {}
  ngOnInit(): void {

  }
//  login(){
  
//   var acnum= this.acno
//   var pswrd= this.psw
//   var userDetails= this.userDetails
//   if(acnum in userDetails){
//     if(pswrd==userDetails[acnum]["password"]){
//       alert("login success")
//     }
//     else{
//       alert("incurrect password")
//     }
//   }
//   else{
//     alert("acno incurrect or not registerd yet")
//   }

// // alert('login clicked')
//   }



login(a:any,b:any){
  
  var acnum= a.value
  var pswrd= b.value
  var userDetails= this.userDetails
  if(acnum in userDetails){
    if(pswrd==userDetails[acnum]["password"]){
      alert("login success")
    }
    else{
      alert("incurrect password")
    }
  }
  else{
    alert("acno incurrect or not registerd yet")
  }

// alert('login clicked')
  }






//  acnoChange(event:any){
//   this.acno=event.target.value
//   // console.log(this.acno);
//  }

//  pswrdChange(event:any){
//   this.psw=event.target.value
//   // console.log(this.psw);
//  }

}
