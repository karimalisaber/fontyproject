import { Categories } from './../../../interfaces/categories.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-categories',
  templateUrl: './dashboard-categories.component.html',
  styleUrls: ['./dashboard-categories.component.scss']
})
export class DashboardCategoriesComponent implements OnInit {
  userInput ="بيسشب" ; // add section input
  categories: Array<Categories> = [
       {id: 1, title: 'سندوتشات'}, 
       {id: 2, title: 'فراخ'},
       {id: 3, title: 'لحمة'},
       {id: 4, title: 'جمبري'},
       {id: 5, title: 'خيار'}, 
  ]; 

  constructor() {

  }

  ngOnInit() {
    // get categories as observable
  }

  delete(id){
    // 1- delete item
    this.categories.splice(id-1, 1);
    // 2- post the deletion  
  }

  addItem(title){
    // 1- check value
    if(this.userInput.length > 3 ){
      // 2- get the id then push item
      let id = this.categories.length +1 ;
      let newItem = {id, title };
      this.categories.push(newItem);

      // 3- cleanup the inputs 
      (<HTMLInputElement>document.getElementById('cat-name')).value = "";
      this.userInput = "";
      // 4- cleanup the errors
        
    }
  }


}
