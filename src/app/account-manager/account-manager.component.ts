import { Component, OnInit } from '@angular/core';
import { Account } from '../../model/account';


@Component({
  selector: 'app-account-manager',
  templateUrl: './account-manager.component.html',
  styleUrls: ['./account-manager.component.scss']
})
export class AccountManagerComponent implements OnInit{

  public account: Account[];

  constructor() { }

  ngOnInit(): void {
  }

}
