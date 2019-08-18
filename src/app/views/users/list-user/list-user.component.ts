import { Component, OnInit, OnDestroy } from '@angular/core';
import User from '../user.model';
//import { SortPipe } from '../shared/pipes/sort.pipe';
import { UsersService } from '../shared/services/users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit, OnDestroy {

  allUsers: User[];
  updateSubs: Subscription;

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
    
    this.usersService.getUsers().subscribe((users : User[]) => {
      this.allUsers = users; 
    });
  }

  onRemove(id: number){
    this.usersService.deleteUser(id).subscribe((response) =>{
      this.allUsers = this.allUsers.filter(prod => prod.id!=id);
    });
    /*this.sortPipe;*/
  }

  ngOnDestroy() {
    //this.updateSubs.unsubscribe();
  }

}
