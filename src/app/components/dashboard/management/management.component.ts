import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTable, MatPaginator, MatTableDataSource, MatSnackBar } from '@angular/material';
import { UsersService } from 'src/app/services/users.service';
import { take } from 'rxjs/operators';
import { DialogComponent } from 'src/app/modules/material/components/dialog/dialog.component';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {
  users = new MatTableDataSource ();
  filteredUsers = new MatTableDataSource ();
  
  displayedColumns: string[] = ['name', 'phone', 'email', 'delete', 'edit'];

  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  @ViewChild(MatPaginator, {static:true}) paginator: MatPaginator;

  constructor(
    private dialog: MatDialog, 
    private user: UsersService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.paginator._intl.itemsPerPageLabel = 'عدد العناصر في كل صفحة';

    this.user.getSalles().subscribe((res: any)=> {
      this.filteredUsers.data = this.users.data = res;
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
    data=>  this.snackBar.open('تم حذف المستخدم بنجاح ', `` , {duration: 1500})

    , error=> {
      this.users.data.splice(itemIndex, 0, deletedItem[0]);

      error=> this.snackBar.open('حدثت مشكلة بالاتصال بالسيرفر برجاء المحاولة مرة أخرى', `` , {duration: 1500});
    });
  }
  
  filter(value){
    this.filteredUsers.data = (value) ?
    this.users.data.filter( (p:any) => p.sales.name.toLowerCase().includes(value.trim().toLowerCase())) : this.users.data ; 
    
    this.table.renderRows();
  }
}
