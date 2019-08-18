import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '../shared/services/users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import User from '../user.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit, OnDestroy {

  user: User;
  updateSubs: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersService : UsersService
  ) { }

  ngOnInit() {
      const {id} = this.route.snapshot.params;
      this.usersService.getUser(+id).subscribe((user : User) => {
      this.user = user;
    });
  }

  onSubmit(user: User){
    user.id = this.user.id;
    this.usersService.updateUser(user)
    .subscribe((user: User) =>{
      this.router.navigate(['/users']);
    });
  }

  ngOnDestroy() {
    if(this.updateSubs){
      this.updateSubs.unsubscribe();
    }
  }

}