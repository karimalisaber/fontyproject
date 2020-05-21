import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { SiteService } from 'src/app/modules/shared/services/site.service';
import { AssetsService } from 'src/app/modules/shared/services/assets.service';

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
    let element = (<HTMLInputElement>document.querySelector("input#addBranch"));
    element.blur();
    
    this.branches.push(branch);
    branch.lang = this.lang;
    this.site.addBranch(branch)
    .subscribe(
      res=> this.snackBar.open('تمت إضافة فرع بنجاح', `` , {duration: 1500})
      ,
      err=> {
        this.snackBar.open('حدثت مشكلة بالاتصال بالسيرفر برجاء المحاولة مرة أخرى', `` , {duration: 1500})
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
    data=> this.snackBar.open('تم حذف الفرع بنجاح', `` , {duration: 1500})
    , error=> {
      this.branches.push(deletedItem[0]);
      this.snackBar.open('حدثت مشكلة بالاتصال بالسيرفر برجاء المحاولة مرة أخرى', `` , {duration: 1500})
    });
  }
  
  private getUpdatedItemId(id){
    let element  = <HTMLInputElement>document.getElementById('item-' + id);
    element.disabled = false;
    return element ;
  }

  enableUpdateItem(id){
    this.disableOtherInputs();
    let element =  this.getUpdatedItemId(id);
    setTimeout( () =>  element.focus() ,100);
  }

  private disableOtherInputs(){
    let elements = document.querySelectorAll(".branches-view input");
    elements.forEach((item:any)=> item.disabled = true);
  }
  
  updateItem(name , id){
    let item = {name, lang: this.lang};

    this.site.updateBranch(id, item).subscribe(
      data=> {
        let itemIndex = this.branches.findIndex( (item: any) =>{ return item.id === id });
        this.branches.splice(itemIndex, 1, item);
        this.snackBar.open('تم تعديل الفرع بنجاح', `` , {duration: 1500});
    }, error => () =>  this.snackBar.open('حدثت مشكلة بالاتصال بالسيرفر برجاء المحاولة مرة أخرى', `` , {duration: 1500})
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
