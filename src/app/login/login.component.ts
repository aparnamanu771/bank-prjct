import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data="your perfect banking partner"

  inputplaceholder="Account Number"

  acno=''
  psw=''

 
  constructor(private router:Router,private ds:DataService) {}
  ngOnInit(): void {

  }
 login(){
  
  var acnum= this.acno
  var psw= this.psw
  var userDetails= this.ds.userDetails
  if(acnum in userDetails){
    if(psw==userDetails[acnum]["password"]){
      alert("login success")
      this.router.navigateByUrl('dashboard')
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



// login(a:any,b:any){
  
//   var acnum= a.value
//   var pswrd= b.value
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



// login(a:any,b:any){
  
//   var acnum= a.value
//   var pswrd= b.value
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






//  acnoChange(event:any){
//   this.acno=event.target.value
//   // console.log(this.acno);
//  }

//  pswrdChange(event:any){
//   this.psw=event.target.value
//   // console.log(this.psw);
//  }

}
