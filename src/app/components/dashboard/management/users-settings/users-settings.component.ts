import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTable, MatPaginator, MatDialog } from '@angular/material';
import { UsersService } from 'src/app/services/users.service';
import { HttpClient } from '@angular/common/http';
import { DialogComponent } from 'src/app/components/assets/dialog/dialog.component';
import { take } from 'rxjs/operators';
import { SuccessDialogComponent } from 'src/app/components/assets/success-dialog/success-dialog.component';
import { ErrorDialogComponent } from 'src/app/components/assets/error-dialog/error-dialog.component';

@Component({
  selector: 'app-users-settings',
  templateUrl: './users-settings.component.html',
  styleUrls: ['./users-settings.component.scss']
})
export class UsersSettingsComponent implements OnInit {
  pageNumber = 1;

  users = new MatTableDataSource ();
  filteredUsers = new MatTableDataSource ();
  
  displayedColumns: string[] = ['name', 'phone', 'email','ordersNumber' , 'pointsNumber' ,  'delete',];

  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  @ViewChild(MatPaginator, {static:true}) paginator: MatPaginator;

  constructor(private dialog: MatDialog, private user: UsersService, private http: HttpClient) { }

  ngOnInit() {
    this.paginator._intl.itemsPerPageLabel = 'عدد العناصر في كل صفحة';

    this.user.getSalles().subscribe((res: any)=> {
      this.filteredUsers.data = this.users.data = res;
    });

    this.user.getSomeUsers(this.pageNumber).subscribe((res: any)=> {
      // this.filteredUsers.data = this.users.data = res;
      // console.log(res);
      
    });
    this.filteredUsers.paginator = this.paginator;
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
    let itemIndex = this.users.data.findIndex( (item:any) =>{ return item.id === id });
    var deletedItem = this.users.data.splice(itemIndex, 1);
    this.filteredUsers.data = this.users.data;

    this.user.deleteSaller(id).subscribe(
    data=> {
      this.dialog.open(SuccessDialogComponent);    
    }, error=> {
      this.users.data.splice(itemIndex, 0, deletedItem[0]);

      this.dialog.open(ErrorDialogComponent);
    });
  }
  
  filter(value){
    this.filteredUsers.data = (value) ?
    this.users.data.filter( (p:any) => p.sales.name.toLowerCase().includes(value.trim().toLowerCase())) : this.users.data ; 
    
    this.table.renderRows();
  }

}
