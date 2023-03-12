import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {
  transactionData: any;
  transactionForm: any;
  traForm: any;

  constructor(private ds:DataService) {

    
    this.ds.getTransactions(JSON.parse(localStorage.getItem("currentAcno") || "")).subscribe((result:any)=>{

      this.transactionData=result.transaction

    })
   
    // this.transactionData=this.ds.getTransactions( this .ds.currentAcno)
    // console.log(this.transactionData);
    

  }
  ngOnInit(): void {
    
  }
  // gettransaction(){
//     var Acno=this.transactionForm.value.Acno
//     if(this.transactionForm.valid){
//       this.ds.getTransactions(Acno)
//         alert(result.message)
//         this.router.navigateByUrl("")
//       },
//       result=>{
//         alert(result.error.message)
//         this.router.navigateByUrl("")
      
//       })
//     }
//   }

}
