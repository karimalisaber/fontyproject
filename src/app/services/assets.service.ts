import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../components/assets/dialog/dialog.component';
import { take, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssetsService {

  constructor(private dialog: MatDialog) { }

  deleteAlert(id) {
  return  this.dialog.open(DialogComponent)
    .afterClosed().pipe(map(res=>{
      if(res === "yes") return true;

      return false;
    }),take(1));
  }

  findIndex(element, id){
    return element.findIndex( (item: any) =>{ return item.id === id });
  }

  

}
