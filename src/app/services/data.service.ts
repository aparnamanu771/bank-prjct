import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';



// overloading headers as global
const option ={
  headers:new HttpHeaders()
}


@Injectable({
  providedIn: 'root',
})

export class DataService {
  // withdraw(acno: any, psw: any, amnt: any) {
  //   throw new Error('Method not implemented.');
  // }

  currentUser: any
  currentAcno: any
  userDetails: any

  constructor(private http:HttpClient) {
    // this.getData()

  }

  // userDetails:any={
  //   1000:{ acno:1000, username:"anu",  password:"abc123", balance:0, transaction:[]},
  //   1001:{ acno:1001, username:"amal", password:"abc123", balance:0, transaction:[]},
  //   1003:{ acno:1003, username:"arun", password:"abc123", balance:0, transaction:[]},
  //   1004:{ acno:1004, username:"akhil",password:"abc123", balance:0, transaction:[]},
  //   1002:{ acno:1002, username:"manu", password:"abc123", balance:0, transaction:[]},
  // }

  saveData() {
    if (this.userDetails) {
      localStorage.setItem('database', JSON.stringify(this.userDetails));
    }
    if (this.currentUser) {
      localStorage.setItem('currentUser', this.currentUser);
    }
    if (this.currentAcno) {
      localStorage.setItem('currentAcno', JSON.stringify(this.currentAcno));
    }
  }

  // getData() {
  //   if (localStorage.getItem('database')) {
  //     this.userDetails = JSON.parse(localStorage.getItem('database') || '');
  //   }

  //   if (localStorage.getItem('currentUser')) {
  //     this.currentUser = localStorage.getItem('currentUser');
  //   }

  //   if (localStorage.getItem('currentAcno')) {
  //     this.currentAcno = JSON.parse(localStorage.getItem('currentAcno') || '');
  //   }
  // }

  getToken(){
    // access token
    const token = JSON.parse(localStorage.getItem("token") || "")

    // Header Generation
    let headers = new HttpHeaders()

    if(token){
      // append token in header
     option.headers =  headers.append("access_token",token)
    }
    return option
  }





  register(uname: any, acno: any, psw: any) {
    // create body data
    const data={uname,acno,psw}

    // create api call
    return this.http.post("http://localhost:3000/register",data)




    // if (acno in this.userDetails) {
    //   return false;
    // } else {
    //   this.userDetails[acno] = {
    //     acno,
    //     username: uname,
    //     password: psw,
    //     balance: 0,
    //     transaction: [],
    //   };
    //   console.log(this.userDetails);

    //   this.saveData();

    //   return true;
    // }
  }

  login(acno: any, psw: any) {
    const data={acno,psw}
    return this.http.post("http://localhost:3000/login",data)
    // var userDetails = this.userDetails;
    // if (acno in userDetails) {
    //   if (psw == userDetails[acno]['password']) {
    //     this.currentUser = userDetails[acno]['username'];
    //     // console.log(this.currentUser);

    //     this.currentAcno = acno;

    //     this.saveData();

    //     return true;
    //   } else {
    //     return false;
    //   }
    // } else {
    //   return false;
    // }

    // alert('login clicked')
  }

  deposit(acnum: any, password: any, amount: any) {
    const data={acnum,password,amount}
    return this.http.post('http://localhost:3000/deposit',data,this.getToken())



    

















    // let userDetails = this.userDetails;
    // // convert string amount to number
    // var amnt = parseInt(amount);

    // if (acnum in userDetails) {
    //   if (password == userDetails[acnum]['password']) {
    //     // if(amnt= userDetails[acnum]["balance"]){

    //     // update balance
    //     userDetails[acnum]['balance'] += amnt;

    //     // console.log(userDetails);

    //     // transaction data store
    //     userDetails[acnum]['transaction'].push({
    //       Type: 'CREDIT',
    //       amount: amnt,
    //     });
    //     // console.log(userDetails);

    //     this.saveData();

    //     // return current balance
    //     return userDetails[acnum]['balance'];
    //   } else {
    //     // alert('insufficient balance')
    //     return false;
    //   }
    // } else {
    //   // alert('insufficient balance')
    //   return false;
    // }
  }

  withdraw(acnum: any, password: any, amount: any) {
    const data ={acnum,password,amount}
    return this.http.post('http://localhost:3000/withdraw',data,this.getToken())
  }
  //   let userDetails = this.userDetails;
  //   // convert string amount to number
  //   var amnt = parseInt(amount);

  //   if (acnum in userDetails) {
  //     if (password == userDetails[acnum]['password']) {
  //       if (amnt <= userDetails[acnum]['balance']) {
  //         // update balance
  //         userDetails[acnum]['balance'] -= amnt;
  //         // transaction data store
  //         userDetails[acnum]['transaction'].push({
  //           Type: 'DEBIT',
  //           amount: amnt,
  //         });

  //         this.saveData();

  //         // rturn curnt balance
  //         return userDetails[acnum]['balance'];
  //       } else {
  //         alert('insufficient balance');
  //         return false;
  //       }
  //     } else {
  //       alert('incorrect password');
  //       return false;
  //     }
  //   } else {
  //     alert('incorrect accountnumber');
  //     return false;
  //   }
  // }

  getTransactions(acno: any) {
    const data={acno}
    return this.http.post('http://localhost:3000/transaction',data,this.getToken())
    // return this.userDetails[Acno]['transaction'];
  }

  deleteaccount(acno:any){
    return this.http.delete('http://localhost:3000/delete/'+acno,this.getToken())
  }


}
