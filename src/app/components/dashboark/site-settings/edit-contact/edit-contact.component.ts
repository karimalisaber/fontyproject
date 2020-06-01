import { Component, OnInit } from '@angular/core';
import {  MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { SiteService } from 'src/app/modules/shared/services/site.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {
 contacts$;
 canEdit= false;

 lang: string = this.route.snapshot.paramMap.get('lang');

 constructor(private route: ActivatedRoute, private site: SiteService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.contacts$ = this.site.getContacts(this.lang);
  }

  updateContacts(form) {
    this.canEdit = false;
    form.lang = this.lang; 
   this.site.updateContacts(form)
   .subscribe(
     ()=> this.snackBar.open('تم تعديل معلومات التواصل', `` , {duration: 1500}), 
     () => this.snackBar.open('حدثت مشكلة بالاتصال بالسيرفر برجاء المحاولة مرة أخرى', `` , {duration: 1500}));
  }

  enableEdit(){
    this.canEdit = true
  }
}
