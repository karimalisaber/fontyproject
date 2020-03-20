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
  userInput ="" ; // add section input
  categories: Array<UserCat> =[];

  constructor(private http: HttpClient,  private cat: CategoriesService) {

  }


ngOnInit() {
    // get categories as observable
      this.cat.getCategoris().subscribe(response=>{
       response.data.forEach(element => {
       this.categories.push({id: element.id , name: element.name});       
     });
  });
}


  delete(id){
    let url = `http://fonty.ieeeshasb.org/api/web/delete_category/${id}`;
    this.http.delete(url).subscribe(data=> {
      let itemIndex = this.categories.findIndex( item =>{ return item.id === id });
      this.categories.splice(itemIndex, 1);
    });
  }

  addItem(name){
      let url = "http://fonty.ieeeshasb.org/api/web/add_category";
      
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
