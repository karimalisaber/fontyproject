import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTable, MatPaginator, MatDialog, MatSnackBar } from '@angular/material';
import { UsersService } from 'src/app/services/users.service';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { DialogComponent } from 'src/app/modules/material/components/dialog/dialog.component';

@Component({
  selector: 'app-users-settings',
  templateUrl: './users-settings.component.html',
  styleUrls: ['./users-settings.component.scss']
})
export class UsersSettingsComponent implements OnInit {
  currentPage:number = 1;
  firstPage:number = 1;
  lastPage:number = 1; // any random number
  isFirstPage: boolean = false;
  isLastPage: boolean = false;
  isOnlyOnePage : boolean = false;

  users = new MatTableDataSource ();
  filteredUsers = new MatTableDataSource ();
  
  displayedColumns: string[] = ['name', 'phone', 'email','ordersNumber' , 'pointsNumber' ,  'delete',];

  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  
  constructor(private dialog: MatDialog, private snackBar: MatSnackBar, private user: UsersService, private http: HttpClient) { }

  ngOnInit() {
    this.getUsers();
    this.checkPageStatus();
  }

  deleteAlert(id){
    this.dialog.open(DialogComponent)
    .afterClosed().pipe(take(1))
    .subscribe(res=>{
      if(res === "yes") this.deleteUser(id);
    });
  }

  private checkPageStatus(){
    this.isFirstPage = (this.currentPage === this.firstPage)? true: false;

    this.isLastPage = (this.currentPage === this.lastPage)? true: false;
    
    this.isOnlyOnePage = (this.firstPage === this.lastPage) ? true: false;
  }

  nextPage(){
    if (this.currentPage < this.lastPage) this.currentPage ++;
    this.checkPageStatus();
    this.getUsers();
  }

  prevPage(){
    if (this.currentPage > this.firstPage) this.currentPage --;
    this.checkPageStatus();
    this.getUsers();
  }

  private getUsers(){
    this.user.getSomeUsers(this.currentPage).subscribe((res: any)=> {
      this.filteredUsers.data = this.users.data = res.data;
      this.lastPage = res.last_page;    
    });
  }

  private deleteUser(id){
    // optimistic update
    let itemIndex = this.users.data.findIndex( (item:any) =>{ return item.id === id });
    var deletedItem = this.users.data.splice(itemIndex, 1);
    this.filteredUsers.data = this.users.data;

    this.user.deleteSaller(id).subscribe(
    data=> this.snackBar.open('تم حذف المستخدم بنجاح ', `x` , {duration: 1500})  
    , error=> {
      this.users.data.splice(itemIndex, 0, deletedItem[0]);
      error => this.snackBar.open('حدثت مشكلة أثناء حذف المستخدم برجاء المحاولة مرة أخرى', `` , {duration: 1500});
    });
  }
  
  filter(value){
    this.filteredUsers.data = (value) ?
    this.users.data.filter( (p:any) => p.sales.name.toLowerCase().includes(value.trim().toLowerCase())) : this.users.data ; 
    
    this.table.renderRows();
  }

}
