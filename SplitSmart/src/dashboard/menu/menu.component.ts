import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion'
import { FriendModel } from '../../models/friend-model';
import { CommonModule } from '@angular/common';
import { Group } from '../../models/group-model';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    CommonModule
  ]
})
export class MenuComponent implements OnInit {

  constructor() { }

  private friendsList: FriendModel[] = [
    new FriendModel({ firstName: "John", lastName: "Doe" }),
    new FriendModel({ firstName: "Jane", lastName: "Smith" }),
    new FriendModel({ firstName: "Emily", lastName: "Johnson" }),
    new FriendModel({ firstName: "Michael", lastName: "Brown" }),
    new FriendModel({ firstName: "Jessica", lastName: "Williams" }),
];
  private groupsList: Group[] = [
    new Group({ groupName: "Test Group 1" }),
    new Group({ groupName: "Test Group 2" }),
    new Group({ groupName: "Test Group 3" }),
    new Group({ groupName: "Test Group 4" }),
    new Group({ groupName: "Test Group 5" }),
  ];

  public ngOnInit(): void {
    this.getUserFriends();
    this.getUserGroups();
  }

  public get friendList(): FriendModel[] {
    return this.friendsList;
  }

  public get groupList(): Group[] {
    return this.groupsList;
  }

  private getUserFriends(): void {
    //TODO: make api call to the backend and get list of friends 
  }

  private getUserGroups(): void {
    //TODO: make api call to the backend and get list of groups 
  }
}
