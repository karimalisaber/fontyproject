import { Component, OnInit, OnDestroy } from '@angular/core';
import {  UserCat, PostCategoriesResponse } from 'src/app/interfaces/categories-response';
import {MatDialog} from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { AssetsService } from 'src/app/modules/shared/services/assets.service';
import { CategoriesService } from 'src/app/modules/shared/services/categories.service';

@Component({
  selector: 'app-dashboard-categories',
  templateUrl: './dashboard-categories.component.html',
  styleUrls: ['./dashboard-categories.component.scss']
})

export class DashboardCategoriesComponent implements OnInit , OnDestroy{
  userInput ="" ; // add section input
  categories: Array<UserCat> =[];
  update: boolean =false; // update specific category

  getCategoriesSubscription: Subscription;

  constructor(
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private assets: AssetsService, 
    private cat: CategoriesService) {}

  ngOnInit() {
    // get categories as observable
     this.getCategoriesSubscription = this.cat.getCategories().subscribe(response=>{
        this.categories = response;
     });
  }

  deleteAlert(id){
     this.assets.deleteAlert(id).subscribe(res=> res? this.deleteItem(id):false) ;
  }

  private deleteItem(id){
    // optimistic update
    let itemIndex = this.assets.findIndex(this.categories, id); //findindex
    var deletedItem = this.categories.splice(itemIndex, 1);
    
    this.cat.deleteCategory(id).subscribe(
    data=> {
       this.snackBar.open('تم حذف القسم بنجاح', `` , {duration: 1500})
    }, error=> {
      this.categories.push(deletedItem[0]);
      this.snackBar.open('حدثت مشكلة أثناء حذف القسم برجاء المحاولة مرة أخرى', `` , {duration: 1500})
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

  updateItem(name , id){
    let item = {id, name} ;
    this.cat.updateCategory(item).subscribe(
      data=> {
        let itemIndex = this.categories.findIndex( item =>{ return item.id === id });
        this.categories.splice(itemIndex, 1, item);
        this.snackBar.open('تم تعديل اسم القسم ', `x` , {duration: 1500});

    },error => this.snackBar.open('حدثت مشكلة أثناء تعديل القسم برجاء المحاولة مرة أخرى', `` , {duration: 1500}));;
  }

  addItem(name){
      let newCat ={name};
      this.cat.addCategory(newCat).subscribe((  
      res:PostCategoriesResponse) => this.categories.push({id: res.data.id , name: res.data.name}),
      error => this.snackBar.open('حدثت مشكلة أثناء اضافة القسم برجاء المحاولة مرة أخرى', `` , {duration: 1500}));


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
