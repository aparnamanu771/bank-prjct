import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  

  

constructor(private ds:DataService,private router:Router,private fb:FormBuilder) { }

   // create a reactive form of registerForm
   registerForm=this.fb.group({

    // using validator class .create a new array
    // validator rules 0-9 a-z A-Z

    acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
    uname:['',[Validators.required,Validators.pattern('[A-Za-z]+')]],
    psw:['',[Validators.required,Validators.pattern('[0-9A-Za-z]+')]]
   })



ngOnInit(): void {

}
register(){
  
 
  var uname=this.registerForm.value.uname
  var acno=this.registerForm.value.acno
  var psw=this.registerForm.value.psw
if(this.registerForm.valid){
  const result=this.ds.register(uname,acno,psw)
  if(result){
    alert('registerd')
    this.router.navigateByUrl("")
  }
  else{
    alert("acno already present")
  }
   

  // console.log(uname,acno,psw);
  
}
else{
  alert('Invalid Form')
}
}

}