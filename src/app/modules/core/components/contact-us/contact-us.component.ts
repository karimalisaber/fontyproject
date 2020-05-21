import { MatSnackBar } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { SiteService } from 'src/app/modules/shared/services/site.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  lang: string = this.site.getLangNumber();

  arabFooter = ['الاسم', 'البريد الالكتروني' , 'رقم الهاتف' , 'رسالتك'];
  englishFooter = ['name', 'email' , 'phone', 'message' ];
  
  items = (this.lang ==='1')? [...this.arabFooter]: [...this.englishFooter];

  constructor(private site: SiteService, private snackBar: MatSnackBar) { 

  }

  ngOnInit() {
  }

  postMessage(message){
    if (this.lang ==="1") this.postArabicMessage(message);
    else if(this.lang==="2") this.postEnglishMessage(message);
  }

  private postArabicMessage(message){
    let successMessage ="تم ارسال الرسالة بنجاح";
    let errorMessage = "عفوًا حدثت مشكلة أثناء ارسال رسالتك برجاء المحاولة مرة أخرى";
    this.messageRequest(message, successMessage, errorMessage );
  }

  
  private  postEnglishMessage(message){ 
      let successMessage ="messageHas been set successfully";
      let errorMessage = "oh, somthing wrong message hasn't been sent";
    this.messageRequest(message, successMessage, errorMessage);
  }

  private messageRequest(message, successMessage, errorMessage){
    this.site.postMessage(message)
    .subscribe(
       ()=> this.snackBar.open(successMessage, ``, {duration:1500})
      ,() => this.snackBar.open(errorMessage, ``, {duration:1500})
      );
  }

}
