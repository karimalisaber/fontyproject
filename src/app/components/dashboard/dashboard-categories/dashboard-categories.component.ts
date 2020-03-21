import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  UserCat, PostCategoriesResponse } from 'src/app/interfaces/categories-response';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-dashboard-categories',
  templateUrl: './dashboard-categories.component.html',
  styleUrls: ['./dashboard-categories.component.scss']
})

export class DashboardCategoriesComponent implements OnInit {
 apiUrl = 'http://fonty.ieeeshasb.org/api/web/';
 
  userInput ="" ; // add section input
  categories: Array<UserCat> =[];
  update: boolean =false; // update specific category

  constructor(private http: HttpClient,  private cat: CategoriesService) {

  }


ngOnInit() {
    // get categories as observable
      this.cat.getCategories().subscribe(response=>{
        this.categories = response;
     });
}


  deleteItem(id){
    let deleteUrl = `${this.apiUrl}delete_category/${id}`;
    this.http.delete(deleteUrl).subscribe(data=> {
      let itemIndex = this.categories.findIndex( item =>{ return item.id === id });
      this.categories.splice(itemIndex, 1);
    });
  }

  private getUpdateItemId(id){
    let element = document.getElementById('item-' + id);
    element.classList.toggle('update');
    this.update = !this.update;
    return element;
  }

  private enableUpdateItem(id){
    let element =  this.getUpdateItemId(id);
    if (this.update) setTimeout( () =>  element.focus() ,100);
  }

  private updateItem(value , id){
    let element =  this.getUpdateItemId(id);
       
    let updateUrl = `${this.apiUrl}edit_category`;
    this.http.put(updateUrl, {id, name: value}).subscribe(data=> {
      let itemIndex = this.categories.findIndex( item =>{ return item.id === id });
      this.categories.splice(itemIndex, 1, {id, name: value}); 
    });
  }

  addItem(name){
      let url = `${this.apiUrl}add_category`;
      
      this.http.post(url, {name}).subscribe((res:PostCategoriesResponse)=>{
      this.categories.push({id: res.data.id , name: res.data.name});
    });
    // 3- cleanup the inputs 
    (<HTMLInputElement>document.getElementById('cat-name')).value = null;
    (<HTMLInputElement>document.getElementById('cat-name')).blur();
    this.userInput = null;

    // 4- cleanup the errors
    // window.location.reload();
  }
}
