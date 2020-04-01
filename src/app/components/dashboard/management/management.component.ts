import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UsersService } from 'src/app/services/users.service';
import { HttpClient } from '@angular/common/http';
import { DialogComponent } from '../../assets/dialog/dialog.component';
import { take } from 'rxjs/operators';
import { ErrorDialogComponent } from '../../assets/error-dialog/error-dialog.component';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {
  users;
  filteredUsers;

  constructor(private dialog: MatDialog, private user: UsersService, private http: HttpClient) { }

  ngOnInit() {
    this.user.getUsers().subscribe(res=> {
     this.filteredUsers = this.users = res;
    });
  }

  deleteAlert(id){
    this.dialog.open(DialogComponent)
    .afterClosed().pipe(take(1))
    .subscribe(res=>{
      if(res === "yes") this.deleteUser(id);
    });
  }

  private deleteUser(id){
    // optimistic update
    let itemIndex = this.users.findIndex( item =>{ return item.id === id });
    var deletedItem = this.users.splice(itemIndex, 1);
    
    this.user.deleteUser(id).subscribe(
    data=> {
          
    }, error=> {
      this.users.splice(itemIndex, 0, deletedItem[0]);

      this.dialog.open(ErrorDialogComponent);
    });
  }

  
  filter(value){
    this.filteredUsers = (value) ?
    this.users.filter(p => p.sales.name.toLowerCase().includes(value.toLowerCase())) : this.users ; 
  }


}
