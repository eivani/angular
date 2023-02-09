import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-material-grid',
  templateUrl: './material-grid.component.html',
  styleUrls: ['./material-grid.component.css']
})
export class MaterialGridComponent implements OnInit {
  // companiesList: CompanyModel[] = new Array<CompanyModel>();
  // companiesCount: number = 0;
  // PSFparam: DataGridPSFModel = {
  //   PageIndex: 1,
  //   PageSize: 20,
  // // };
  // displayedColumns: string[] = ['CompanyID', 'CompanyName'];

  constructor(
    // private companyService: CompanyService
    ) { }

  ngOnInit(): void {
    // get list of companies grid list
    // this.getCompanies();
  }

  // getCompanies() {
  //   this.companyService.getList(this.PSFparam).subscribe(result => {
  //     this.companiesList = result.list;
  //     this.companiesCount = result.totalCount;
  //   });
  // }


  // onPaginateChange(event: PageEvent) {
  //   let page = event.pageIndex;
  //   let size = event.pageSize;

  //   this.PSFparam = {
  //     PageIndex: page,
  //     PageSize: size,
  //   }
  //   page = page + 1;
  //   this.companyService.getList(this.PSFparam).subscribe((result: any) => {
  //     this.companiesList = result.list;
  //     this.companiesCount = result.totalCount;
  //   });

  //   // if(this.filterValue == null) {
  //   //   page = page +1;
  //   //   this.userService.findAll(page, size).pipe(
  //   //     map((userData: UserData) => this.dataSource = userData)
  //   //   ).subscribe();
  //   // } else {
  //   //   this.userService.paginateByName(page, size, this.filterValue).pipe(
  //   //     map((userData: UserData) => this.dataSource = userData)
  //   //   ).subscribe()
  //   // }

  // }


}
