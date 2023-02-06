import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {
  transactionData: any;

  constructor(private ds:DataService) {
   
    this.transactionData=this.ds.getTransactions( this .ds.currentAcno)
    // console.log(this.transactionData);
    

  }
  ngOnInit(): void {
    
  }

}
