import { Component, OnInit, OnDestroy } from '@angular/core';
import { SiteService } from 'src/app/services/site.service';
import { Subscription } from 'rxjs';
import { AssetsService } from 'src/app/services/assets.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

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

  constructor(
    private route: ActivatedRoute, 
    private site: SiteService, 
    private assets: AssetsService, 
    private snackBar: MatSnackBar) { }

  ngOnInit() {
   this.subscription = this.site.getBranches(this.lang)
    .subscribe(
      res=> this.branches =res,
      () =>  this.snackBar.open('حدثت مشكلة بالاتصال بالسيرفر برجاء المحاولة مرة أخرى', `` , {duration: 1500}));
  }

  addBranch(branch){
    this.branches.push(branch);
    branch.lang = this.lang;
    this.site.addBranch(branch)
    .subscribe(
      res=> () =>  this.snackBar.open('تمت إضافة فرع بنجاح', `` , {duration: 1500})
      ,
      err=> {
        () =>  this.snackBar.open('حدثت مشكلة بالاتصال بالسيرفر برجاء المحاولة مرة أخرى', `` , {duration: 1500})
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
      () =>  this.snackBar.open('تم حذف الفرع بنجاح', `` , {duration: 1500});
    }, error=> {
      this.branches.push(deletedItem[0]);
      () =>  this.snackBar.open('حدثت مشكلة بالاتصال بالسيرفر برجاء المحاولة مرة أخرى', `` , {duration: 1500})
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
        () =>  this.snackBar.open('تم تعديل الفرع بنجاح', `` , {duration: 1500});
    }, error => () =>  this.snackBar.open('حدثت مشكلة بالاتصال بالسيرفر برجاء المحاولة مرة أخرى', `` , {duration: 1500})
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
