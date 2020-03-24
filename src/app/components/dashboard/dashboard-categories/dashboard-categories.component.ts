import { Component, OnInit, OnDestroy } from '@angular/core';
import {  UserCat, PostCategoriesResponse } from 'src/app/interfaces/categories-response';
import { CategoriesService } from 'src/app/services/categories.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../../assets/dialog/dialog.component';
import { take } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { ErrorDialogComponent } from '../../assets/error-dialog/error-dialog.component';

@Component({
  selector: 'app-dashboard-categories',
  templateUrl: './dashboard-categories.component.html',
  styleUrls: ['./dashboard-categories.component.scss']
})

export class DashboardCategoriesComponent implements OnInit , OnDestroy{
 apiUrl = 'http://fonty.ieeeshasb.org/api/web/';
 
  userInput ="" ; // add section input
  categories: Array<UserCat> =[];
  update: boolean =false; // update specific category

  getCategoriesSubscription: Subscription;

  constructor(
    private dialog: MatDialog,  
    private cat: CategoriesService) {}

  ngOnInit() {
    // get categories as observable
     this.getCategoriesSubscription = this.cat.getCategories().subscribe(response=>{
        this.categories = response;
     });
  }

  deleteAlert(id){
    this.dialog.open(DialogComponent)
    .afterClosed().pipe(take(1))
    .subscribe(res=>{
      if(res === "yes") this.deleteItem(id);
    });
  }

  private deleteItem(id){
    // optimistic update
    let itemIndex = this.categories.findIndex( item =>{ return item.id === id });
    var deletedItem = this.categories.splice(itemIndex, 1);
    
    this.cat.deleteCategory(id).subscribe(
    data=> {
          
    }, error=> {
      this.categories.push(deletedItem[0]);

      this.dialog.open(ErrorDialogComponent);
    });
  }

  private getUpdateItemId(id){
    let element = document.getElementById('item-' + id);
    element.classList.toggle('update');
    this.update = !this.update;
    return element;
  }

  enableUpdateItem(id){
    let element =  this.getUpdateItemId(id);
    if (this.update) setTimeout( () =>  element.focus() ,100);
  }

  private updateItem(value , id){
    let element =  this.getUpdateItemId(id);

    let cat = {id, name: value} ;
    this.cat.updateCategory(cat).subscribe(
      data=> {
        let itemIndex = this.categories.findIndex( item =>{ return item.id === id });
        this.categories.splice(itemIndex, 1, {id, name: value});
    },error => this.dialog.open(ErrorDialogComponent) );
  }

  addItem(name){
      let newCat ={name};
      this.cat.addCategory(newCat).subscribe((
        res:PostCategoriesResponse) => this.categories.push({id: res.data.id , name: res.data.name}),
       error => this.dialog.open(ErrorDialogComponent) );

    // 3- cleanup the inputs
    (<HTMLInputElement>document.getElementById('cat-name')).value = null;
    (<HTMLInputElement>document.getElementById('cat-name')).blur();
    this.userInput = null;

    // 4- cleanup the errors
    // window.location.reload();
  }

  ngOnDestroy(){
    this.getCategoriesSubscription.unsubscribe();
  }
}
