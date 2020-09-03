import { Component, OnInit } from '@angular/core';
import { Account } from '../../model/account';
import { AccountService } from '../account.service';


@Component({
  selector: 'app-account-manager',
  templateUrl: './account-manager.component.html',
  styleUrls: ['./account-manager.component.scss']
})
export class AccountManagerComponent implements OnInit{

  public account: Account[];

  newAcc = new Account;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.getData().subscribe(i => this.account = i);
  }

  delete(id: number){
    this.accountService.deleteData(id).subscribe( _ => this.account = this.account.filter(i => i.id != id))
  }

  addAcc(){
    this.accountService.addData(this.newAcc).subscribe(i => this.account.push(i));
  }

}
