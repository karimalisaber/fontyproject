import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  
  arabic: boolean = true;

  arabFooter = ['الاسم', 'البريد الالكتروني' , 'رقم الهاتف' , 'رسالتك'];
  englishFooter = ['name', 'email' , 'phone', 'message' ];
  
  items = [...this.arabFooter];

  constructor() { }

  ngOnInit() {
  }

}
