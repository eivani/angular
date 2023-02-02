import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { IGridColumn } from '../../models/ag-grid.model';

@Component({
  selector: 'app-admin-grid',
  templateUrl: './admin-grid.component.html',
  styleUrls: ['./admin-grid.component.css']
})
export class AdminGridComponent implements OnInit {

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  gridApi!: GridApi;

  @Input() columnDefs: IGridColumn[] = [];

  @Input() rowData: { [key: string]: any }[] = [];

  @Output() rowSelected = new EventEmitter();

  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  constructor() { }

  ngOnInit(): void {
  
  }

  // Example load data from sever
  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }

  // Example of consuming Grid Event
  onCellClicked(e: CellClickedEvent): void {
    this.rowSelected.emit(e);
  }

  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }

}
