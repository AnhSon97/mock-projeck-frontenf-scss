import { Component, OnInit } from '@angular/core';
import { Group } from '../../model/group';
import { from } from 'rxjs';

@Component({
  selector: 'app-group-manager',
  templateUrl: './group-manager.component.html',
  styleUrls: ['./group-manager.component.scss']
})
export class GroupManagerComponent implements OnInit {

  constructor() { }

  public group: Group[];

  ngOnInit(): void {
  }

}
