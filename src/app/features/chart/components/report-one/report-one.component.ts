import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IGridColumn } from 'src/app/shared/models/ag-grid.model';

@Component({
  selector: 'app-report-one',
  templateUrl: './report-one.component.html',
  styleUrls: ['./report-one.component.css']
})
export class ReportOneComponent implements OnInit {
  columns: IGridColumn[] = [];
  rows: {}[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.http.get('http://localhost:3004/report-one').subscribe((item: any) => {
      this.columns = item[0].columns;
      this.rows = item[0].rows;
    })
  }

}
