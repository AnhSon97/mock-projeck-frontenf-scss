import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AccountService } from '../account.service';
import { Account } from '../../model/account';
import { from } from 'rxjs';


@Component({
  selector: 'app-detail-account',
  templateUrl: './detail-account.component.html',
  styleUrls: ['./detail-account.component.scss']
})
export class DetailAccountComponent implements OnInit {

  account: Account;

  constructor(
    private activatedRoute:ActivatedRoute,
    private accountService:AccountService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getDataFromRoute();
  }
  
  getDataFromRoute(){
    // take id from paramMap
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    // set value property movie
    this.accountService.getDataFromId(id).subscribe(item => this.account = item);
  }

  save(): void{
    this.accountService.updateData(this.account).subscribe(() => this.goback())
  }

  goback(): void{
    this.location.back();
  }
}
