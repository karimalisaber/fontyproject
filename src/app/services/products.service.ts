import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { postItemUrl } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {}

}
