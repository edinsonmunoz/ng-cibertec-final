import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '../shared/services/users.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import User from '../user.model';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit, OnDestroy {

  createSubs: Subscription;

  constructor(
    private usersService: UsersService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit(user: User){
    this.createSubs = this.usersService.createUser(user)
    .subscribe((user: User) =>{
      this.router.navigate(['/users']);
      console.log('Usuario creado >', user);
    });
  }

  ngOnDestroy() {
    if(this.createSubs){
      this.createSubs.unsubscribe();
    }
  }

}