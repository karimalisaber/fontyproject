import { Component, OnInit} from '@angular/core';
import { SiteService } from 'src/app/services/site.service';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss'],
})

export class BranchesComponent implements OnInit {
branches$;
lang: string = this.site.getLangNumber();

  constructor(private site: SiteService) { }

  ngOnInit() {
    this.branches$ = this.site.getSpecificLangbranches();
  }

  ngOnChanges(){
    this.branches$ = this.site.getSpecificLangbranches();
  }
}
