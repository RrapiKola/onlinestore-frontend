import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

   users!: User[];
  constructor(private userService : UserService, private router:Router) { }

  ngOnInit(): void {

    this.getUsers();

  }
  private getUsers(){
    this.userService.getUsers().subscribe((data : User[])=>{
      debugger;
      console.log(data);
    this.users=data;});
  }


  updateUser(id:number){
    this.router.navigate(['update-user',id]);

  }

  deleteUser(id:number){
    this.userService.deleteUser(id).subscribe( data => {
      console.log(data);
      this.getUsers();
    })
  }

  userDetails(id:number){
    this.router.navigate(['user-details',id]);

  }

}
