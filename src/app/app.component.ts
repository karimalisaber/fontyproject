import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fonty';
  loading: boolean = true;

  ngOnInit(){
    setTimeout( () => {this.loading = false} , 2000);
  }
}
