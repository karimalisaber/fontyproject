import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SiteService } from 'src/app/services/site.service';
import { MatDialog } from '@angular/material';
import { ErrorDialogComponent } from 'src/app/components/assets/error-dialog/error-dialog.component';
import { SuccesPostDialogComponent } from 'src/app/components/assets/succes-post-dialog/succes-post-dialog.component';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {
 contacts$;

 constructor(private site: SiteService, private dialog: MatDialog) { }

  ngOnInit() {
    this.contacts$ = this.site.getContacts();
  }

  updateContacts(form: NgForm) {
   this.site.updateContacts(form)
   .subscribe(
     res=> this.dialog.open(SuccesPostDialogComponent), 
     error=> this.dialog.open(ErrorDialogComponent));
  }
}
