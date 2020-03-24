import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getItemsUrl, deleteItemUrl, postItemUrl, getItemUrl } from '../environment/environment';
import { map, take } from 'rxjs/operators';
import { Items } from '../interfaces/items';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) { }

  getItems(){
    return this.http.get(getItemsUrl).pipe(map((response:Items)=> response.data));
  }

  getItem(id){
    return this.http.get(getItemUrl+id).pipe(take(1));
  }

  deleteProduct(id){
   return this.http.delete(deleteItemUrl+id).pipe(take(1));
  }
  
  addProduct(product){
    return this.http.post(postItemUrl, product);
  }

  editProduct(){
    // return this.http.put();
  }
}
