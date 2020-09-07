import { Component, OnInit } from '@angular/core';
import { Group } from '../../model/group';
import { from } from 'rxjs';
import { GroupService } from '../group-service/group.service';

@Component({
  selector: 'app-group-manager',
  templateUrl: './group-manager.component.html',
  styleUrls: ['./group-manager.component.scss']
})
export class GroupManagerComponent implements OnInit {

  newGroup = new Group;

  constructor(private groupService: GroupService) { }

  public group: Group [];

  submited = false;

  onsubmit(){
    this.submited = true;
  }

  ngOnInit(): void {
    this.groupService.getData().subscribe(i => this.group = i);
  }

  addGroup(){
    this.groupService.addData(this.newGroup).subscribe(i => this.group.push(i));
  }

  deleteGroup(id: number){
    this.groupService.deleteData(id).subscribe( _ => this.group = this.group.filter(i => i.id != id));
  }

}
