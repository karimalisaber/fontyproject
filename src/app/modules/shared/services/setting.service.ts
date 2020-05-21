import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take, map } from 'rxjs/operators';
import { getAppSlidersUrl, addAppSliderUrl, deleteAppSliderUrl } from 'src/app/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor(private http: HttpClient) {}

  getSliders(){
    return this.http.get(getAppSlidersUrl).pipe(map((res: {data} )=> res.data));
  }

  addSlider(slider){
   return this.http.post(addAppSliderUrl, slider).pipe(take(1));
  }

  deleteSlider(id){
    return this.http.delete(deleteAppSliderUrl+ id);
  }

}
