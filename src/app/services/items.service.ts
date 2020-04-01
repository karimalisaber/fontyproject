import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getItemsUrl, deleteItemUrl, postItemUrl, getItemUrl, updateItemUrl } from '../environment/environment';
import { map, take } from 'rxjs/operators';
import { Items, ItemData } from '../interfaces/items';

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
    return this.http.post(postItemUrl, product).pipe(take(1));
  }

  editProduct(product, id){
    return this.http.post(updateItemUrl + id, product).pipe(take(1));

  }
}
