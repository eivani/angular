import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  @Input() dataSource: any[] = [];

  @Input() columns: { [key: string]: any }[] = [];

  @Input() id = Math.random();

  @Input() rowsPerPage: number = 10;

  @Output() onCellClickEvent = new EventEmitter<Event>();

  @Output() onSaveData = new EventEmitter<Event>();

  @Output() customizeCell = new EventEmitter<Event>();

  @ViewChild('grid', { static: false }) dataGrid!: any;

  changes: any = [];
  editRowKey?: number;

  constructor() { }

  ngOnChanges() {}

  ngOnInit(): void { }

  ngAfterViewInit() {
  }

  customizeSumText = ((event: any) => {
    return Math.floor(event.value).toLocaleString() + "ریال";
  })

  onCellPrepared(event: any) {
    this.customizeCell.emit(event);
  }

  createInstance() {
  }

  onCellClick(event: any) {
    this.onCellClickEvent.emit(event);
  }

  onSaving(e: any) {
    const change = e.changes[0];
    if (change) {
      e.cancel = true;
      e.promise = this.processSaving(change);
    }
  }

  async processSaving(change: any) {

    if (change.type === 'insert') {
      try {
        await
          this.onSaveData.emit(change);
 
      } finally {
        // this.isLoading = false;
      }
    }
    else if (change.type === 'remove') {
      this.onSaveData.emit(change);
      this.editRowKey = 0;
      this.changes = [];
    }
    this.dataGrid.instance.refresh();
  }

}

