import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AdminGridComponent } from 'src/app/shared/components/admin-grid/admin-grid.component';
import { IGridColumn } from 'src/app/shared/models/ag-grid.model';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-report-two',
  templateUrl: './report-two.component.html',
  styleUrls: ['./report-two.component.css']
})
export class ReportTwoComponent implements OnInit {
  columns: IGridColumn[] = [];
  rows: {}[] = [];
  reportForm!: FormGroup;
  id!: number;
  flage: boolean = false;
  editRowData: {} = {}

  @ViewChild('modalData', { static: false }) modalData: any;
  @ViewChild('gridData', { static: false }) gridData!: AdminGridComponent;

  constructor(
    private http: HttpClient,
    private modalService: ModalService,
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  //open modal to update and add button
  openModal(typeModal: string = 'add' || 'update') {
    this.modalService.open(this.modalData);
    if (typeModal === 'update') {
      this.flage = true;
    } else if (typeModal === 'add') {
      this.flage = false;
      this.reportForm.reset();
    }
  }

  getData() {
    this.http.get('http://localhost:3004/report-two-columns').subscribe((item: any) => {
      this.columns = item[0].columns;
    });
    this.http.get('http://localhost:3004/report-two-rows').subscribe((item: any) => {
      this.rows = item
    })
  }

  onSelected(event: any) {
    this.id = event.data.id;
    this.editRowData = event.data
  }

  //close modal
  closeModal() {
    this.modalService.close();
  }

  getDataSubmit(data: any) {

    if (!this.flage) {
      data.id = Math.random();

      this.http.post('http://localhost:3004/report-two-rows', data).subscribe((item: any) => {
        this.rows.push(item);
        this.gridData.agGrid.api.setRowData(this.rows);
        this.closeModal();
      });
    }
    else if (this.flage) {
      data.id = this.id;
      this.http.put('http://localhost:3004/report-two-rows/' + this.id,  data).subscribe((item: any) => {
        let resultId = this.rows.findIndex((x: any) => { return x.id === this.id });
        this.rows[resultId] =  data;
        this.gridData.agGrid.api.setRowData(this.rows);
        this.closeModal();
      });
    }
  }

  // deleted selected data from row 
  deleteReport() {
    this.http.delete('http://localhost:3004/report-two-rows/' + this.id).subscribe((item: any) => {
      this.rows = this.rows.filter((item: any) => item.id !== this.id)
    });
    this.gridData.agGrid.api.setRowData(this.rows)
  }


}
