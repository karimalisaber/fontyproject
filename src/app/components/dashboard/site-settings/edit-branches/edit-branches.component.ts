import { Component, OnInit, OnDestroy } from '@angular/core';
import { SiteService } from 'src/app/services/site.service';
import { MatDialog } from '@angular/material';
import { ErrorDialogComponent } from 'src/app/components/assets/error-dialog/error-dialog.component';
import { Subscription } from 'rxjs';
import { SuccessDialogComponent } from 'src/app/components/assets/success-dialog/success-dialog.component';
import { AssetsService } from 'src/app/services/assets.service';
import { SuccesPostDialogComponent } from 'src/app/components/assets/succes-post-dialog/succes-post-dialog.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-branches',
  templateUrl: './edit-branches.component.html',
  styleUrls: ['./edit-branches.component.scss']
})
export class EditBranchesComponent implements OnInit, OnDestroy {
  lang: string = this.route.snapshot.paramMap.get('lang'); // you need it to pass to the dialog box
  
  branches;
  subscription: Subscription;
  update: boolean = false;

  constructor(private route: ActivatedRoute, private site: SiteService, private dialog: MatDialog, private assets: AssetsService) { }

  ngOnInit() {
   this.subscription = this.site.getBranches(this.lang)
    .subscribe(
      res=> this.branches =res,
      error=> this.dialog.open(ErrorDialogComponent));
  }

  addBranch(branch){
    this.branches.push(branch);
    branch.lang = this.lang;
    this.site.addBranch(branch)
    .subscribe(
      res=> this.dialog.open(SuccesPostDialogComponent),
      err=> {
        this.dialog.open(ErrorDialogComponent)
        this.branches.pop();
      });
  }

  deleteAlert(id){
    this.assets.deleteAlert(id).subscribe(res=> res? this.deleteBranch(id):false) ;
  }

  private deleteBranch(id){
    // optimistic update
    let itemIndex = this.assets.findIndex(this.branches, id);
    var deletedItem = this.branches.splice(itemIndex, 1);
    
    this.site.deleteBranch(id).subscribe(
    data=> {
      this.dialog.open(SuccessDialogComponent);
    }, error=> {
      this.branches.push(deletedItem[0]);

      this.dialog.open(ErrorDialogComponent);
    });
  }
  
  private getUpdatedItemId(id){
    let element = document.getElementById('item-' + id);
    element.classList.toggle('update');
    this.update = !this.update;
    return element ;
  }

  enableUpdateItem(id){
    let element =  this.getUpdatedItemId(id);
    if (this.update) setTimeout( () =>  element.focus() ,100);
  }

  updateItem(name , id){
   let element = this.getUpdatedItemId(id); // toggle class update 
    
    let item = {name, lang: this.lang};

    this.site.updateBranch(id, item).subscribe(
      data=> {
        let itemIndex = this.branches.findIndex( (item: any) =>{ return item.id === id });
        this.branches.splice(itemIndex, 1, item);
        this.dialog.open(SuccesPostDialogComponent);
    },error => this.dialog.open(ErrorDialogComponent) );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
