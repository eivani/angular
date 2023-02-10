import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { log } from 'console';
import { AdminGridComponent } from 'src/app/shared/components/admin-grid/admin-grid.component';
import { IGridColumn } from 'src/app/shared/models/ag-grid.model';
import { ModalService } from '../../../../shared/services/modal.service'

@Component({
  selector: 'app-report-one',
  templateUrl: './report-one.component.html',
  styleUrls: ['./report-one.component.css']
})
export class ReportOneComponent implements OnInit {
  columns: IGridColumn[] = [];
  rows: {}[] = [];
  reportForm!: FormGroup;
  id!: number;
  Data!: { id?: number, BankName: string, Am4: string }
  flage: boolean = false;

  @ViewChild('modalData', { static: false }) modalData: any;
  @ViewChild('gridData', { static: false }) gridData!: AdminGridComponent;

  constructor(
    private http: HttpClient,
    private modalService: ModalService,
  ) { }

  ngOnInit(): void {
    this.getData();
    this.oninitForm()
  }

  getData() {
    this.http.get('http://localhost:3004/report-one-columns').subscribe((item: any) => {
      this.columns = item[0].columns;
    })
    this.http.get('http://localhost:3004/report-one-rows').subscribe((item: any) => {
      console.log('aaaaaaa', item)
      this.rows = item;
    })
  }

  oninitForm() {
    this.reportForm = new FormGroup({
      BankName: new FormControl(''),
      Am4: new FormControl(''),
    })
  }

  openModal(typeModal: string = 'add' || 'update') {
    this.modalService.open(this.modalData);
    if (typeModal === 'update') {
      this.reportForm.controls['BankName'].patchValue(this.Data.BankName);
      this.reportForm.controls['Am4'].patchValue(this.Data.Am4);
      this.flage = true;
    } else if (typeModal === 'add') {
      this.flage = false;
      this.reportForm.reset();
    }
  }

  onSubmit() {
    if (!this.flage) {
      let prm = { id: Math.random(), BankName: this.reportForm.controls['BankName'].value, Am4: this.reportForm.controls['Am4'].value };
      
      this.http.post('http://localhost:3004/report-one-rows', prm).subscribe((item: any) => {
        this.rows.push(item);
        this.gridData.agGrid.api.setRowData(this.rows);
        this.closeModal();
      });
    } else if (this.flage) {
      let prm = { id: this.id, BankName: this.reportForm.controls['BankName'].value, Am4: this.reportForm.controls['Am4'].value };

      this.http.patch('http://localhost:3004/report-one-rows/' + this.id, prm).subscribe((item: any) => {
        let resultId = this.rows.findIndex((x: any) => { return x.id === this.id });
        this.rows[resultId] = prm;
        this.gridData.agGrid.api.setRowData(this.rows);
        this.closeModal();
      });
    }
  }

  onSelected(event: any) {
    this.id = event.data.id;
    this.Data = event.data
  }

  deleteReport() {
    this.http.delete('http://localhost:3004/report-one-rows/' + this.id).subscribe((item: any) => {
      this.rows = this.rows.filter((item: any) => item.id !== this.id)
    });
    this.gridData.agGrid.api.setRowData(this.rows)
  }

  closeModal() {
    this.modalService.close();
  }

}
